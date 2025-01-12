import { HTMLAttributes } from "react";
import { Docs } from "@/constants/docs";
import PageDir from "@/components/common/PageDir";
import Page from "@/components/common/Page";

interface IPageTree extends HTMLAttributes<HTMLElement> {
    onLinkClick?: () => void;
}

export default function PageTree({ className, onLinkClick, ...p }: IPageTree) {
    return (
        <nav className={`h-full overflow-auto ${className || ""}`} {...p}>
            {
                Docs.map((e: Doc, i: number) => {
                    if (e.children && e.children.length > 0) {
                        return (<PageDir key={i} doc={e} onLinkClick={ onLinkClick } />);
                    }
                    return (<Page key={i} doc={e} onLinkClick={ onLinkClick } />);
                })
            }
        </nav>
    );
}