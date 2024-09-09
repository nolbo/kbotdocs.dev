"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import IconButton from "@/components/common/IconButton";

export default function ThemeButton() {
    const { theme, setTheme } = useTheme();
    const [ icon, setIcon ] = useState<ThemeIcons>("DarkIcon");

    const btnOnClick = () => {
        setTheme((theme == "light") ? "dark" : ((theme == "dark") ? "system" : "light"));
    };

    useEffect(() => {
        setIcon((theme == "light") ? "LightIcon" : ((theme == "dark") ? "DarkIcon" : "SystemThemeIcon"));
    }, [theme]);

    return (
        <IconButton icon={ icon } onClick={ btnOnClick } />
    );
}