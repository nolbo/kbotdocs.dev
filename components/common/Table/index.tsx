"use client";

import { HTMLAttributes, TableHTMLAttributes, ThHTMLAttributes, TdHTMLAttributes } from "react";

export function Table({ children, className, ...rest }: TableHTMLAttributes<HTMLTableElement>) {
    return (
        <article className={"overflow-auto"}>
            <table className={`flex flex-col gap-[16px] min-w-[0] w-full border-collapse md:table ${className}`} { ...rest }>
                {children}
            </table>
        </article>
    );
}

export function Thead({ children, ...rest }: TableHTMLAttributes<HTMLTableSectionElement>) {
    return (<thead { ...rest }>{ children }</thead>);
}

export function Tbody({ children, className, ...rest }: HTMLAttributes<HTMLTableSectionElement>) {
    return (<tbody className={`flex flex-col gap-[16px] md:table-row-group ${className}`} { ...rest }>{ children }</tbody>);
}

export function Tr({ children, className, ...rest }: HTMLAttributes<HTMLTableRowElement>) {
    return (<tr className={`flex flex-col overflow-clip rounded-[8px] border-[1px] border-default [thead_&]:border-none md:table-row md:border-none ${className}`} { ...rest }>{ children }</tr>);
}

export function Th({ children, className, ...rest }: ThHTMLAttributes<HTMLTableCellElement>) {
    return (
        <th className={`text-left leading-normal md:bg-none md:bg-transparent md:border-b-[2px] md:border-default md:text-left md:p-[12px] ${className}`} { ...rest }>
            <div className="w-full overflow-auto">
                { children }    
            </div>
        </th>
    );
}

export function Td({ children, className, ...rest }: TdHTMLAttributes<HTMLTableCellElement>) {
    return (
        <td className={`p-[12px] leading-normal first:bg-emphasis first:border-none last:border-none border-solid border-b border-default md:first:bg-transparent md:first:border-solid md:last:border-solid ${className}`} { ...rest }>
            <div className="flex flex-col gap-[16px] w-full overflow-auto">
                { children }    
            </div>
        </td>
    );
}
