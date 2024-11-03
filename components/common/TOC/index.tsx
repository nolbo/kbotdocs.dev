"use client";

import React, { useState, useEffect } from "react";

export default function TOC({ scrollToRef } : { scrollToRef: React.MutableRefObject<number> }) {
    const [ headers, setHeaders ] = useState<Element[]>([]);
    const [ pageInViewport, setPageInViewport ] = useState<string>("");

    const liOnClickHandler = (id: string) => {
        if (document.getElementById(id)) {
            scrollToRef.current += document.getElementById(id)!.getBoundingClientRect().top - 160;
        }
    };

    useEffect(() => {
        const target = document.getElementById("doc");
        const callback = () => {
            if (document.querySelectorAll(".section h2, .section h3")) {
                setHeaders(Array.from(document.querySelectorAll(".section h2, .section h3")));
            }
        };
        const options: MutationObserverInit = { attributes: true, childList: true, subtree: true };
        const observer = new MutationObserver(callback);

        if (target) {
            callback();
            observer.observe(target, options);
        }
    }, []);

    useEffect(() => {
        const listeners: (() => void)[] = [];

        const scrollEventListener = (e: Element, i: number) => {
            if ((e.getBoundingClientRect().y <= 175) && ((i === headers.length - 1) || (headers[i + 1].getBoundingClientRect().y > 175))) {
                if (pageInViewport !== e.id) setPageInViewport(e.id);
            }
        }

        if (headers.length > 0) {
            headers.forEach((e, i) => {
                listeners.push(() => scrollEventListener(e, i));
            });
            listeners.forEach((e) => {
                e();
                window.addEventListener("scroll", e, { passive: true });
            });
        }

        return (() => {
            listeners.forEach((e) => {
                window.removeEventListener("scroll", e);
            });
        });
    }, [headers, pageInViewport]);

    return (
        <ul className={"leading-relaxed overflow-auto text-sm mt-0 p-none border-0 rounded-[0] bg-transparent"}>
            {
                headers.map((e, i) => {
                    return (
                        <li key={i} id={`a${e.id}`}
                            className={`list-none p-[0_1em] ${(e.classList.contains("sub")) ? "pl-[2em]" : ""} border-l-[2px] ${(pageInViewport === e.id) ? "border-l-emphasis text-default font-bold currentcon" : "border-l-noimportance text-noimportance font-normal"} cursor-pointer hover:border-l-emphasis hover:text-default`}
                            onClick={() => liOnClickHandler(e.id)}>{e.textContent}</li>
                    );
                })
            }
        </ul>
    );
}