/**
 * Capitalizes all words in a string.
 * @param {string} text The text to be capitalized
 * @returns {string}
 */
export function capitalize(text: string): string {
    return text.split(" ").map((word: string): string => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()).join(" ");
}

/**
 * Returns the image file type from a given file name.
 * @param {string} url
 * @returns {"png" | "jpg" | "jpeg" | "ico" | "webp" | "gif" | undefined}
 */
export function imageSuffix(url: string): "png" | "jpg" | "jpeg" | "ico" | "webp" | "gif" | undefined {
    if (url.endsWith(".png")) return "png";
    if (url.endsWith(".jpg")) return "jpg";
    if (url.endsWith(".jpeg")) return "jpeg";
    if (url.endsWith(".ico")) return "ico";
    if (url.endsWith(".webp")) return "webp";
    if (url.endsWith(".gif")) return "gif";
}