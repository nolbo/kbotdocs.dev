import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        pre({ children }) {
            return (
                <div className={"bg-red"}>{ children }</div>
            )
        },
        ...components,
    }
}