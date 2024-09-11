import { HTMLAttributes } from "react";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import ReactMarkdown from "react-markdown";
import Icon from "@/components/common/Icon";
import CodeBlock from "@/components/common/CodeBlock";
import Keycap from "@/components/common/Keycap";
import InlineCode from "@/components/common/InlineCode";
import Image from "next/image";

interface IMarkdown extends HTMLAttributes<HTMLDivElement> {
    children: string | null | undefined;
}
export default function Markdown({ children } : IMarkdown) {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeSlug]}
            components={{
                h2(p) {
                    const { node, ...rest } = p;
                    return (
                        <h2 {...rest}>
                            { p.children }
                        </h2>
                    );
                },
                h3(p) {
                    const { node, ...rest } = p;
                    return (
                        <h3 className="md:pl-[16px] md:border-l-[2px] md:border-l-noimportance sub" {...rest}>
                            { p.children }
                        </h3>
                    );
                },
                h4(p) {
                    const { node, ...rest } = p;
                    return (
                        <h4 className="md:pl-[16px] md:border-l-[2px] md:border-l-noimportance sub" {...rest}>
                            { p.children }
                        </h4>
                    );
                },
                mark(p) {
                    const { children, ...rest } = p;
                    return (<mark className={"bg-yellow text-gray-800 font-bold"}>{ children }</mark>);
                },
                section(p) {
                    const { node, ...rest } = p;
                    return (<section className={"flex flex-col gap-[24px] w-full leading-normal section"}>{ p.children }</section>);
                },
                li(p) {
                    const { node, ...rest } = p;
                    return (<li className={"list-inside leading-normal [&_ul]:ml-[1rem] [&_ol]:ml-[1rem]"} { ...rest }>{ p.children }</li>)
                },
                img(p) {
                    return (
                        (p.alt === "icon") ?
                            <Icon className={"w-[.75rem] h-[.75rem] stroke-inherit-text"} icon={ p.src as Icons } />
                            :
                            <Image src={p.src as string} alt={p.alt || ""} />
                    )
                },
                p(p) {
                    return (<p className={"[&>svg]:relative [&>svg]:top-[-.05em] [&>svg]:z-0 [&>svg]:inline-block"}>{ p.children }</p>)
                },
                code(p) {
                    const { children, className, node, ...rest } = p;
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
                table(p) {
                    const { children, className, ...rest } = p;
                    return (
                        <article className={"overflow-auto"}>
                            <table className={"min-w-[0] w-full"} {...rest}>
                                {children}
                            </table>
                        </article>
                    )
                },
                th(p) {
                    const {children, ...rest} = p;

                    return (
                        <th className={"py-[8px] border-b-[2px] border-default"}>
                            { children }
                        </th>
                    )
                },
                td(p) {
                    const { children, ...rest } = p;

                    return (
                        <td className={"p-[12px] border-y border-default"}>
                            { children }
                        </td>
                    )
                },
                blockquote(p) {
                    const { children, className, ...rest } = p;
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
                }
            }}>
            { children }
        </ReactMarkdown>
    );
}