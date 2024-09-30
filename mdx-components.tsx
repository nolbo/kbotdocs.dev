import type { MDXComponents } from "mdx/types";
import Icon from "@/components/common/Icon";
import Image from "next/image";
import CodeBlock from "@/components/common/CodeBlock";
import Keycap from "@/components/common/Keycap";
import InlineCode from "@/components/common/InlineCode";

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
                <h3 className="md:pl-[16px] md:border-l-[2px] md:border-l-noimportance sub" {...rest}>
                    { children }
                </h3>
            );
        },
        h4({ children, ...rest }) {
            return (
                <h4 className="md:pl-[16px] md:border-l-[2px] md:border-l-noimportance sub" {...rest}>
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
        li({ children, ...rest }) {
            return (<li className={"list-inside leading-normal [&_ul]:ml-[1rem] [&_ol]:ml-[1rem]"} { ...rest }>{ children }</li>)
        },
        img(p) {
            return (
                (p.alt === "icon") ?
                    <Icon className={"w-[.75rem] h-[.75rem] stroke-inherit-text"} icon={ p.src as Icons } />
                    :
                    <div className={`justify-center items-center w-full h-fit ${(p.alt?.endsWith("#lightonly")) ? "flex dark:hidden" : ((p.alt?.endsWith("#darkonly")) ? "hidden dark:flex" : "")}`}>
                        <img src={p.src as string} alt={p.alt || ""} className="rounded-[6px]" />
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
            const keyMatch = /key-(\w+)/.exec(children as string || "");
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
        Table({ children, className, ...rest }) {
            return (
                <article className={"overflow-auto"}>
                    <table className={"min-w-[0] w-full"} {...rest}>
                        {children}
                    </table>
                </article>
            )
        },
        Th({ children }) {
            return (
                <th className={"py-[8px] border-b-[2px] border-default"}>
                    { children }
                </th>
            )
        },
        Td({ children }) {
            return (
                <td className={"p-[12px] border-y border-default"}>
                    { children }
                </td>
            )
        },
        Blockquote({ children, className }) {
            let header;
            let blockStyle = "";

            switch (className) {
                case "warning":
                    header = (
                        <>
                            <Icon icon={"WarningFillIcon"} className={"fill-yellow w-[16px] h-[16px]"}/>
                            <p className={"font-bold"}>주의</p>
                        </>
                    )
                    blockStyle = "bg-yellow-default border-yellow-default";
                    break;
                case "danger":
                    header = (
                        <>
                            <Icon icon={"DangerFillIcon"} className={"fill-red w-[16px] h-[16px]"}/>
                            <p className={"font-bold"}>경고</p>
                        </>
                    )
                    blockStyle = "bg-red-default border-red-default";
                    break;
                case "success":
                    header = (
                        <>
                            <Icon icon={"SuccessFillIcon"} className={"fill-green w-[16px] h-[16px]"}/>
                            <p className={"font-bold"}>성공</p>
                        </>
                    )
                    blockStyle = "bg-green-default border-green-default";
                    break;
                case "info":
                    header = (
                        <>
                            <Icon icon={"InformationFillIcon"} className={"fill-blue w-[16px] h-[16px]"}/>
                            <p className={"font-bold"}>정보</p>
                        </>
                    )
                    blockStyle = "bg-blue-default border-blue-default dark:[&_a]:text-green dark:[&_a:visited]:text-purple";
                    break;
                default:
                    blockStyle = "bg-default-hover border-default-hover";
            }

            return (
                <blockquote className={`flex flex-col gap-[4px] p-[12px_16px] rounded-[6px] border leading-snug ${blockStyle}`}>
                    <div className={"flex items-center gap-[6px]"}>
                        { header }
                    </div>
                    <div>
                        { children }
                    </div>
                </blockquote>
            )
        },
        ...components,
    }
}