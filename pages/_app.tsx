import type { AppProps } from "next/app";
import type { NextPageProps } from "../lib/types";
import { NextRouter, useRouter } from "next/router";
import { NProgress, configure, done, start } from "nprogress";
import { Layout } from "../components/Layout";
import { ScrollButton } from "../components/ScrollButton";

import AOS from "aos";
import React, { useEffect } from "react";
import metadata from "../lib/static/meta.json";

import "../styles/globals.scss";
import "../lib/nprogress/nprogress.js";
import "../lib/nprogress/nprogress.css";
import "aos/dist/aos.css";

function App({ Component, pageProps: { session, ...pageProps } }: AppProps<NextPageProps>) {
    const router: NextRouter = useRouter();

    useEffect((): (() => void) => {
        if (localStorage.getItem("color-theme") === "dark" || (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
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
    return Component.defaultProps && Component.defaultProps.name && typeof metadata[Component.defaultProps?.name.toLowerCase()] !== "undefined" ? <>
        {/* @ts-ignore */}
        <Layout name={Component.defaultProps?.name} meta={metadata[Component.defaultProps?.name.toLowerCase()]}>
            <Component {...pageProps} />
            <ScrollButton />
        </Layout>
    </> : <>
        <Component {...pageProps} />
        <ScrollButton />
    </>;
}

export default App;