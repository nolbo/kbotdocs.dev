import {CompatibilityStatus} from "@/constants/compatibility";

export const compatibility: { [name: string]: Compatibility } = {
    "Author": {
        feature: "`Author`",
        url: "/api2/Author",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "0.3.5a",
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
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ]
        }
    },
    "avatar": {
        feature: "`avatar`",
        url: "/api2/Author/avatar",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "0.3.5a",
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
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ]
        }
    },
    "hash": {
        feature: "`hash`",
        url: "/api2/Author/hash",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "0.3.5a",
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
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ]
        }
    },
    "name": {
        feature: "`name`",
        url: "/api2/Author/name",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "0.3.5a",
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
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ]
        }
    },
};