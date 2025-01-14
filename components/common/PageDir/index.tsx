import React, {HTMLAttributes, useEffect, useState} from "react";
import Icon from "@/components/common/Icon";
import Page from "@/components/common/Page";
import {usePathname} from "next/navigation";

interface IPage extends HTMLAttributes<HTMLDivElement> {
    doc: Doc;
    setParentFold?: React.Dispatch<React.SetStateAction<boolean>>;
    onLinkClick?: () => void;
}

export default function PageDir({ doc, setParentFold, onLinkClick, children, className, ...p }: IPage) {
    const [ isFold, setFold ] = useState(true);
    const [ isChildSelected, setChildSelected ] = useState(true);

    const buttonOnClickHandler = () => {
        setFold(v => !v);
    };

    useEffect(() => {
        if (!isChildSelected) {
            setParentFold && setParentFold(false);
            setFold(false);
        }
    }, [isChildSelected, usePathname()]);

    return (
        <div className={`${className || ""}`} {...p}>
            <div
                className={"flex justify-between items-center gap-[6px] p-[6px_8px] rounded text-sm text-description cursor-pointer select-none hover:bg-emphasis hover:text-default"}
                onClick={buttonOnClickHandler}>
                <div>{doc.label}</div>
                <Icon icon={"ArrowIcon"} className={`stroke-default w-[.75rem] h-[.75rem] ${(isFold) ? "rotate-[0deg]" : "rotate-[90deg]"}`}/>
            </div>
            <div className={`pl-[.875rem] overflow-hidden ${(isFold) ? "hidden" : "block"}`}>
                { doc.path && <Page doc={{ ...doc, label: "개요" }} setParentFold={setChildSelected} onLinkClick={ onLinkClick } /> }
                {
                    (doc.children && doc.children.length > 0) && doc.children.map((e, i) => {
                        if (e.children && e.children.length > 0) {
                            return (<PageDir key={i} doc={e} setParentFold={setChildSelected} />);
                        }
                        return (<Page key={i} doc={e} setParentFold={setChildSelected} />);
                    })
                }
            </div>
        </div>
    );
}