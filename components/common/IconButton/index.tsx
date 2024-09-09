"use client";

import { forwardRef, ButtonHTMLAttributes } from "react";
import Icon from "@/components/common/Icon";

interface IIconButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: Icons;
}

const IconButton = forwardRef<HTMLButtonElement, IIconButton>(({ icon, ...props }: IIconButton, ref) => {
    return (
        <button ref={ ref }
                className={"flex justify-center items-center relative rounded w-[36px] h-[36px] border-none outline-none bg-default cursor-pointer select-none hover:bg-default-hover hover:stroke-default-hover transition-colors duration-default"}
                { ...props }>
            <Icon icon={ icon } className={"w-[18px] h-[18px] stroke-default"} />
        </button>
    );
});

IconButton.displayName = "IconButton";

export default IconButton;