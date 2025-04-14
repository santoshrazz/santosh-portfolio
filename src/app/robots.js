export default async function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: " /",
            disallow: ["/blog/new"],
        },
        sitemap: `${process.env.NEXT_PUBLIC_BASE_LIVE_URL}/sitemap.xml`,
    };
}
