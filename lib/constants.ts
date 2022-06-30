import { Defaults } from "./types";

/**
 * Default constants for meta data options and other aspects.
 * @property {string} url The website url
 * @property {string} description The description meta tag for the page
 * @property {string[]} keywords The keywords meta tag for the page
 * @property {string} image The url of the image to be displayed for the page
 * @property {string} icon The url of the icon
 * @property {string} theme-color The page's theme color
 * @type {Defaults}
 */
export const defaults: Defaults = {
    url: process.env.NODE_ENV === "production" ? "https://navalabs.net/" : "http://localhost:3000",
    description: "No description was provided for this page.",
    keywords: ["NavaLabs"],
    image: "/assets/50VVikXdXROYy9qncvNg3umWNy4ityiC.png",
    icon: "/assets/jlarzqa2wGR9X9sZvZWkVEJopxqUv5iW.png",
    "theme-color": "#ffffff"
};