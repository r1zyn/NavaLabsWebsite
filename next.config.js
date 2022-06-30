/** 
 * @type {import("next").NextConfig} 
 */
const nextConfig = {
    env: {},
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: "/invite/discord",
                destination: "https://discord.gg/XtSWWHfTeE",
                permanent: false
            }
        ]
    }
};

module.exports = nextConfig;