import { Footer } from "./Footer";
import { Fragment, ReactNode } from "react";
import { Meta, MetaOptions } from "./Meta";
import { Navbar } from "./Navbar";
import type { NextComponentWithChildren } from "../lib/types";

/**
 * Interface for layout component options.
 * @interface LayoutOptions
 */
export type LayoutOptions = {
    children: ReactNode;
    name: string;
    meta: MetaOptions;
};

/**
 * The generic layout structure/wrapper for pages. Includes meta and page content.
 * @param {LayoutOptions} props The props for the layout component
 * @returns {JSX.Element}
 */
export const Layout: NextComponentWithChildren<LayoutOptions> = (props: LayoutOptions): JSX.Element => {
    return (
        <Fragment>
            <Meta {...props} />
            
            <div id="root" className="font-sans">
                <Navbar />

                <main className="z-20">
                    {props.children}
                </main>

                <Footer />
            </div>
        </Fragment>
    );
};