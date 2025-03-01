"use client";

import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

export default function ThemeProvider({ children }: ThemeProviderProps) {
    return (
        <NextThemesProvider attribute={"class"} defaultTheme={"system"}>
            { children }
        </NextThemesProvider>
    );
}