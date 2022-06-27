import type { AppProps } from "next/app";
import type { NextPageProps } from "../lib/types";
import { NextRouter, useRouter } from "next/router";
import { NProgress, configure, done, start } from "nprogress";
import { Layout } from "../components/Layout";
import { ScrollButton } from "../components/ScrollButton";
import { ThemeContext } from "../contexts/ThemeContext";

import AOS from "aos";
import React, { useEffect, useState } from "react";
import metadata from "../lib/static/meta.json";

import "../styles/globals.scss";
import "../lib/nprogress/nprogress.js";
import "../lib/nprogress/nprogress.css";
import "aos/dist/aos.css";

function App({ Component, pageProps: { session, ...pageProps } }: AppProps<NextPageProps>) {
    const router: NextRouter = useRouter();
    const [theme, toggleTheme] = useState("light");
    const extendedThemeToggle = () => toggleTheme(theme === "light" ? "dark" : "light");

    useEffect((): (() => void) => {
        if (localStorage.getItem("color-theme") === "dark" || (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            document.documentElement.classList.add("dark");
            toggleTheme("dark");
        } else {
            document.documentElement.classList.remove("dark");
            toggleTheme("light");
        }

        AOS.init();

        configure({
            template: "<div class='bar' role='bar' style='height: 0.5rem; background: #00c6ff;'></div>"
        });

        const handleStart: (_url: string) => NProgress = (_url: string): NProgress => start();
        const handleStop: () => NProgress = (): NProgress => done();

        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleStop);
        router.events.on("routeChangeError", handleStop);

        return (): void => {
            router.events.off("routeChangeStart", handleStart);
            router.events.off("routeChangeComplete", handleStop);
            router.events.off("routeChangeError", handleStop);
        };
    }, [router.events]);

    // @ts-ignore
    return Component.defaultProps && Component.defaultProps.name && typeof metadata[Component.defaultProps?.name.toLowerCase()] !== "undefined" ? <ThemeContext.Provider value={theme}>
        {/* @ts-ignore */}
        <Layout name={Component.defaultProps?.name} meta={metadata[Component.defaultProps?.name.toLowerCase()]}>
            <Component {...pageProps} />
            <ScrollButton />
        </Layout>
    </ThemeContext.Provider> : <ThemeContext.Provider value={{
        theme: theme as "light" | "dark",
        toggleTheme: extendedThemeToggle
    }}>
        <Component {...pageProps} />
        <ScrollButton />
    </ThemeContext.Provider>;
}

export default App;