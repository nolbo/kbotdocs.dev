import type { MDXComponents } from "mdx/types";
import Icon from "@/components/common/Icon";
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
        ol({ children, ...rest }) {
            return (<ol className={"flex flex-col gap-[2px]"} { ...rest }>{ children }</ol>);
        },
        ul({ children, ...rest }) {
            return (<ul className={"flex flex-col gap-[2px]"} { ...rest }>{ children }</ul>);
        },
        li({ children, ...rest }) {
            return (<li className={"leading-normal [&_ul]:ml-[1rem] [&_ol]:ml-[1rem]"} { ...rest }>{ children }</li>);
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
            return (
                <article className={"overflow-auto"}>
                    <table className={"flex flex-col gap-[16px] min-w-[0] w-full border-collapse md:table"} { ...rest }>
                        {children}
                    </table>
                </article>
            )
        },
        Thead({ children, ...rest }) {
            return (<thead { ...rest }>{ children }</thead>);
        },
        Tbody({ children, ...rest }) {
            return (<tbody className="flex flex-col gap-[16px] md:table-row-group" { ...rest }>{ children }</tbody>);
        },
        Tr({ children, ...rest }) {
            return (<tr className="flex flex-col overflow-clip rounded-[8px] border-[1px] border-default md:table-row md:border-none" { ...rest }>{ children }</tr>);
        },
        Th({ children, ...rest }) {
            return (
                <th className={"p-[12px] overflow-auto border-b-[2px] border-default leading-normal bg-emphasis-hover text-left md:bg-transparent"} { ...rest }>
                    { children }
                </th>
            )
        },
        Td({ children, ...rest }) {
            return (
                <td className={"p-[12px] overflow-auto leading-normal first:bg-emphasis first:border-none last:border-none border-solid border-b border-default md:first:bg-transparent md:first:border-solid md:last:border-solid"} { ...rest }>
                    <div className="flex flex-col gap-[16px]">
                        { children }    
                    </div>
                </td>
            )
        },
        Blockquote({ children, className, title }) {
            let header;
            let blockStyle = "";

            switch (className) {
                case "warning":
                    header = (
                        <>
                            <Icon icon={"WarningFillIcon"} className={"fill-yellow w-[1rem] h-[1rem]"}/>
                            <p className={"font-bold"}>{ title || "주의" }</p>
                        </>
                    )
                    blockStyle = "bg-yellow-default border-yellow-default";
                    break;
                case "danger":
                    header = (
                        <>
                            <Icon icon={"DangerFillIcon"} className={"fill-red w-[1rem] h-[1rem]"}/>
                            <p className={"font-bold"}>{ title || "경고" }</p>
                        </>
                    )
                    blockStyle = "bg-red-default border-red-default";
                    break;
                case "success":
                    header = (
                        <>
                            <Icon icon={"SuccessFillIcon"} className={"fill-green w-[1rem] h-[1rem]"}/>
                            <p className={"font-bold"}>{ title || "성공" }</p>
                        </>
                    )
                    blockStyle = "bg-green-default border-green-default";
                    break;
                case "info":
                    header = (
                        <>
                            <Icon icon={"InformationFillIcon"} className={"fill-blue w-[1rem] h-[1rem]"}/>
                            <p className={"font-bold"}>{ title || "정보" }</p>
                        </>
                    )
                    blockStyle = "bg-blue-default border-blue-default dark:[&_a]:text-green dark:[&_a:visited]:text-purple";
                    break;
                default:
                    blockStyle = "bg-default-hover border-default-hover";
            }

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
        ...components,
    }
}