import { MDXProps } from "mdx/types";
import { ReactNode } from "react";

type Icons = 'AccountIcon' | 'AppearanceIcon' | 'ArrowIcon' | "BlogIcon" | 'CalendarIcon' | 'CancelIcon' | 'CautionIcon' | 'CheckIcon' | 'CopyIcon' | 'DarkIcon' | 'DesktopIcon' | 'DevIcon' | 'DonateIcon' | 'DownloadIcon' | 'DragFileIcon' | 'EditIcon' | 'EnglishIcon' | 'EspanolIcon' | 'FileIcon' | 'FolderIcon' | 'HamburgerButtonIcon' | 'HomeIcon' | 'InformationIcon' | 'JapaneseIcon' | 'KoreanIcon' | 'LaptopIcon' | 'LightIcon' | 'LinkIcon' | 'MobileIcon' | 'NolboIcon' | 'PidocIcon' | 'PostIcon' | 'ReactIcon' | 'SearchIcon' | 'SettingsIcon' | 'SpeedIcon' | 'SystemThemeIcon' | 'TabletIcon' | 'TypescriptIcon' | 'UploadIcon' | 'WarningIcon';
type ThemeIcons = "LightIcon" | "DarkIcon" | "SystemThemeIcon";
type DocPath = "/summary" | "/legacy" | "/api2" | "/advanced";
type Doc = { label: string, value: DocPath, doc: (props: MDXProps) => ReactNode };