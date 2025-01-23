"use client";

import React, {HTMLAttributes, useEffect, useState} from "react";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import {evaluate, EvaluateOptions} from "@mdx-js/mdx";
import {mdxComponents} from "@/mdx-components";
import {MDXProps} from "mdx/types";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeSlug from "rehype-slug";
import rehypeKatex from "rehype-katex";

interface IMDXClient extends HTMLAttributes<HTMLElement> {
    source?: string;
}

export default function MDXClient({source}: IMDXClient) {
    const [MDXContent, setMDXContent] = useState<(props: MDXProps) => React.ReactNode>(() => (() => null));

    useEffect(() => {
        if (source) {
            evaluate(`\n${source || ""}\n`, {
                jsx,
                jsxs,
                Fragment,
                remarkPlugins: [remarkGfm, remarkMath],
                rehypePlugins: [rehypeSlug, rehypeKatex],
            } as Pick<EvaluateOptions, "jsx" | "jsxs" | "Fragment" | "remarkPlugins" | "rehypePlugins">).then((value) => {
                setMDXContent(() => value.default);
            })
        }
    }, [source]);
    
    return (<MDXContent components={mdxComponents} />);
}