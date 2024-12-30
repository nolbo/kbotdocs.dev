import { HTMLAttributes, useState } from "react";
import Icon from "@/components/common/Icon";
import Page from "@/components/common/Page";

interface IPage extends HTMLAttributes<HTMLDivElement> {
    doc: Doc;
    fold: boolean;
    isCurrentPage: boolean;
    onLinkClick?: () => void;
}

export default function PageDir({ doc, fold, isCurrentPage, onLinkClick, children, className, ...p }: IPage) {
    const [ isFold, setFold ] = useState(fold);

    const buttonOnClickHandler = () => {
        setFold(v => !v);
    };

    return (
        <div className={`${className || ""}`} {...p}>
            <div
                className={"flex justify-between items-center gap-[6px] p-[6px_8px] rounded text-sm text-description cursor-pointer select-none hover:bg-emphasis hover:text-default"}
                onClick={buttonOnClickHandler}>
                <div>{doc.label}</div>
                <Icon icon={"ArrowIcon"}
                      className={`stroke-default w-[.75rem] h-[.75rem] ${(isFold) ? "rotate-[0deg]" : "rotate-[90deg]"}`}/>
            </div>
            <div className={`pl-[.875rem] overflow-hidden ${(isFold) ? "hidden" : "block"}`}>
                { doc.path && <Page isCurrentPage={isCurrentPage} doc={{ ...doc, label: "개요" }} onLinkClick={ onLinkClick } /> }
                { children }
            </div>
        </div>
    );
}