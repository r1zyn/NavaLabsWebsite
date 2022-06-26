import type { NextComponent } from "../lib/types";

export type HeaderProps = {
    title: string;
    description: string;
    buttons?: JSX.Element[];
}

export const Header: NextComponent<HeaderProps> = ({ title, description, buttons }: HeaderProps): JSX.Element => {
    return <main className="box-border flex-grow w-full block">
        <section className="py-[7.5em] relative text-center px-[3vw] text-[#fff]" style={{
            background: "linear-gradient(to right, #0072ff, #00c6ff)"
        }}>
            <div className="bg-center bg-cover bottom-0 left-0 opacity-[0.2] absolute right-0 top-0 text-center text-[#fff]" style={{
                backgroundImage: "url('https://themes.stackbit.com/demos/libris/images/5.jpg')"
            }} />
            <div className="relative mx-auto block text-center" data-aos="fade-up" data-aos-duration="3000">
                <div className="mb-[0.75em]">
                    <h1 className="text-[3em] m-0">{title}</h1>
                </div>
                <div className="text-[1.25em] leading-[1.5]">
                    <p style={{
                        margin: "0 0 1em"
                    }}>{description}</p>
                </div>
                {buttons}
            </div>
        </section>
    </main>;
};