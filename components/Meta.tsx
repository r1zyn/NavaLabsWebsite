import Head from "next/head";
import type { NextComponent } from "../lib/types";

import { capitalize, imageSuffix } from "../lib/utils";
import { defaults } from "../lib/constants";

/**
 * Interface for meta component options.
 * @interface MetaOptions
 */
export interface MetaOptions {
    description?: string;
    keywords?: string[];
    "theme-color"?: string;
    image?: string;
}

/**
 * Component for defining meta data in next/head.
 * @param {{ name: string; meta: MetaOptions; }} props The props for the meta component
 * @returns {JSX.Element}
 */
export const Meta: NextComponent<{ name: string, meta: MetaOptions; }> = ({ name, meta }: { name: string, meta: MetaOptions; }): JSX.Element => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="title" content={`NavaLabs | ${capitalize(name)}}`} />
            <meta name="description" content={meta.description || defaults.description} />
            <meta name="robots" content="all" />
            <meta name="DC.title" content={`NavaLabs | ${capitalize(name)}}`} />
            <meta name="keywords" content={meta.keywords ? meta.keywords.join(", ") : defaults.keywords.join(", ")} />

            <meta name="theme-color" content={meta["theme-color"] || defaults["theme-color"]} />
            <meta name="apple-mobile-web-app-status-bar-style" content={meta["theme-color"] || defaults["theme-color"]} />
            <meta name="msapplication-navbutton-color" content={meta["theme-color"] || defaults["theme-color"]} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={defaults.url} />
            <meta property="og:title" content={`NavaLabs | ${capitalize(name)}}`} />
            <meta property="og:description" content={meta.description || defaults.description} />
            <meta property="og:image" content={meta.image || defaults.image} />
            <meta property="og:site_name" content="NavaLabs" />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={defaults.url} />
            <meta property="twitter:title" content={`NavaLabs | ${capitalize(name)}}`} />
            <meta property="twitter:description" content={meta.description || defaults.description} />
            <meta property="twitter:image" content={meta.image || defaults.image} />

            <title>{`NavaLabs | ${capitalize(name)}`}</title>
            <link rel="icon" type={`image/${imageSuffix(defaults.icon)}`} href={defaults.icon} />
            <link rel="shortcut icon" type={`image/${imageSuffix(defaults.icon)}`} href={defaults.icon} />
            <link rel="apple-touch-icon" type={`image/${imageSuffix(defaults.icon)}`} href={defaults.icon} />
        </Head>
    );
};