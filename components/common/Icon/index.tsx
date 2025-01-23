"use client";

import React, {SVGAttributes} from "react";
import AccountIcon from "@/public/svg/AccountIcon.svg";
import AppearanceIcon from "@/public/svg/AppearanceIcon.svg";
import ArrowIcon from "@/public/svg/ArrowIcon.svg";
import AutoReplyBotIcon from "@/public/svg/AutoReplyBotIcon.svg";
import BlogIcon from "@/public/svg/BlogIcon.svg";
import BugIcon from "@/public/svg/BugIcon.svg";
import CalendarIcon from "@/public/svg/CalendarIcon.svg";
import CancelFillIcon from "@/public/svg/CancelFillIcon.svg";
import CancelIcon from "@/public/svg/CancelIcon.svg";
import CheckIcon from "@/public/svg/CheckIcon.svg";
import CopyIcon from "@/public/svg/CopyIcon.svg";
import DangerIcon from "@/public/svg/DangerIcon.svg";
import DangerFillIcon from "@/public/svg/DangerFillIcon.svg";
import DarkIcon from "@/public/svg/DarkIcon.svg";
import DeprecatedIcon from "@/public/svg/DeprecatedIcon.svg";
import DesktopIcon from "@/public/svg/DesktopIcon.svg";
import DevIcon from "@/public/svg/DevIcon.svg";
import DonateIcon from "@/public/svg/DonateIcon.svg";
import DownloadIcon from "@/public/svg/DownloadIcon.svg";
import DragFileIcon from "@/public/svg/DragFileIcon.svg";
import EditIcon from "@/public/svg/EditIcon.svg";
import EnglishIcon from "@/public/svg/EnglishIcon.svg";
import EspanolIcon from "@/public/svg/EspanolIcon.svg";
import ExperimentalIcon from "@/public/svg/ExperimentalIcon.svg";
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
import MarkerIcon from "@/public/svg/MarkerIcon.svg";
import MessengerbotRIcon from "@/public/svg/MessengerbotRIcon.svg";
import MobileIcon from "@/public/svg/MobileIcon.svg";
import MoreIcon from "@/public/svg/MoreIcon.svg";
import NolboIcon from "@/public/svg/NolboIcon.svg";
import NonStandardIcon from "@/public/svg/NonStandardIcon.svg";
import PartialFillIcon from "@/public/svg/PartialFillIcon.svg";
import PartialIcon from "@/public/svg/PartialIcon.svg";
import PidocIcon from "@/public/svg/PidocIcon.svg";
import PostIcon from "@/public/svg/PostIcon.svg";
import ReactIcon from "@/public/svg/ReactIcon.svg";
import SearchIcon from "@/public/svg/SearchIcon.svg";
import SeeIcon from "@/public/svg/SeeIcon.svg";
import SettingsIcon from "@/public/svg/SettingsIcon.svg";
import SpeedIcon from "@/public/svg/SpeedIcon.svg";
import StandardIcon from "@/public/svg/StandardIcon.svg";
import StarLightIcon from "@/public/svg/StarLightIcon.svg";
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

export default function Icon({icon, ...p}: IIcon) {
    const IconDic: { [iconName in Icons]: React.ReactNode } = {
        AccountIcon: <AccountIcon {...p} />,
        AppearanceIcon: <AppearanceIcon {...p} />,
        ArrowIcon: <ArrowIcon {...p} />,
        AutoReplyBotIcon: <AutoReplyBotIcon {...p} />,
        BlogIcon: <BlogIcon {...p} />,
        BugIcon: <BugIcon {...p} />,
        CalendarIcon: <CalendarIcon {...p} />,
        CancelFillIcon: <CancelFillIcon {...p} />,
        CancelIcon: <CancelIcon {...p} />,
        CheckIcon: <CheckIcon {...p} />,
        CopyIcon: <CopyIcon {...p} />,
        DangerIcon: <DangerIcon {...p} />,
        DangerFillIcon: <DangerFillIcon {...p} />,
        DarkIcon: <DarkIcon {...p} />,
        DeprecatedIcon: <DeprecatedIcon {...p} />,
        DesktopIcon: <DesktopIcon {...p} />,
        DevIcon: <DevIcon {...p} />,
        DonateIcon: <DonateIcon {...p} />,
        DownloadIcon: <DownloadIcon {...p} />,
        DragFileIcon: <DragFileIcon {...p} />,
        EditIcon: <EditIcon {...p} />,
        EnglishIcon: <EnglishIcon {...p} />,
        EspanolIcon: <EspanolIcon {...p} />,
        ExperimentalIcon: <ExperimentalIcon {...p} />,
        FileIcon: <FileIcon {...p} />,
        FolderIcon: <FolderIcon {...p} />,
        HamburgerButtonIcon: <HamburgerButtonIcon {...p} />,
        HomeIcon: <HomeIcon {...p} />,
        InformationIcon: <InformationIcon {...p} />,
        InformationFillIcon: <InformationFillIcon {...p} />,
        JapaneseIcon: <JapaneseIcon {...p} />,
        KoreanIcon: <KoreanIcon {...p} />,
        LaptopIcon: <LaptopIcon {...p} />,
        LightIcon: <LightIcon {...p} />,
        LinkIcon: <LinkIcon {...p} />,
        MarkerIcon: <MarkerIcon {...p} />,
        MessengerbotRIcon: <MessengerbotRIcon {...p} />,
        MobileIcon: <MobileIcon {...p} />,
        MoreIcon: <MoreIcon {...p} />,
        NolboIcon: <NolboIcon {...p} />,
        NonStandardIcon: <NonStandardIcon {...p} />,
        PartialFillIcon: <PartialFillIcon {...p} />,
        PartialIcon: <PartialIcon {...p} />,
        PidocIcon: <PidocIcon {...p} />,
        PostIcon: <PostIcon {...p} />,
        ReactIcon: <ReactIcon {...p} />,
        SearchIcon: <SearchIcon {...p} />,
        SeeIcon: <SeeIcon {...p} />,
        SettingsIcon: <SettingsIcon {...p} />,
        SpeedIcon: <SpeedIcon {...p} />,
        StandardIcon: <StandardIcon {...p} />,
        StarLightIcon: <StarLightIcon {...p} />,
        SuccessIcon: <SuccessIcon {...p} />,
        SuccessFillIcon: <SuccessFillIcon {...p} />,
        SystemThemeIcon: <SystemThemeIcon {...p} />,
        TabletIcon: <TabletIcon {...p} />,
        TypescriptIcon: <TypescriptIcon {...p} />,
        UploadIcon: <UploadIcon {...p} />,
        WarningIcon: <WarningIcon {...p}  />,
        WarningFillIcon: <WarningFillIcon {...p}  />,
    };

    return (
        IconDic[icon]
    );
}