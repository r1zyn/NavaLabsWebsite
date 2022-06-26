import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { Icon } from "../components/Icon";
import type { NextPage } from "next";
import { NextPageProps } from "../lib/types";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Home: NextPage<NextPageProps> = ({ name }): JSX.Element => {
    return <Container>
        <Header title="A team comprised of 20 individuals" description="Servicing popular brands, and serving over 300,000 registered users and counting." buttons={[
            <div key={1} className="mt-[1.875em] justify-center items-center flex flex-wrap mb-[0.9375em] hover:-translate-y-1 transition-all duration-[1s] ease-in-out">
                <a href="/demos/libris/docs" className="bg-[#fff] text-[#00c6ff] text-[1em] font-bold rounded-[1.75em] py-[0.9em] px-[2.14285em] hover:opacity-[.9] transition-all duration-[.3s] ease" style={{
                    margin: "0 0.375em 0"
                }}>Work with us</a>
            </div>
        ]} />
        <section id="features" className="relative -mt-[5em] px-[3vw] overflow-hidden">
            <div className="mx-auto max-w-[1200px]">
                <div className="block">
                    <div className="flex flex-wrap -mx-[0.9375em]" data-aos="fade-up" data-aos-duration="3000">
                        <div className="mb-[4vw] flex flex-col max-w-[33.333%] box-border px-[0.9375em] relative w-full cursor-pointer hover:-translate-y-1 transition-all duration-[1s] ease-in-out" style={{ flex: "0 0 33.333%" }}>
                            <div className="bg-[#fff] rounded-[3px] box-border flex-grow-[1] pb-[0.75em]" style={{ border: "1px solid #dde0e7", boxShadow: "0px 1px 2px 0px rgb(0 0 0 / 8%);" }}>
                                <h3 className="mt-[1.25em] text-[1.5em] px-[1em] relative after:bg-[#00c6ff] after:block after:content-[''] after:h-full after:-left-[1px] after:absolute after:top-0 after:w-[5px] font-semibold text-slate-800" style={{ margin: "1em 0 0.5em" }}>Contributions</h3>
                                <div className="px-[1.5em] mb-[1.25em]">
                                    <p style={{ margin: "0 0 1em" }}>Over 595 updates across all services provided in 2018-2022</p>
                                </div>
                                <div className="px-[1.5em] items-center flex flex-wrap mb-[0.9375em]">
                                <a href="#" className="flex flex-row items-center gap-x-1 text-[#00c6ff] transition-colors duration-[.3s] ease font-semibold hover:text-[#424b5f]" style={{ margin: "0 0.75em 0.75em 0" }}>Learn More <Icon icon={faArrowRight} className="h-3 pt-[0.2rem]" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="mb-[4vw] flex flex-col max-w-[33.333%] box-border px-[0.9375em] relative w-full cursor-pointer hover:-translate-y-1 transition-all duration-[1s] ease-in-out" style={{ flex: "0 0 33.333%" }}>
                            <div className="bg-[#fff] rounded-[3px] box-border flex-grow-[1] pb-[0.75em]" style={{ border: "1px solid #dde0e7", boxShadow: "0px 1px 2px 0px rgb(0 0 0 / 8%);" }}>
                                <h3 className="mt-[1.25em] text-[1.5em] px-[1em] relative after:bg-[#00c6ff] after:block after:content-[''] after:h-full after:-left-[1px] after:absolute after:top-0 after:w-[5px] font-semibold text-slate-800" style={{ margin: "1em 0 0.5em" }}>Services</h3>
                                <div className="px-[1.5em] mb-[1.25em]">
                                    <p style={{ margin: "0 0 1em" }}>5+ projects, one team. All with over 10,000 users average, servicing over 32 countries</p>
                                </div>
                                <div className="px-[1.5em] items-center flex flex-wrap mb-[0.9375em]">
                                    <a href="#" className="flex flex-row items-center gap-x-1 text-[#00c6ff] transition-colors duration-[.3s] ease font-semibold hover:text-[#424b5f]" style={{ margin: "0 0.75em 0.75em 0" }}>Learn More <Icon icon={faArrowRight} className="h-3 pt-[0.2rem]" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="mb-[4vw] flex flex-col max-w-[33.333%] box-border px-[0.9375em] relative w-full cursor-pointer hover:-translate-y-1 transition-all duration-[1s] ease-in-out" style={{ flex: "0 0 33.333%" }}>
                            <div className="bg-[#fff] rounded-[3px] box-border flex-grow-[1] pb-[0.75em]" style={{ border: "1px solid #dde0e7", boxShadow: "0px 1px 2px 0px rgb(0 0 0 / 8%);" }}>
                                <h3 className="mt-[1.25em] text-[1.5em] px-[1em] relative after:bg-[#00c6ff] after:block after:content-[''] after:h-full after:-left-[1px] after:absolute after:top-0 after:w-[5px] font-semibold text-slate-800" style={{ margin: "1em 0 0.5em" }}>Value</h3>
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
    </Container>;
};

Home.defaultProps = {
    name: "Home"
};

export default Home;