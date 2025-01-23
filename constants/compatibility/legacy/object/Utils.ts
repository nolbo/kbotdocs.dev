import {CompatibilityStatus} from "@/constants/compatibility";

export const compatibility: { [name: string]: Compatibility } = {
    "Utils": {
        feature: "`Utils`",
        url: "/legacy/Utils",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "0.1.2a"
                }
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "1.0"
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
    "compress": {
        feature: "`compress`",
        url: "/legacy/Utils/compress",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "1.0"
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
    "copyToClipboard": {
        feature: "`copyToClipboard`",
        url: "/legacy/Utils/copyToClipboard",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "1.0"
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
    "delay": {
        feature: "`delay`",
        url: "/legacy/Utils/delay",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "1.0"
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
    "getAndroidVersionCode": {
        feature: "`getAndroidVersionCode`",
        url: "/legacy/Utils/getAndroidVersionCode",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "0.1.2a"
                }
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
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
    "getAndroidVersionName": {
        feature: "`getAndroidVersionName`",
        url: "/legacy/Utils/getAndroidVersionName",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "0.1.2a"
                }
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
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
    "getLw": {
        feature: "`getLw`",
        url: "/legacy/Utils/getLw",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
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
    "getLwLined": {
        feature: "`getLwLined`",
        url: "/legacy/Utils/getLwLined",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
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
    "getPhoneBrand": {
        feature: "`getPhoneBrand`",
        url: "/legacy/Utils/getPhoneBrand",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "0.1.2a"
                }
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
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
    "getPhoneModel": {
        feature: "`getPhoneModel`",
        url: "/legacy/Utils/getPhoneModel",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "0.1.2a"
                }
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
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
    "getRandomUserAgent": {
        feature: "`getRandomUserAgent`",
        url: "/legacy/Utils/getRandomUserAgent",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "0.1.2a"
                }
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
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
    "getWeatherJSON": {
        feature: "`getWeatherJSON`",
        url: "/legacy/Utils/getWeatherJSON",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "1.0"
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
    "getWebText": {
        feature: "`getWebText`",
        url: "/legacy/Utils/getWebText",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.PARTIAL_SUPPORT,
                    version: "0.1.2a",
                    description: "`getWebText(String, Boolean)`이 존재하지 않음."
                }
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "1.0"
                }
            ],
            starLight: [
                {
                    status: CompatibilityStatus.PARTIAL_SUPPORT,
                    version: "0.1.0",
                    description: "`getWebText(String, Boolean)`이 존재하지 않음."
                }
            ]
        }
    },
    "getWebText2": {
        feature: "`getWebText2`",
        url: "/legacy/Utils/getWebText2",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "1.0"
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
    "getZoneIdByName": {
        feature: "`getZoneIdByName`",
        url: "/legacy/Utils/getZoneIdByName",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "1.0"
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
    "isUndefined": {
        feature: "`isUndefined`",
        url: "/legacy/Utils/isUndefined",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "0.1.2a"
                }
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
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
    "measureNanoTime": {
        feature: "`measureNanoTime`",
        url: "/legacy/Utils/measureNanoTime",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "0.1.2a"
                }
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
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
    "measureTimeMillis": {
        feature: "`measureTimeMillis`",
        url: "/legacy/Utils/measureTimeMillis",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "0.1.2a"
                }
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
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
    "parse": {
        feature: "`parse`",
        url: "/legacy/Utils/parse",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "0.1.2a"
                }
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "1.0"
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
    "randomAlphanumeric": {
        feature: "`randomAlphanumeric`",
        url: "/legacy/Utils/randomAlphanumeric",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
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
    "removeRLO": {
        feature: "`removeRLO`",
        url: "/legacy/Utils/removeRLO",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "1.0"
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
    "removeTags": {
        feature: "`removeTags`",
        url: "/legacy/Utils/removeTags",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "1.0"
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
    "sleep": {
        feature: "`sleep`",
        url: "/legacy/Utils/sleep",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "1.0"
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
    "toast": {
        feature: "`toast`",
        url: "/legacy/Utils/toast",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "1.0"
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
    "vibrate": {
        feature: "`vibrate`",
        url: "/legacy/Utils/vibrate",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "1.0"
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
    "xmlToJson": {
        feature: "`xmlToJson`",
        url: "/legacy/Utils/xmlToJson",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "0.1.2a"
                }
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
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