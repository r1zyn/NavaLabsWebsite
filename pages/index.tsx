import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { Icon } from "../components/Icon";
import Link from "next/link";
import type { NextPage } from "next";
import { NextPageProps } from "../lib/types";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Home: NextPage<NextPageProps> = ({ name }): JSX.Element => {
    return <Container>
        <Header title="Welcome to NavaLabs." description="A versatile, growing, successful team of individuals working daily to achieve excellence." buttons={[
            <div key={1} className="mt-[1.875em] justify-center items-center flex flex-wrap mb-[0.9375em] hover:-translate-y-1 transition-all duration-[1s] ease-in-out">
                <Link href="/discord" passHref>
                    <a className="bg-[#fff] text-[#00c6ff] text-[1em] font-bold rounded-[1.75em] py-[0.9em] px-[2.14285em] hover:opacity-[.9] transition-all duration-[.3s] ease" style={{
                        margin: "0 0.375em 0"
                    }}>Work with us</a>
                </Link>
            </div>
        ]} />
        <section id="features" className="relative -mt-[8em] px-[3vw] overflow-hidden">
            <div className="mx-auto max-w-[1200px]">
                <div className="block">
                    <div className="flex flex-wrap -mx-[0.9375em]" data-aos="fade-up" data-aos-duration="3000">
                        <div className="mb-[4vw] flex flex-col md:max-w-[50%] lg:max-w-[33.333%] box-border px-[0.9375em] relative w-full cursor-pointer hover:-translate-y-1.5 transition-all duration-[1s] ease-in-out">
                            <div className="bg-[#fff] border-[#dde0e7] border-[1px] dark:bg-[#1a1a1a] dark:border-[#1a1a1a] dark:text-white rounded-md box-border flex-grow-[1] pb-[0.75em]" style={{ boxShadow: "0px 1px 2px 0px rgb(0 0 0 / 8%)" }}>
                                <h3 className="mt-[1.25em] text-[1.5em] px-[1em] relative after:bg-[#00c6ff] after:block after:content-[''] after:h-full after:-left-[1px] after:absolute after:top-0 after:w-[5px] font-bold text-slate-800 dark:text-white" style={{ margin: "1em 0 0.5em" }}>Contributions</h3>
                                <div className="px-[1.5em] mb-[1.25em]">
                                    <p style={{ margin: "0 0 1em" }}>Over 595 updates across all services provided in 2018-2022</p>
                                </div>
                                <div className="px-[1.5em] items-center flex flex-wrap mb-[0.9375em]">
                                    <a href="#" className="flex flex-row items-center gap-x-1 text-[#00c6ff] transition-colors duration-[.3s] ease font-semibold hover:text-[#424b5f]" style={{ margin: "0 0.75em 0.75em 0" }}>Learn More <Icon icon={faArrowRight} className="h-3 pt-[0.2rem]" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="mb-[4vw] flex flex-col md:max-w-[50%] lg:max-w-[33.333%] box-border px-[0.9375em] relative w-full cursor-pointer hover:-translate-y-1.5 transition-all duration-[1s] ease-in-out">
                            <div className="bg-[#fff] border-[#dde0e7] border-[1px] dark:bg-[#1a1a1a] dark:border-[#1a1a1a] dark:text-white rounded-md box-border flex-grow-[1] pb-[0.75em]" style={{ boxShadow: "0px 1px 2px 0px rgb(0 0 0 / 8%)" }}>
                                <h3 className="mt-[1.25em] text-[1.5em] px-[1em] relative after:bg-[#00c6ff] after:block after:content-[''] after:h-full after:-left-[1px] after:absolute after:top-0 after:w-[5px] font-bold text-slate-800 dark:text-white" style={{ margin: "1em 0 0.5em" }}>Services</h3>
                                <div className="px-[1.5em] mb-[1.25em]">
                                    <p style={{ margin: "0 0 1em" }}>5+ projects, one team. All with over 10,000 users average, servicing over 32 countries</p>
                                </div>
                                <div className="px-[1.5em] items-center flex flex-wrap mb-[0.9375em]">
                                    <a href="#" className="flex flex-row items-center gap-x-1 text-[#00c6ff] transition-colors duration-[.3s] ease font-semibold hover:text-[#424b5f]" style={{ margin: "0 0.75em 0.75em 0" }}>Learn More <Icon icon={faArrowRight} className="h-3 pt-[0.2rem]" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="mb-[4vw] flex flex-col md:max-w-[50%] lg:max-w-[33.333%] box-border px-[0.9375em] relative w-full cursor-pointer hover:-translate-y-1.5 transition-all duration-[1s] ease-in-out">
                            <div className="bg-[#fff] border-[#dde0e7] border-[1px] dark:bg-[#1a1a1a] dark:border-[#1a1a1a] dark:text-white rounded-md box-border flex-grow-[1] pb-[0.75em]" style={{ boxShadow: "0px 1px 2px 0px rgb(0 0 0 / 8%)" }}>
                                <h3 className="mt-[1.25em] text-[1.5em] px-[1em] relative after:bg-[#00c6ff] after:block after:content-[''] after:h-full after:-left-[1px] after:absolute after:top-0 after:w-[5px] font-bold text-slate-800 dark:text-white" style={{ margin: "1em 0 0.5em" }}>Value</h3>
                                <div className="px-[1.5em] mb-[1.25em]">
                                    <p style={{ margin: "0 0 1em" }}>Worth over $90,000</p>
                                </div>
                                <div className="px-[1.5em] items-center flex flex-wrap mb-[0.9375em]">
                                    <a href="#" className="flex flex-row items-center gap-x-1 text-[#00c6ff] transition-colors duration-[.3s] ease font-semibold hover:text-[#424b5f]" style={{ margin: "0 0.75em 0.75em 0" }}>Learn More <Icon icon={faArrowRight} className="h-3 pt-[0.2rem]" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="text-img" className="bg-[#f8f8fa] dark:bg-[#1a1a1a] dark:text-white pt-[3.75em] px-[3vw] overflow-hidden w-full">
            <div className="overflow-hidden" data-aos="fade-up" data-aos-duration="3000">
                <div className="items-center justify-center flex flex-row flex-wrap mx-[-0.9375em]">
                    <div className="text-center mb-[1.5em] box-border px-[0.9375em] relative w-full lg:w-1/2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className="h-auto max-w-full border-none align-middle text-center mx-auto" src="https://themes.stackbit.com/demos/libris/images/jamstack.svg" alt="" />
                    </div>
                    <div className="text-center md:text-left box-border px-[0.9375em] relative w-full lg:w-1/2">
                        <div className="mb-[1.5em]">
                            <h2 className="m-0 text-[1.8em] md:text-[2em] font-bold text-[#1a1a1a] dark:text-white tracking-tight">NavaLabs is more than a team.</h2>
                        </div>
                        <div className="text-[1em] md:text-[1.125em]">
                            <p style={{ margin: "0 0 1em" }}>It&apos;s an experience, a projection, a direction and challenge.</p>
                        </div>
                        <div className="justify-center md:justify-start mt-[1.875em] items-center flex flex-wrap mb-[0.9375em]">
                            <a href="#" className="ml-0 mr-[0.75em] font-bold items-center bg-[#00c6ff] border-0 rounded-[1.75em] shadow-none text-[#fff] cursor-pointer inline-flex text-[0.875em] justify-center leading-[1.2] opacity-[1] align-middle hover:brightness-[1.1] transition-all duration-[0.5s] ease-in-out" style={{ margin: "0 0.375em 0.75em", padding: "0.9em 2.14285em" }}>Learn More</a>
                            <Link href="/discord" passHref>
                                <a className="ml-0 mr-[0.75em] font-bold bg-none text-[#00c6ff] border-0 rounded-[1.75em] shadow-none cursor-pointer inline-flex text-[0.875em] justify-center leading-[1.2] opacity-[1] align-middle transition-all duration-[0.5s] ease-in-out" style={{ margin: "0 0.375em 0.75em", padding: "0.9em 2.14285em", boxShadow: "inset 0 0 0 2px currentColor" }} onMouseEnter={(e): void => {
                                    e.currentTarget.style.boxShadow = "inset 0 0 0 3px currentColor";
                                }}
                                    onMouseLeave={(e): void => {
                                        e.currentTarget.style.boxShadow = "inset 0 0 0 2px currentColor";
                                    }}
                                >Work With Us</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="cta" className="py-[3.75em] bg-[#f8f8fa] dark:bg-[#1a1a1a] px-[3vw] w-full">
            <div className="mx-auto max-w-[1200px]">
                <div className="px-[7%] rounded-[5px] mb-[1.875em] text-[#fff] relative" style={{ padding: "3.75em 3vw 1.875em", background: "linear-gradient(to right, #0072ff, #00c6ff)" }} data-aos="zoom-in" data-aos-duration="2000">
                    <div className="items-center justify-center flex flex-wrap -mx-[0.9375em] px-[0.9375em] relative w-full">
                        <div className="max-w-[66.666%] text-left mb-[1.5em] box-border" style={{ flex: "0 0 66.666%" }}>
                            <h2 className="text-[1.875em] text-inherit mt-0 m-0 font-bold tracking-tight">Are you interested?</h2>
                            <p className="text-[1.125em] color-inherit mt-[0.5em] leading-[1.5] mb-0" style={{ margin: "0 0 1em" }}>Come work with us today!</p>
                        </div>
                        <div className="mt-0 max-w-[33.333%] justify-end items-center flex flex-wrap mb-[0.9375em] w-full" style={{ flex: "0 0 33.333%" }}>
                            <Link href="/discord" passHref>
                                <a className="bg-[#fff] text-[#00c6ff] font-bold items-center border-0 rounded-[1.75em] shadow-none box-border cursor-pointer inline-flex text-[0.875em] justify-center leading-[1.2] opacity-[1] transition-all duration-[.3s] ease align-middle hover:brightness-[0.95]" style={{ margin: "0 0.375em 0.75em", padding: "0.9em 2.14285em" }}>Contact Us</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Container>;
};

Home.defaultProps = {
    name: "Home"
};

export default Home;