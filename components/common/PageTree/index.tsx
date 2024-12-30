import { HTMLAttributes } from "react";
import { Docs } from "@/constants/docs";
import PageDir from "@/components/common/PageDir";
import Page from "@/components/common/Page";

interface IPageTree extends HTMLAttributes<HTMLElement> {
    currentPath: string;
    onLinkClick?: () => void;
}

export default function PageTree({ className, currentPath, onLinkClick, ...p }: IPageTree) {
    const generateTree = (e: Doc, i: number) => {
        if (e.children && e.children.length > 0) {
            return (
                <PageDir key={i}
                         doc={e}
                         isCurrentPage={currentPath === e.path}
                         onLinkClick={ onLinkClick }
                         fold={
                            !(
                                (e.path && e.path.split("/").every((param, _i) => param === currentPath.split("/")[_i]))
                                ||
                                (!e.path && e.children.some(child => child.path && child.path.split("/").every((param, _i) => param === currentPath.split("/")[_i])))
                            )
                        }
                >
                    { e.children.map(generateTree) }
                </PageDir>
            );
        }
        return (<Page key={i} doc={e} onLinkClick={ onLinkClick } isCurrentPage={currentPath === e.path} />);
    };

    return (
        <nav className={`h-full overflow-auto ${className || ""}`} {...p}>
            {
                Docs.map(generateTree)
            }
        </nav>
    );
}