import { HTMLAttributes } from "react";
import Link from "next/link";

interface IPage extends HTMLAttributes<HTMLDivElement> {
    doc: Doc;
    isCurrentPage: boolean;
    onLinkClick?: () => void;
}

export default function Page({ doc, isCurrentPage, onLinkClick, className, ...p }: IPage) {
    return (
        (doc.path) ?
            (
                <Link href={doc.path} onClick={ onLinkClick } className={`block p-[6px_8px] text-sm rounded cursor-pointer select-none break-all hover:bg-emphasis hover:text-default hover:no-underline ${(isCurrentPage) ? "text-default font-bold bg-emphasis visited:text-default hover:bg-emphasis-hover" : "text-description font-normal bg-default visited:text-description hover:bg-default-hover"} ${className || ""}`}>
                    { doc.label }
                </Link>
            )
            :
            (
                <div className={`p-[6px_8px] text-sm rounded cursor-pointer select-none break-all hover:bg-emphasis hover:text-default ${(isCurrentPage) ? "text-default font-bold bg-emphasis hover:bg-emphasis-hover" : "text-description font-normal bg-default hover:bg-default-hover"} ${className || ""}`}>
                    { doc.label }
                </div>
            )
    );
}