import type { NextComponentWithChildren } from "../lib/types";

/**
 * The container component for bundling page content components into one component.
 * @param {{ children: React.ReactNode; }} props The props for the container component
 * @returns {JSX.Element}
 */
export const Container: NextComponentWithChildren = ({ children }): JSX.Element => {
    return <div className="w-screen flex flex-col justify-center items-center bg-[#fff] dark:bg-[#1a1a1a]">
        {children}
    </div>;
};