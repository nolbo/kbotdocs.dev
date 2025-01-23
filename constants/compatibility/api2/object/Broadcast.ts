import {CompatibilityStatus} from "@/constants/compatibility";

export const compatibility: { [name: string]: Compatibility } = {
    "Broadcast": {
        feature: "`Broadcast`",
        url: "/api2/Broadcast",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "0.3.5a"
                }
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "4.0"
                }
            ],
            starLight: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "0.1.0"
                }
            ]
        }
    },
    "register": {
        feature: "`register`",
        url: "/api2/Broadcast/register",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "0.3.5a"
                }
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "4.0"
                }
            ],
            starLight: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "0.1.0"
                }
            ]
        }
    },
    "send": {
        feature: "`send`",
        url: "/api2/Broadcast/send",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "0.3.5a"
                }
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "4.0"
                }
            ],
            starLight: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "0.1.0"
                }
            ]
        }
    },
    "unregister": {
        feature: "`unregister`",
        url: "/api2/Broadcast/unregister",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "0.3.5a"
                }
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "4.0"
                }
            ],
            starLight: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "0.1.0"
                }
            ]
        }
    },
    "unregisterAll": {
        feature: "`unregisterAll`",
        url: "/api2/Broadcast/unregisterAll",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "0.3.5a"
                }
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "4.0"
                }
            ],
            starLight: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "0.1.0"
                }
            ]
        }
    },
};