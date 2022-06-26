import type { BaseContext } from "next/dist/shared/lib/utils";
import type { ComponentType, CSSProperties, ReactNode } from "react";
import type { MetaOptions } from "../components/Meta";
import type { NextPageContext } from "next";

/**
 * Type definition for default constants.
 */
export type Defaults = Intersection<Required<Pick<MetaOptions, "keywords">>, {
    url: string;
    description: string;
    image: string;
    icon: string;
    "theme-color": string;
}>;

/**
 * Type definition for Icon component props.
 */
export interface IconProps {
    className?: string;
    style?: CSSProperties;
}

/**
 * Type definition for Next components.
 */
export type NextComponent<P = {}, IP = {}, C extends BaseContext = NextPageContext> = ComponentType<P> & {
    getInitialProps?(context: C): IP | Promise<IP>;
};

/**
 * Type definition for Next components with children.
 */
export type NextComponentWithChildren<Props = {}> = NextComponent<Props & {
    children: ReactNode;
}>;

/**
 * Type definition for Next components with styling.
 */
export type NextComponentWithStyles<Props = {}> = NextComponent<Props & {
    className?: string;
    style?: CSSProperties;
}>;

/**
 * Type definition for Next pages.
 */
export interface NextPageProps {
    name: string;
};

/**
 * Shorthand type for type intersecting.
 */
export type Intersection<T1, T2> = T1 & T2;

/**
 * Shorthand type for type unions.
 */
export type Union<T1, T2> = T1 | T2; 