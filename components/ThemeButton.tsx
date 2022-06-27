import type { NextComponentWithStyles } from "../lib/types";
import { useEffect, useState } from "react";
import { eventDispatcher } from "../events/ThemeUtil";

/**
 * Button for toggling between light and dark mode.
 * @param {{ className: string; style: React.CSSProperties }} props The props for the theme button component
 * @returns {JSX.Element}
 */
export const ThemeButton: NextComponentWithStyles = ({ className, style }): JSX.Element => {
    const [theme, toggleTheme] = useState("light");

    useEffect((): void => {
        if (localStorage.getItem("color-theme") === "dark" || (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            toggleTheme("dark");
        } else {
            toggleTheme("light");
        }
    }, [toggleTheme]);

    return <button id="theme-toggle" type="button" className={`${className ? className : ""} text-gray-900 dark:text-white focus:outline-none rounded-lg text-sm p-2.5`}
        onClick={(): void => {
            const themeToggleDarkIcon: HTMLElement = document.getElementById("theme-toggle-dark-icon") as HTMLElement;
            const themeToggleLightIcon: HTMLElement = document.getElementById("theme-toggle-light-icon") as HTMLElement;

            themeToggleDarkIcon.classList.add("hidden");
            themeToggleLightIcon.classList.add("hidden");

            eventDispatcher("themeUpdate", {
                theme: theme === "light" ? "dark" : "light"
            });

            if (localStorage.getItem("color-theme")) {
                if (theme === "light") {
                    document.documentElement.classList.add("dark");
                    localStorage.setItem("color-theme", "dark");
                    themeToggleLightIcon.classList.remove("hidden");
                    toggleTheme("dark");
                } else {
                    document.documentElement.classList.remove("dark");
                    localStorage.setItem("color-theme", "light");
                    themeToggleDarkIcon.classList.remove("hidden");
                    toggleTheme("light");
                }
            } else {
                if (document.documentElement.classList.contains("dark")) {
                    document.documentElement.classList.remove("dark");
                    localStorage.setItem("color-theme", "light");
                    themeToggleDarkIcon.classList.remove("hidden");
                    toggleTheme("light");
                } else {
                    document.documentElement.classList.add("dark");
                    localStorage.setItem("color-theme", "dark");
                    themeToggleLightIcon.classList.remove("hidden");
                    toggleTheme("dark");
                }
            }
        }}>
        <svg id="theme-toggle-dark-icon" className={`w-5 h-5 ${theme === "dark" ? "hidden" : "block"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
        <svg id="theme-toggle-light-icon" className={`w-5 h-5 ${theme === "light" ? "hidden" : "block"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd" />
        </svg>
    </button>;
};