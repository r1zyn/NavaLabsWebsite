import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
import type { NextComponent } from "../lib/types";
import { NextRouter, useRouter } from "next/router";
import { ThemeButton } from "./ThemeButton";

/**
 * Navigation component for site navigation.
 * @returns {JSX.Element}
 */
export const Navbar: NextComponent = (): JSX.Element => {
    const [pageTop, setPageTop]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(true) as [boolean, Dispatch<SetStateAction<boolean>>];
    const router: NextRouter = useRouter();

    useEffect((): void => {
        document.body.onscroll = (): void => {
            if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
                setPageTop(false);
            } else {
                setPageTop(true);
            }
        };
    }, []);

    return <header id="masthead" className={`${!pageTop ? "fixed shadow-2xl" : "absolute"} bg-white dark:bg-[#1A1A1A] py-[1.125em] px-[3vw] transition duration-700 ease-in-out z-[1] w-full`}>
        <div className="mx-auto max-w-[1200px]">
            <div className="flex items-center">
                <div style={{
                    flex: "0 1 auto"
                }}>
                    <p className="m-0">
                        <Link href="/" passHref>
                            <a className="max-h-[36px] h-auto max-w-full border-none align-middle font-bold text-2xl text-gray-800 dark:text-white">NavaLabs</a>
                        </Link>
                    </p>
                </div>
                <nav id="main-navigation" className="ml-auto" aria-label="Main Navigation">
                    <div>
                        <button id="menu-close" className="menu-toggle hidden">
                            <span className="screen-reader-text">Open Menu</span>
                            <span className="icon-close" aria-hidden="true"></span>
                        </button>
                        <ul className="hidden lg:flex items-center list-none m-0 p-0 dark:text-white">
                            <li className={`${router.pathname === "/" ? "text-[#00c6ff]" : ""} inline-block mt-0 mb-0 mr-0 ml-[1.25em] pb-[0.1875em] pt-[0.1875em] relative hover:text-[#00c6ff]`}>
                                <Link href="/" passHref>
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li className={`${router.pathname === "/about" ? "text-[#00c6ff]" : ""} inline-block mt-0 mb-0 mr-0 ml-[1.25em] pb-[0.1875em] pt-[0.1875em] relative hover:text-[#00c6ff]`}>
                                <Link href="/about" passHref>
                                    <a>About Us</a>
                                </Link>
                            </li>
                            <li className={`${router.pathname === "/jobs" ? "text-[#00c6ff]" : ""} inline-block mt-0 mb-0 mr-0 ml-[1.25em] pb-[0.1875em] pt-[0.1875em] relative hover:text-[#00c6ff]`}>
                                <Link href="/jobs" passHref>
                                    <a>Jobs</a>
                                </Link>
                            </li>
                            <li className={`${router.pathname === "/faw" ? "text-[#00c6ff]" : ""} inline-block mt-0 mb-0 mr-0 ml-[1.25em] pb-[0.1875em] pt-[0.1875em] relative hover:text-[#00c6ff]`}>
                                <Link href="/faw" passHref>
                                    <a>FAQ</a>
                                </Link>
                            </li>
                            <li className={`${router.pathname === "/updates" ? "text-[#00c6ff]" : ""} inline-block mt-0 mb-0 mr-0 ml-[1.25em] pb-[0.1875em] pt-[0.1875em] relative hover:text-[#00c6ff]`}>
                                <Link href="/updates" passHref>
                                    <a>Updates</a>
                                </Link>
                            </li>
                            <li className="inline-block mt-0 mb-0 mr-0 ml-[1.25em] pb-[0.1875em] pt-[0.1875em] relative">
                                <Link href="/discord" passHref>
                                    <a className="px-[1.25em] py-[0.75em] items-center text-white bg-[#00c6ff] border-0 rounded-[1.75em] cursor-pointer inline-flex justify-center leading-[1.2] opacity-100 transition duration-[0.3s] ease align-middle hover:opacity-[.8]">Discord</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <ThemeButton />
                <button id="menu-open" className="menu-toggle hidden">
                    <span className="screen-reader-text">Close Menu</span>
                    <span className="icon-menu" aria-hidden="true"></span>
                </button>
            </div>
        </div>
    </header>;
};