"use client";

import {HTMLAttributes, ReactNode} from "react";
import Icon from "@/components/common/Icon";

interface ICategory extends HTMLAttributes<HTMLDivElement> {
    category: PostCategory;
}

export default function Category({ category, ...props } : ICategory) {
    const categoryIcon: { [key in PostCategory]: ReactNode } = {
        react: <Icon icon="ReactIcon" />,
        typescript: <Icon icon="TypescriptIcon" />,
        blog: <Icon icon="BlogIcon" />
    };

    return (
        <div className={`w-[18px] h-[18px] fill-default`}>
            { categoryIcon[category] }
        </div>
    );
}