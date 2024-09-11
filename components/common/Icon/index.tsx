"use client";

import React, { SVGAttributes } from "react";
import AccountIcon from "@/public/svg/AccountIcon.svg";
import AppearanceIcon from "@/public/svg/AppearanceIcon.svg";
import ArrowIcon from "@/public/svg/ArrowIcon.svg";
import BlogIcon from "@/public/svg/BlogIcon.svg";
import CalendarIcon from "@/public/svg/CalendarIcon.svg";
import CancelIcon from "@/public/svg/CancelIcon.svg";
import CheckIcon from "@/public/svg/CheckIcon.svg";
import CopyIcon from "@/public/svg/CopyIcon.svg";
import DangerIcon from "@/public/svg/DangerIcon.svg";
import DangerFillIcon from "@/public/svg/DangerFillIcon.svg";
import DarkIcon from "@/public/svg/DarkIcon.svg";
import DesktopIcon from "@/public/svg/DesktopIcon.svg";
import DevIcon from "@/public/svg/DevIcon.svg";
import DonateIcon from "@/public/svg/DonateIcon.svg";
import DownloadIcon from "@/public/svg/DownloadIcon.svg";
import DragFileIcon from "@/public/svg/DragFileIcon.svg";
import EditIcon from "@/public/svg/EditIcon.svg";
import EnglishIcon from "@/public/svg/EnglishIcon.svg";
import EspanolIcon from "@/public/svg/EspanolIcon.svg";
import FileIcon from "@/public/svg/FileIcon.svg";
import FolderIcon from "@/public/svg/FolderIcon.svg";
import HamburgerButtonIcon from "@/public/svg/HamburgerButtonIcon.svg";
import HomeIcon from "@/public/svg/HomeIcon.svg";
import InformationIcon from "@/public/svg/InformationIcon.svg";
import InformationFillIcon from "@/public/svg/InformationFillIcon.svg";
import JapaneseIcon from "@/public/svg/JapaneseIcon.svg";
import KoreanIcon from "@/public/svg/KoreanIcon.svg";
import LaptopIcon from "@/public/svg/LaptopIcon.svg";
import LightIcon from "@/public/svg/LightIcon.svg";
import LinkIcon from "@/public/svg/LinkIcon.svg";
import MobileIcon from "@/public/svg/MobileIcon.svg";
import NolboIcon from "@/public/svg/NolboIcon.svg";
import PidocIcon from "@/public/svg/PidocIcon.svg";
import PostIcon from "@/public/svg/PostIcon.svg";
import ReactIcon from "@/public/svg/ReactIcon.svg";
import SearchIcon from "@/public/svg/SearchIcon.svg";
import SettingsIcon from "@/public/svg/SettingsIcon.svg";
import SpeedIcon from "@/public/svg/SpeedIcon.svg";
import SuccessIcon from "@/public/svg/SuccessIcon.svg";
import SuccessFillIcon from "@/public/svg/SuccessFillIcon.svg";
import SystemThemeIcon from "@/public/svg/SystemThemeIcon.svg";
import TabletIcon from "@/public/svg/TabletIcon.svg";
import TypescriptIcon from "@/public/svg/TypescriptIcon.svg";
import UploadIcon from "@/public/svg/UploadIcon.svg";
import WarningIcon from "@/public/svg/WarningIcon.svg";
import WarningFillIcon from "@/public/svg/WarningFillIcon.svg";

interface IIcon extends SVGAttributes<HTMLOrSVGElement> {
    icon: Icons;
}
export default function Icon({ icon, ...props }: IIcon) {
    const IconDic: { [iconName in Icons]: React.ReactNode } = {
        AccountIcon: <AccountIcon { ...props } />,
        AppearanceIcon: <AppearanceIcon { ...props } />,
        ArrowIcon: <ArrowIcon { ...props } />,
        BlogIcon: <BlogIcon { ...props } />,
        CalendarIcon: <CalendarIcon { ...props } />,
        CancelIcon: <CancelIcon { ...props } />,
        CheckIcon: <CheckIcon { ...props } />,
        CopyIcon: <CopyIcon { ...props } />,
        DangerIcon: <DangerIcon { ...props } />,
        DangerFillIcon: <DangerFillIcon { ...props } />,
        DarkIcon: <DarkIcon { ...props } />,
        DesktopIcon: <DesktopIcon { ...props } />,
        DevIcon: <DevIcon { ...props } />,
        DonateIcon: <DonateIcon { ...props } />,
        DownloadIcon: <DownloadIcon { ...props } />,
        DragFileIcon: <DragFileIcon { ...props } />,
        EditIcon: <EditIcon { ...props } />,
        EnglishIcon: <EnglishIcon { ...props } />,
        EspanolIcon: <EspanolIcon { ...props } />,
        FileIcon: <FileIcon { ...props } />,
        FolderIcon: <FolderIcon { ...props } />,
        HamburgerButtonIcon: <HamburgerButtonIcon { ...props } />,
        HomeIcon: <HomeIcon { ...props } />,
        InformationIcon: <InformationIcon { ...props } />,
        InformationFillIcon: <InformationFillIcon { ...props } />,
        JapaneseIcon: <JapaneseIcon { ...props } />,
        KoreanIcon: <KoreanIcon { ...props } />,
        LaptopIcon: <LaptopIcon { ...props } />,
        LightIcon: <LightIcon { ...props } />,
        LinkIcon: <LinkIcon { ...props } />,
        MobileIcon: <MobileIcon { ...props } />,
        NolboIcon: <NolboIcon { ...props } />,
        PidocIcon: <PidocIcon { ...props } />,
        PostIcon: <PostIcon { ...props } />,
        ReactIcon: <ReactIcon { ...props } />,
        SearchIcon: <SearchIcon { ...props } />,
        SettingsIcon: <SettingsIcon { ...props } />,
        SpeedIcon: <SpeedIcon { ...props } />,
        SuccessIcon: <SuccessIcon { ...props } />,
        SuccessFillIcon: <SuccessFillIcon { ...props } />,
        SystemThemeIcon: <SystemThemeIcon { ...props } />,
        TabletIcon: <TabletIcon { ...props } />,
        TypescriptIcon: <TypescriptIcon { ...props } />,
        UploadIcon: <UploadIcon { ...props } />,
        WarningIcon: <WarningIcon { ...props }  />,
        WarningFillIcon: <WarningFillIcon { ...props }  />,
    };

    return (
        IconDic[icon]
    );
}