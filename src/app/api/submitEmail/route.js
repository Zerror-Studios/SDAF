import { google } from 'googleapis';
import { JWT } from 'google-auth-library';
import { NextResponse } from 'next/server';
const nodemailer = require("nodemailer");

// ✅ Google Auth
async function authenticate() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
      private_key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  })

  return google.sheets({ version: "v4", auth })
}

const spreadsheetId = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID




export async function POST(req) {
  try {
    const body = await req.json()

    const {
      fullName,
      email,
      phone,
      selectedDays,
      updates,
      channel,
      consent,
    } = body

    // ✅ Validation
    if (!fullName || !email || !phone || !updates?.length || !channel || !consent) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      )
    }

    const sheets = await authenticate()

    // ✅ Date (India timezone)
    const dateInKolkata = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    })
    const [datePart] = dateInKolkata.split(",")
    const formattedDate = datePart.trim()

    // ✅ Get existing rows
    const getRows = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Sheet1!A:G",
    })

    const rows = getRows.data.values || []
    const emailColumnIndex = 2

    const existingRowIndex = rows.findIndex(
      (row, index) => index > 0 && row[emailColumnIndex] === email
    )

    const newRow = [
      formattedDate,
      fullName,
      email,
      phone,
      selectedDays.join(", "),
      updates.join(", "),
      channel,
    ]

    // ✅ Update OR Append
    if (existingRowIndex !== -1) {
      const rowNumber = existingRowIndex + 1

      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `Sheet1!A${rowNumber}:G${rowNumber}`,
        valueInputOption: "RAW",
        requestBody: { values: [newRow] },
      })
    } else {
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: "Sheet1!A:G",
        valueInputOption: "RAW",
        insertDataOption: "INSERT_ROWS",
        requestBody: { values: [newRow] },
      })
    }

    // ✅ EMAIL TRANSPORT
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    })

    // ✅ HTML EMAIL TEMPLATE
    const htmlTemplate = `
<html>
  <body style="font-family: Arial, sans-serif; background:#f4f6f8; padding:20px;">
    <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:10px; overflow:hidden;">
      
      <div style="background:#111; color:#fff; padding:20px; text-align:center;">
        <h2 style="margin:0;">New SDAF Form Submission</h2>
      </div>

      <div style="padding:25px;">
        <table style="width:100%; border-collapse:collapse; font-size:14px;">
          
          <tr>
            <td style="padding:10px; border-bottom:1px solid #eee;"><b>Date</b></td>
            <td style="padding:10px; border-bottom:1px solid #eee;">${formattedDate}</td>
          </tr>

          <tr>
            <td style="padding:10px; border-bottom:1px solid #eee;"><b>Full Name</b></td>
            <td style="padding:10px; border-bottom:1px solid #eee;">${fullName}</td>
          </tr>

          <tr>
            <td style="padding:10px; border-bottom:1px solid #eee;"><b>Email</b></td>
            <td style="padding:10px; border-bottom:1px solid #eee;">${email}</td>
          </tr>

          <tr>
            <td style="padding:10px; border-bottom:1px solid #eee;"><b>Phone</b></td>
            <td style="padding:10px; border-bottom:1px solid #eee;">${phone}</td>
          </tr>

          <tr>
            <td style="padding:10px; border-bottom:1px solid #eee;"><b>Selected Days</b></td>
            <td style="padding:10px; border-bottom:1px solid #eee;">${selectedDays.join(", ")}</td>
          </tr>

          <tr>
            <td style="padding:10px; border-bottom:1px solid #eee;"><b>Updates</b></td>
            <td style="padding:10px; border-bottom:1px solid #eee;">${updates.join(", ")}</td>
          </tr>

          <tr>
            <td style="padding:10px;"><b>Preferred Channel</b></td>
            <td style="padding:10px;">${channel}</td>
          </tr>

        </table>

        <p style="margin-top:25px; font-size:12px; color:#888; text-align:center;">
          Automated message • Please do not reply
        </p>

      </div>

    </div>
  </body>
</html>
`

    // ✅ SEND EMAIL
    await transport.sendMail({
      from: process.env.NEXT_PUBLIC_EMAIL_USER,
      to: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
      subject: "New Form Submission for SDAF",
      html: htmlTemplate,
    })

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    )

  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    )
  }
}
