import {CompatibilityStatus} from "@/constants/compatibility";

export const compatibility: { [name: string]: Compatibility } = {
    "App": {
        feature: "`App`",
        url: "/api2/App",
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
    "getContext": {
        feature: "`getContext`",
        url: "/api2/App/getContext",
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
    "runOnUiThread": {
        feature: "`runOnUiThread`",
        url: "/api2/App/runOnUiThread",
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
    }
};