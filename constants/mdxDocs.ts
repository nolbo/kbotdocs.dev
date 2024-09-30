import Home from "@/markdown/Home.mdx";
import Summary from "@/markdown/Summary.mdx";
import LegacyAPI from "@/markdown/LegacyAPI.mdx";
import API2 from "@/markdown/API2.mdx";
import StarLight from "@/markdown/StarLight.mdx";
import Advanced from "@/markdown/Advanced.mdx";
import {MDXProps} from "mdx/types";
import {ReactNode} from "react";

export type Doc = { label: string, value: DocPath, doc: (props: MDXProps) => ReactNode };
export const NoGroup: Doc[] = [
    { label: "홈", value: "/", doc: Home },
] as const;
export const Guide: Doc[] = [
    { label: "개요", value: "/summary", doc: Summary },
    { label: "심화", value: "/advanced", doc: Advanced },
] as const;
export const Reference: Doc[] = [
    { label: "레거시 API", value: "/legacy", doc: LegacyAPI },
    { label: "API2", value: "/api2", doc: API2 },
    { label: "StarLight", value: "/starlight", doc: StarLight },
] as const;
export const Docs: Doc[] = [
    ...NoGroup,
    ...Guide,
    ...Reference
] as const;