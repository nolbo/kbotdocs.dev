"use client";

import React, {HTMLAttributes, useEffect, useState} from "react";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import {evaluate, EvaluateOptions} from "@mdx-js/mdx";
import {mdxComponents} from "@/mdx-components";
import {MDXProps} from "mdx/types";

interface IMDXClient extends HTMLAttributes<HTMLElement> {
    source?: string;
}

export default function MDXClient({source}: IMDXClient) {
    const [MDXContent, setMDXContent] = useState<(props: MDXProps) => React.ReactNode>(() => (() => null));

    useEffect(() => {
        if (source) {
            evaluate(source || "", {
                jsx,
                jsxs,
                Fragment
            } as Pick<EvaluateOptions, "jsx" | "jsxs" | "Fragment">).then((value) => {
                setMDXContent(() => value.default);
            })
        }
    }, [source]);
    
    return (<MDXContent components={mdxComponents} />);
}