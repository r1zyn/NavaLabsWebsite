# NavaLabs Website
### About
This is the repository for the official NavaLabs website, made with [Next.js](https://nextjs.org) (TypeScript project) and [Tailwind CSS](https://tailwindcss.com). You can view the website at https://navalabs.net/.

ESLint, Prettier, dotenv-cli and PostCSS are also pre-installed.

### Getting Started
To run the website on a development server, fork, clone or download the repository. Ensure any needed environment variables are declared in a `.env.local` file in the root directory and install required dependencies with `npm install` or `yarn install` (master repository uses yarn, hence the `yarn.lock` file being included in the repository). Run `npm run dev` and go to https://localhost:3000 to view the website.

To run the website on [Vercel](https://vercel.com), ensure you have created an account and connected it to your GitHub account. Create a new project, link your forked repository, ensure any required environment variables are set and then deploy the project.

### Important Directories/Files
* `vercel.json` - Vercel configuration settings, learn more at https://vercel.com/docs/project-configuration
* `next.config.js` - Next.js configuration file, learn more at https://nextjs.org/docs/api-reference/next.config.js/introduction
* `tailwind.config.js` - Tailwind CSS configuration file, learn more at https://tailwindcss.com/docs/configuration
* `styles` - SCSS files for styling
* `public/assets` - For image assets
* `pages` - Page file folder
* `lib` - Important utilities etc
* `events` - Custom DOM event files
* `contexts` - React context files
* `components` - Component files