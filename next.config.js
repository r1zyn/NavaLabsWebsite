/** 
 * @type {import("next").NextConfig} 
 */
const nextConfig = {
    env: {
        CLIENT_ID: process.env.CLIENT_ID,
        CLIENT_SECRET: process.env.CLIENT_SECRET,
        CALLBACK_URL: process.env.CALLBACK_URL,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        DATABASE_URL: process.env.DATABASE_URL
    },
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: "/discord",
                destination: "https://discord.com/invite/cTbHMejznF",
                permanent: true
            }
        ]
    }
};

module.exports = nextConfig;