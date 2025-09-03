import { Const } from "@/utils/Constants";

export default async function handler(req, res) {
  res.setHeader("Content-Type", "application/xml");
  const data = [
    {
      loc: "/",
      lastmod: "2025-09-04",
      frequency: "monthly",
      priority: 1.0,
    },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${data
          .map(
            (item) => `
              <url>
                <loc>${Const.ClientLink}${item?.loc || ""}</loc>
                <lastmod>${item?.lastmod || ""}</lastmod>
                <changefreq>${item?.frequency || ""}</changefreq>
                <priority>${item?.priority || ""}</priority>
              </url>`
          )
          .join("")}
      </urlset>`;

  // Send the response
  res.status(200).send(sitemap);
}
