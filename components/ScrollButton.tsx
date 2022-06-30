import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Icon } from "./Icon";
import type { NextComponent } from "../lib/types";

import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

/**
 * Scroll button component for returning users to the top of the page.
 * @returns {JSX.Element}
 */
export const ScrollButton: NextComponent = (): JSX.Element => {
    const [visible, toggleVisbility]: [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(false);
    const id: string = "scroll-top-button";

    useEffect((): void => {
        const button: HTMLElement = document.getElementById(id) as HTMLElement;
        if (button && button.style.opacity === "0") button.style.display = "none";
        if (button && button.style.opacity === "1") button.style.display = "block";

        document.addEventListener("scroll", (_e: Event): void => {
            if (window.pageYOffset > 300) {
                toggleVisbility(true);
            } else {
                toggleVisbility(false);
            }
        });
    });

    return (
        <div className={`${visible ? "fade-in" : "fade-out"} right-4 bottom-5 lg:right-5 fixed flex items-center cursor-pointer rounded-md bg-[#00c6ff] w-10 h-10 transition duration-700 ease-in-out transform hover:brightness-[.8]`} style={{ zIndex: 1005 }} onClick={(): void => window.scrollTo({
            top: 0,
            behavior: "smooth"
        })}
            id={id}>
            <Icon icon={faArrowUp} className="m-auto p-auto h-3 text-white" />
        </div>
    );
};