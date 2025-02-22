import { HTMLAttributes } from "react";
import { Docs } from "@/constants/docs";
import PageDir from "@/components/common/PageDir";
import Page from "@/components/common/Page";

interface IPageTree extends HTMLAttributes<HTMLElement> {
    onLinkClick?: () => void;
}

export default function PageTree({ className, onLinkClick, ...p }: IPageTree) {
    return (
        <nav className={`flex flex-col gap-[4px] h-full overflow-auto ${className || ""}`} {...p}>
            {
                Object.values(Docs).filter(e => !e.hide).map(e => (
                    <div key={e.label}>
                        <div className={"flex items-center gap-[8px] mb-[4px]"}>
                            <p className={"text-sm text-description"}>{e.label}</p>
                            <div className={"flex-1 h-[1px] bg-[theme(borderColor.default)]"}></div>
                        </div>
                        <div>
                            {
                                e.docs.map((doc: Doc, i: number) => {
                                    if (doc.children && doc.children.length > 0) {
                                        return (<PageDir key={i} doc={doc} onLinkClick={ onLinkClick } />);
                                    }
                                    return (<Page key={i} doc={doc} onLinkClick={ onLinkClick } />);
                                })
                            }
                        </div>
                    </div>
                ))
            }
        </nav>
    );
}