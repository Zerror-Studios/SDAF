/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  reactStrictMode: true,
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemaps/sitemap_index",
      },
    ];
  },
};

export default nextConfig;
