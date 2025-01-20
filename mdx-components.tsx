import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import Icon from "@/components/common/Icon";
import CodeBlock from "@/components/common/CodeBlock";
import Keycap from "@/components/common/Keycap";
import InlineCode from "@/components/common/InlineCode";
import Image from "next/image";
import { Table, Thead, Tbody, Tr, Th, Td } from "@/components/common/Table";
import AppCompatibility from "@/components/common/AppCompatibility";
import AppCompatibilityItem from "@/components/common/AppCompatibilityItem";
import Noti from "@/components/common/Noti";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h2({ children, ...rest }) {
            return (
                <h2 {...rest}>
                    { children }
                </h2>
            );
        },
        h3({ children, ...rest }) {
            return (
                <h3 className="sub" {...rest}>
                    { children }
                </h3>
            );
        },
        h4({ children, ...rest }) {
            return (
                <h4 className="sub" {...rest}>
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
        ol({ children, ...rest }) {
            return (<ol className={"flex flex-col gap-[2px]"} { ...rest }>{ children }</ol>);
        },
        ul({ children, ...rest }) {
            return (<ul { ...rest }>{ children }</ul>);
        },
        li({ children, ...rest }) {
            return (<li className={"leading-normal [&_ul]:ml-[1rem] [&_ol]:ml-[1rem]"} { ...rest }>{ children }</li>);
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
        Table({ children, className, ...rest }) {
            return (<Table { ...rest }>{ children }</Table>);
        },
        Thead({ children, ...rest }) {
            return (<Thead { ...rest }>{ children }</Thead>);
        },
        Tbody({ children, ...rest }) {
            return (<Tbody { ...rest }>{ children }</Tbody>);
        },
        Tr({ children, ...rest }) {
            return (<Tr { ...rest }>{ children }</Tr>);
        },
        Th({ children, ...rest }) {
            return (<Th { ...rest }>{ children }</Th>);
        },
        Td({ children, ...rest }) {
            return (<Td { ...rest }>{ children }</Td>);
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
        a({children, href, ...rest }) {
            if (href?.startsWith("/")) {
                return (<Link href={ href }>{ children }</Link>);
            }
            else {
                return <a href={ href } { ...rest }>{ children }</a>
            }
        },
        Dl({ children, className, ...rest }) {
            return (<dl className={`[&_dl]:mt-[8px] [&_dl]:mb-[4px] [&_dl]:first:mt-0 [&_dl]:pl-[1rem] [&_dl]:border-l-default [&_dl]:border-l-[2px] ${className || ""}`} { ...rest }>{ children }</dl>);
        },
        Dt({ children, className, ...rest }) {
            return (<dt className={`mt-[8px] mb-[4px] first:mt-0 ${className || ""}`} { ...rest }>{ children }</dt>);
        },
        Dd({ children, className, ...rest }) {
            return (<dd className={`flex flex-col gap-[4px] ml-[16px] mb-[16px] last:mb-0 ${className || ""}`} { ...rest }>{ children }</dd>);
        },
        AppCompatibility({ children, listTitle, ...rest }) {
            return (<AppCompatibility listTitle={ listTitle } { ...rest }>{ children }</AppCompatibility>);
        },
        AppCompatibilityItem({ children, msgBot, arBot, sl, ...rest }) {
            return (<AppCompatibilityItem msgBot={msgBot} arBot={arBot} sl={sl} { ...rest }>{ children }</AppCompatibilityItem>);
        },
        ...components,
    }
}