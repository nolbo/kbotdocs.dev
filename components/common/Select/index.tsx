import React, { useRef, useState, useEffect, SelectHTMLAttributes } from "react";
import Icon from "@/components/common/Icon";

const Select = ({ children, ...p }: SelectHTMLAttributes<HTMLSelectElement>) => {
    const [ value, setValue ] = useState<string>("");
    const [ options, setOptions ] = useState<HTMLOptionElement[]>([]);
    const [ isFocused, setIsFocused ] = useState<boolean>(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const popoverRef = useRef<HTMLUListElement | null>(null);
    const selectedItemRef = useRef<HTMLLIElement | null>(null);
    const selectRef = useRef<HTMLSelectElement | null>(null);

    const itemsOnClick = ((value: string) => {
        if (selectRef.current) {
            selectRef.current.value = value;
        }
        setIsFocused(false);
    });

    useEffect(() => {
        if (selectRef.current) {
            setOptions(Array.from(selectRef.current.options));
            setValue(selectRef.current.value);
        }
        const pageClickEvent = (e: any) => {
            if (!popoverRef.current?.contains(e.target)) {
                if (wrapperRef.current?.contains(e.target)) {
                    setIsFocused(v => !v);
                }
                else {
                    setIsFocused(false);
                }
            }
        };
        window.addEventListener('click', pageClickEvent, true);

        return () => {
            window.removeEventListener('click', pageClickEvent, true);
        };
    }, []);

    useEffect(() => {
        if (selectedItemRef.current) {
            popoverRef.current?.scroll({ top: selectedItemRef.current.getBoundingClientRect().y - popoverRef.current.getBoundingClientRect().y - 8 });
        }
    }, [isFocused]);

    useEffect(() => {
        if (selectRef.current) {
            selectRef.current.dispatchEvent(new Event("change", { bubbles: true }));
            setValue(selectRef.current.value);
        }
    }, [selectRef.current?.value]);

    return (
        <div className={"relative"} ref={wrapperRef}>
            <button className={`flex justify-between items-center gap-x-[8px] outline-none overflow-auto text-default rounded-[6px] appearance-none w-full p-[6px_8px] border-[1px] border-default hover:bg-default-hover ${(isFocused) ? "bg-emphasis [&_svg]:rotate-[270deg]" : "bg-default [&_svg]:rotate-[90deg]"}`}>
                <p className={"relative pr-[16px] text-sm text-left w-[calc(100%_-_12px)] whitespace-nowrap overflow-auto after:content-[''] after:block after:absolute after:top-0 after:left-0 after:w-full after:h-full after:from-transparent after:from-97% after:to-[var(--bg-default)] [-webkit-scrollbar]:none"}>
                    { options.find(e => e.value === value)?.label }
                </p>
                <Icon icon={"ArrowIcon"} className={"w-[12px] h-[12px] stroke-default"} />
            </button>
            { 
                isFocused
                &&
                <ul className={"flex flex-col absolute z-[1] mt-[6px] text-sm w-full max-h-[calc(44*4+22)px] p-[8px] gap-y-[4px] border border-default bg-default rounded-[6px] overflow-auto"}
                    ref={ popoverRef }>
                    { 
                        options.map((e, i) => {
                            return (
                                <li 
                                    className={`flex items-center relative p-[6px_8px] rounded-[4px] ${(value === e.value) ? "bg-emphasis hover:bg-emphasis-hover before:block" : "bg-default hover:bg-default-hover before:hidden"} cursor-pointer before:content-[''] before:absolute before:left-[-8px] before:w-[2px] before:h-[calc(100%-12px)] before:rounded-[4px] before:bg-[theme(textColor.default)]`}
                                    key={ i } ref={ (value === e.value) ? selectedItemRef : null } onClick={ (_e) => { itemsOnClick(e.value) } }>{ e.label }</li>
                            );
                        }) 
                    }
                </ul>
            }
            <select ref={ selectRef } { ...p } hidden>
                { children }
            </select>
        </div>
    );
};

Select.displayName = "Select";

export default Select;