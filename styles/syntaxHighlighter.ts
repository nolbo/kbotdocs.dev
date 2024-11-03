import React from "react";

export const sthlTheme: { [key: string]: React.CSSProperties } = {
    "code[class*=\"language-\"]": {
        color: "var(--sthl-code-text)",
        background: "none",
        fontFamily: "var(--font-cascadia-mono-nf), Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        fontSize: "14px",
        textAlign: "left",
        whiteSpace: "pre",
        wordSpacing: "normal",
        wordBreak: "normal",
        wordWrap: "normal",
        lineHeight: "1.625",
        MozTabSize: "4",
        OTabSize: "4",
        tabSize: "4",
        WebkitHyphens: "none",
        MozHyphens: "none",
        msHyphens: "none",
        hyphens: "none",
        overflow: "auto",
    },
    "pre[class*=\"language-\"]": {
        color: "var(--sthl-code-text)",
        background: "var(--sthl-pre-bg)",
        textShadow: "none",
        fontFamily: "var(--font-cascadia-mono-nf), Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        fontSize: "14px",
        textAlign: "left",
        whiteSpace: "pre",
        wordSpacing: "normal",
        wordBreak: "normal",
        wordWrap: "normal",
        lineHeight: "1.625",
        MozTabSize: "4",
        OTabSize: "4",
        tabSize: "4",
        WebkitHyphens: "none",
        MozHyphens: "none",
        msHyphens: "none",
        hyphens: "none",
        padding: "1rem",
        overflow: "auto",
    },
    "comment": {
        color: "var(--sthl-comment)"
    },
    "prolog": {
        color: "var(--sthl-prolog)"
    },
    "doctype": {
        color: "var(--sthl-doctype)"
    },
    "cdata": {
        color: "var(--sthl-cdata)"
    },
    "punctuation": {
        opacity: "var(--sthl-punctuation)"
    },
    "namespace": {
        opacity: "var(--sthl-namespace)"
    },
    "property": {
        color: "var(--sthl-property)"
    },
    "tag": {
        color: "var(--sthl-tag)"
    },
    "boolean": {
        color: "var(--sthl-boolean)"
    },
    "number": {
        color: "var(--sthl-number)"
    },
    "constant": {
        color: "var(--sthl-constant)"
    },
    "symbol": {
        color: "var(--sthl-symbol)"
    },
    "selector": {
        color: "var(--sthl-selector)"
    },
    "attr-name": {
        color: "var(--sthl-attr-name)"
    },
    "string": {
        color: "var(--sthl-string)"
    },
    "char": {
        color: "var(--sthl-char)"
    },
    "unit": {
        color: "var(--sthl-unit)"
    },
    "builtin": {
        color: "var(--sthl-builtin)"
    },
    "inserted": {
        color: "var(--sthl-inserted)"
    },
    "operator": {
        color: "var(--sthl-operator)"
    },
    "entity": {
        color: "var(--sthl-entity)",
        cursor: "help"
    },
    "url": {
        color: "var(--sthl-url)"
    },
    "function": {
        color: "var(--sthl-function)"
    },
    "variable": {
        color: "var(--sthl-variable)"
    },
    "atrule": {
        color: "var(--sthl-atrule)",
        fontStyle: "italic",
        fontWeight: "bold"
    },
    "attr-value": {
        color: "var(--sthl-attr-value)"
    },
    "keyword": {
        color: "var(--sthl-keyword)",
        fontWeight: "bold"
    },
    "regex": {
        color: "var(--sthl-regex)"
    },
    "important": {
        color: "var(--sthl-important)",
        fontWeight: "bold"
    },
    "bold": {
        fontWeight: "bold"
    },
    "italic": {
        fontStyle: "italic"
    },
    "deleted": {
        color: "var(--sthl-deleted)"
    },
    "coord": {
        color: "var(--sthl-coord)"
    }
};
