import { google } from "googleapis";
import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

// ✅ Google Auth
async function authenticate() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
      private_key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}

const spreadsheetId = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID;

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      firstName,
      lastName,
      email,
      contact,
      socialLinks,
      portfolioLink,
    } = body;

    // ✅ Validation
    if (
      !firstName ||
      !lastName ||
      !email ||
      !contact ||
      !socialLinks ||
      !portfolioLink
    ) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    const sheets = await authenticate();

    // ✅ Date (India timezone)
    const dateInKolkata = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });
    const [datePart] = dateInKolkata.split(",");
    const formattedDate = datePart.trim();

    // ✅ New Row Data (Artist Form)
    const newRow = [
      formattedDate,
      firstName,
      lastName,
      email,
      contact,
      socialLinks,
      portfolioLink,
    ];

    // ✅ Append Only (No update logic needed)
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Artists Form!A:G", // 🔥 Make sure your sheet tab name matches
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: { values: [newRow] },
    });

    // ✅ EMAIL TRANSPORT
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    });

    // ✅ HTML EMAIL TEMPLATE
    const htmlTemplate = `
<html>
  <body style="font-family: Arial, sans-serif; background:#f4f6f8; padding:20px;">
    <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:10px; overflow:hidden;">
      
      <div style="background:#111; color:#fff; padding:20px; text-align:center;">
        <h2 style="margin:0;">New Artist Application</h2>
      </div>

      <div style="padding:25px;">
        <table style="width:100%; border-collapse:collapse; font-size:14px;">
          
          <tr>
            <td style="padding:10px; border-bottom:1px solid #eee;"><b>Date</b></td>
            <td style="padding:10px; border-bottom:1px solid #eee;">${formattedDate}</td>
          </tr>

          <tr>
            <td style="padding:10px; border-bottom:1px solid #eee;"><b>First Name</b></td>
            <td style="padding:10px; border-bottom:1px solid #eee;">${firstName}</td>
          </tr>

          <tr>
            <td style="padding:10px; border-bottom:1px solid #eee;"><b>Last Name</b></td>
            <td style="padding:10px; border-bottom:1px solid #eee;">${lastName}</td>
          </tr>

          <tr>
            <td style="padding:10px; border-bottom:1px solid #eee;"><b>Email</b></td>
            <td style="padding:10px; border-bottom:1px solid #eee;">${email}</td>
          </tr>

          <tr>
            <td style="padding:10px; border-bottom:1px solid #eee;"><b>Contact</b></td>
            <td style="padding:10px; border-bottom:1px solid #eee;">${contact}</td>
          </tr>

          <tr>
            <td style="padding:10px; border-bottom:1px solid #eee;"><b>Social Links</b></td>
            <td style="padding:10px; border-bottom:1px solid #eee;">${socialLinks}</td>
          </tr>

          <tr>
            <td style="padding:10px;"><b>Portfolio Link</b></td>
            <td style="padding:10px;">${portfolioLink}</td>
          </tr>

        </table>

        <p style="margin-top:25px; font-size:12px; color:#888; text-align:center;">
          Automated notification • SDAF Artist Submission
        </p>

      </div>

    </div>
  </body>
</html>
`;

    // ✅ SEND EMAIL
    await transport.sendMail({
      from: process.env.NEXT_PUBLIC_EMAIL_USER,
      to: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
      subject: "New Artist Application - SDAF",
      html: htmlTemplate,
    });

    return NextResponse.json(
      { message: "Artist form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
