"use client";

import { useState, HTMLAttributes } from "react";

interface ITab extends HTMLAttributes<HTMLDivElement> {
    items: string[];
    defaultIndex?: number;
}

export default function Tab({ items, defaultIndex, ...props } : ITab) {
    const [ index, setIndex ] = useState<number>(defaultIndex || 0);

    const ItemsOnClickHandler = (i: number) => {
        setIndex(i);
    };

    return (
        <div className={"flex items-center gap-[4px]"} { ...props }>
            {
                items.map((e, i) => (
                    <div
                        key={ i }
                        onClick={ () => { ItemsOnClickHandler(i) } }
                        className={`flex justify-center items-center relative box-border p-[4px_16px] rounded-md min-w-[32px] ${(i === index) ? "bg-emphasis text-default" : "bg-transparent text-description"} font-bold cursor-default select-none hover:bg-default-hover after:content-[''] transition-colors duration-default after:block after:absolute after:bottom-[-8px] after:rounded after:w-[calc(100%-12px)] after:h-[4px] after:bg-blue-500 after:${(i === index) ? "opacity-100" : "opacity-0"} after:transition-opacity after:duration-default`}>
                        { e }
                    </div>
                ))
            }
        </div>
    );
}