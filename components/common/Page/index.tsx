import React, {HTMLAttributes} from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";

interface IPage extends HTMLAttributes<HTMLDivElement> {
    doc: Doc;
    onLinkClick?: () => void;
}

export default function Page({ doc, onLinkClick, className, ...p }: IPage) {
    const pathname = usePathname();
    const isCurrentPage = doc.path === pathname;

    return (
        (doc.path) ?
            (
                <Link data-current={isCurrentPage} href={doc.path} onClick={ onLinkClick } className={`block p-[6px_8px] text-sm rounded cursor-pointer select-none break-all hover:bg-emphasis hover:text-default hover:no-underline ${(isCurrentPage) ? "text-default font-bold bg-emphasis visited:text-default hover:bg-emphasis-hover" : "text-description font-normal bg-default visited:text-description hover:bg-default-hover"} ${className || ""}`}>
                    { doc.label }
                </Link>
            )
            :
            (
                <div data-current={isCurrentPage} className={`p-[6px_8px] text-sm rounded cursor-pointer select-none break-all hover:bg-emphasis hover:text-default ${(isCurrentPage) ? "text-default font-bold bg-emphasis hover:bg-emphasis-hover" : "text-description font-normal bg-transparent hover:bg-default-hover"} ${className || ""}`}>
                    { doc.label }
                </div>
            )
    );
}