import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import Icon from "@/components/common/Icon";
import CodeBlock from "@/components/common/CodeBlock";
import Keycap from "@/components/common/Keycap";
import InlineCode from "@/components/common/InlineCode";
import Image from "next/image";
import { Table, Thead, Tbody, Tr, Th, Td } from "@/components/common/Table";
import AppCompat from "@/components/common/AppCompat";
import Noti from "@/components/common/Noti";

export const mdxComponents: MDXComponents = {
    h2({ children, ...p }) {
        return (
            <h2 {...p}>
                { children }
            </h2>
        );
    },
    h3({ children, ...p }) {
        return (
            <h3 className="sub" {...p}>
                { children }
            </h3>
        );
    },
    h4({ children, ...p }) {
        return (
            <h4 className="sub" {...p}>
                { children }
            </h4>
        );
    },
    p({ children }) {
        return (<p className={"[&>svg]:relative [&>svg]:top-[-.05em] [&>svg]:z-0 [&>svg]:inline-block"}>{ children }</p>)
    },
    Mark({ children }) {
        return (<mark className={"bg-yellow text-gray-800 font-bold"}>{ children }</mark>);
    },
    Section({ children }) {
        return (<section className={"flex flex-col gap-[24px] w-full leading-normal section"}>{ children }</section>);
    },
    ol({ children, ...p }) {
        return (<ol className={"flex flex-col gap-[2px]"} { ...p }>{ children }</ol>);
    },
    ul({ children, ...p }) {
        return (<ul { ...p }>{ children }</ul>);
    },
    li({ children, ...p }) {
        return (<li className={"leading-normal [&_ul]:ml-[1rem] [&_ol]:ml-[1rem]"} { ...p }>{ children }</li>);
    },
    img({ ...p }) {
        return (
            (p.alt === "icon") ?
                <Icon className={"w-[.75rem] h-[.75rem] stroke-inherit-text"} icon={ p.src as Icons } />
                :
                <div className={`justify-center items-center w-full h-fit ${(p.alt?.endsWith("#lightonly")) ? "flex dark:hidden" : ((p.alt?.endsWith("#darkonly")) ? "hidden dark:flex" : "")}`}>
                    <Image src={p.src as string} alt={p.alt || ""} className="rounded-[6px]" />
                </div>
        )
    },
    Image(p) {
        return (
            <div className={`justify-center items-center w-full h-fit ${(p.alt?.endsWith("#lightonly")) ? "flex dark:hidden" : ((p.alt?.endsWith("#darkonly")) ? "hidden dark:flex" : "")}`}>
                <img src={p.src as string} alt={p.alt || ""} className="rounded-[6px]" />
            </div>
        )
    },
    code({ children, className }) {
        const sthlMatch = /language-(\w+)/.exec(className || "");
        const keyMatch = /key-(\w+|\W+)/.exec(children as string || "");
        const content = String(children).replace(/\n$/, "");

        return (
            (sthlMatch) ?
                <CodeBlock language={ sthlMatch[1] } content={ content } />
                :
                (keyMatch) ?
                    <Keycap keytext={ keyMatch[1] } />
                    :
                    <InlineCode>{ children }</InlineCode>
        );
    },
    del(p) {
        return (<del className="text-noimportance" { ...p }></del>);
    },
    Table({ children, className, ...p }) {
        return (<Table { ...p }>{ children }</Table>);
    },
    Thead({ children, ...p }) {
        return (<Thead { ...p }>{ children }</Thead>);
    },
    Tbody({ children, ...p }) {
        return (<Tbody { ...p }>{ children }</Tbody>);
    },
    Tr({ children, ...p }) {
        return (<Tr { ...p }>{ children }</Tr>);
    },
    Th({ children, ...p }) {
        return (<Th { ...p }>{ children }</Th>);
    },
    Td({ children, ...p }) {
        return (<Td { ...p }>{ children }</Td>);
    },
    Blockquote({ children, className, title }) {
        let header;
        let blockStyle = "bg-default-hover border-default-hover";

        return (
            <blockquote className={`flex flex-col gap-[4px] p-[8px_12px] rounded-[6px] border leading-normal md:p-[12px_16px] ${blockStyle}`}>
                <div className={"flex items-center gap-[6px]"}>
                    { header }
                </div>
                <div>
                    { children }
                </div>
            </blockquote>
        )
    },
    Noti({ children, ...p }) {
        return (<Noti {...p}>{ children }</Noti>);
    },
    a({children, href, ...p }) {
        if (href?.startsWith("/")) {
            return (<Link href={ href }>{ children }</Link>);
        }
        else {
            return <a href={ href } { ...p }>{ children }</a>
        }
    },
    Dl({ children, className, ...p }) {
        return (<dl className={`[&_dl]:mt-[8px] [&_dl]:mb-[4px] [&_dl]:first:mt-0 [&_dl]:pl-[1rem] [&_dl]:border-l-default [&_dl]:border-l-[2px] ${className || ""}`} { ...p }>{ children }</dl>);
    },
    Dt({ children, className, ...p }) {
        return (<dt className={`mt-[8px] mb-[4px] first:mt-0 ${className || ""}`} { ...p }>{ children }</dt>);
    },
    Dd({ children, className, ...p }) {
        return (<dd className={`flex flex-col gap-[4px] ml-[16px] mb-[16px] last:mb-0 ${className || ""}`} { ...p }>{ children }</dd>);
    },
    AppCompat({ ...p }) {
        return (<AppCompat { ...p }/>);
    },
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...mdxComponents,
        ...components,
    }
}