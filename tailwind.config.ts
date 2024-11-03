import type { Config } from "tailwindcss";

export default {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            blue: {
                DEFAULT: "var(--colors-blue-default)",
                50: "#E5ECFF",
                100: "#CCD9FF",
                200: "#99B2FF",
                300: "#668CFF",
                400: "#3366FF",
                500: "#0040FF",
                600: "#0033CC",
                700: "#002699",
                800: "#001966",
                900: "#000D33"
            },
            purple: {
                DEFAULT: "var(--colors-purple-default)",
                50: "#F3E5FF",
                100: "#E6CCFF",
                200: "#CE99FF",
                300: "#B566FF",
                400: "#9C33FF",
                500: "#8400FF",
                600: "#6900CC",
                700: "#4F0099",
                800: "#350066",
                900: "#1A0033"
            },
            red: {
                DEFAULT: "var(--colors-red-default)",
                50: "#FFE5EF",
                100: "#FFCCE0",
                200: "#FF99C0",
                300: "#FF66A1",
                400: "#FF3381",
                500: "#FF0062",
                600: "#CC004E",
                700: "#99003B",
                800: "#660027",
                900: "#330014"
            },
            yellow: {
                DEFAULT: "var(--colors-yellow-default)",
                50: "#FFF8E5",
                100: "#FFF1CC",
                200: "#FFE299",
                300: "#FFD466",
                400: "#FFC633",
                500: "#FFB700",
                600: "#CC9200",
                700: "#996E00",
                800: "#664900",
                900: "#332500"
            },
            green: {
                DEFAULT: "var(--colors-green-default)",
                50: "#E5FFF6",
                100: "#CCFFEC",
                200: "#99FFDA",
                300: "#66FFC7",
                400: "#33FFB6",
                500: "#00FFA1",
                600: "#00CC81",
                700: "#009961",
                800: "#006641",
                900: "#003320"
            },
            gray: {
                DEFAULT: "var(--colors-gray-default)",
                50: "#F1F2F4",
                100: "#E3E4E8",
                200: "#C7C9D1",
                300: "#ABAFBA",
                400: "#8F94A3",
                500: "#73798C",
                600: "#5C6170",
                700: "#454954",
                800: "#2E3038",
                900: "#17181C"
            },
            transparent: "transparent",
            inherit: "inherit"
        },
        borderRadius: {
            none: "0",
            sm: "2px",
            DEFAULT: "4px",
            md: "6px",
            lg: "8px"
        },
        fontSize: {
            xs: ".75rem",
            sm: ".875rem",
            base: "1rem",
            md: "1.125rem",
            lg: "1.25rem",
            xl: "1.5rem",
            "2xl": "2rem",
            "3xl": "2.5rem",
            "4xl": "3rem"
        },
        lineHeight: {
            tight: "1.25",
            snug: "1.5",
            normal: "1.75",
            relaxed: "2",
            loose: "2.125"
        },
        boxShadow: {
            md: "var(--shadow-md)",
            lg: "var(--shadow-lg)",
            xl: "var(--shadow-xl)",
            none: "var(--shadow-none)"
        },
        fontFamily: {
            sans: ["var(--font-open-sans)", "var(--font-pretendard)", "'sans-serif'"],
            mono: ["var(--font-cascadia-mono-nf)", "Consolas", "Monaco", "'Andale Mono'", "'Ubuntu Mono'", "monospace"],
            mono_ligature: ["var(--font-cascadia-code-nf)", "Consolas", "Monaco", "'Andale Mono'", "'Ubuntu Mono'", "monospace"]
        },
        extend: {
            textColor: {
                default: "var(--text-default)",
                emphasis: "var(--text-emphasis)",
                description: "var(--text-description)",
                noimportance: "var(--text-noimportance)"
            },
            backgroundColor: {
                default: "var(--bg-default)",
                "default-hover": "var(--bg-default-hover)",
                emphasis: "var(--bg-emphasis)",
                "emphasis-hover": "var(--bg-emphasis-hover)",
                "blue-default": "var(--bg-blue-default)",
                "green-default": "var(--bg-green-default)",
                "red-default": "var(--bg-red-default)",
                "yellow-default": "var(--bg-yellow-default)",
            },
            borderColor: {
                default: "var(--border-default)",
                "default-hover": "var(--border-default-hover)",
                emphasis: "var(--border-emphasis)",
                noimportance: "var(--border-noimportance)",
                "blue-default": "var(--border-blue-default)",
                "green-default": "var(--border-green-default)",
                "red-default": "var(--border-red-default)",
                "yellow-default": "var(--border-yellow-default)",
            },
            spacing: {
                "content-x-default": "18px",
                "content-x-md": "96px",
                "content-x-lg": "calc((100vw - var(--width-main-md)) / 2 + 32px)",
                "content-x-xl": "32px",
                "screen-x-default": "18px",
                "screen-x-md": "32px",
                "screen-x-lg": "128px",
                "screen-x-xl": "32px",
                "header-main": "96px",
                "heading-content": "64px",
                "main-md": "var(--width-main-md)",
                "header-h": "64px",
                none: "0"
            },
            padding: {
                none: "0"
            },
            height: {
                header: "64px",
                "footer-default": "96px",
                "footer-lg": "128px"
            },
            gridTemplateColumns: {
                rootlayout: "calc((100% - var(--width-main-md)) / 2) auto",
                root: "var(--width-main-md) auto"
            },
            fill: {
                none: "none",
                logo: "var(--fill-logo)",
                default: "var(--stroke-default)",
                "default-hover": "var(--stroke-default-hover)",
                "inherit-text": "var(--text-default)"
            },
            stroke: {
                default: "var(--stroke-default)",
                "default-hover": "var(--stroke-default-hover)",
                "inherit-text": "var(--text-default)"
            },
            transitionDuration: {
                short: ".1s",
                default: ".2s"
            }
        }
    },
    plugins: [],
} satisfies Config;
