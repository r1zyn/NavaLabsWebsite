import type { NextComponent } from "../lib/types";
import { ThemeContext } from "../contexts/ThemeContext";
import { useEffect, useState } from "react";

/**
 * Interface for header component options.
 * @interface HeaderProps
 */
export interface HeaderProps {
    title: string;
    description: string;
    buttons?: JSX.Element[];
}

/**
 * Header component for building page headers.
 * @param {HeaderProps} props The props for the header component
 * @returns {JSX.Element}
 */
export const Header: NextComponent<HeaderProps> = ({ title, description, buttons }: HeaderProps): JSX.Element => {
    const [isDark, setDark] = useState(false);
    useEffect((): void => {
        // @ts-ignore
        document.addEventListener("themeUpdate", (event: CustomEvent): void => {
            setDark(event.detail.theme === "dark");
        });
    });

    return <ThemeContext.Consumer>
        {(ctx: { theme: "light" | "dark"; }): JSX.Element => <main className="box-border flex-grow w-full block">
            <section className="py-[7.5em] relative text-center px-[3vw] text-[#fff] h-screen flex flex-col items-center justify-center" style={{
                background: isDark ? "linear-gradient(to right, #1a1a1a, #1a1a1a)" : "linear-gradient(to right, #0072ff, #00c6ff)"
            }}>
                <div className="bg-center bg-cover bottom-0 left-0 opacity-[0.2] absolute right-0 top-0 text-center" style={{
                    backgroundImage: "url('https://themes.stackbit.com/demos/libris/images/5.jpg')",
                    filter: isDark ? "brightness(0.3)" : "brightness(1)"
                }} />
                <div className="relative mx-auto block text-center" data-aos="fade-up" data-aos-duration="3000">
                    <div className="mb-[0.75em]">
                        <h1 className="text-[2.5em] md:text-[2.95em] lg:text-[3em] m-0 font-bold tracking-tight">{title}</h1>
                    </div>
                    <div className="text-[1.25em] leading-[1.5]">
                        <p style={{
                            margin: "0 0 1em"
                        }}>{description}</p>
                    </div>
                    {buttons}
                </div>
            </section>
        </main>}
    </ThemeContext.Consumer>;
};