declare global {
    namespace NodeJS {
        interface ProcessEnv {
            CLIENT_ID: string;
            CLIENT_SECRET: string;
            CALLBACK_URL: string;
            NEXTAUTH_SECRET: string;
            DATABASE_URL: string;
        }
    }
}

/**
 * The `env` object defining provided environment variables to alter `process.env`.
 * Environment variabled are defined in your .env.local file.
 * @type {NodeJS.ProcessEnv}
 */
export const env: NodeJS.ProcessEnv = global.process.env || {
    NODE_ENV: process.env.NODE_ENV,
    TZ: process.env.TZ,
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    CALLBACK_URL: process.env.CALLBACK_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    DATABASE_URL: process.env.DATABASE_URL
};

if (process.env.NODE_ENV !== "production") global.process.env = env;