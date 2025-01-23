import {CompatibilityStatus} from "@/constants/compatibility";

export const compatibility: { [name: string]: Compatibility } = {
    "FileStream": {
        feature: "`FileStream`",
        url: "/legacy/FileStream",
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
    "append": {
        feature: "`append`",
        url: "/legacy/FileStream/append",
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
    "copyFile": {
        feature: "`copyFile`",
        url: "/legacy/FileStream/copyFile",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "0.7.38a"
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
    "create": {
        feature: "`create`",
        url: "/legacy/FileStream/create",
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
    "createDir": {
        feature: "`createDir`",
        url: "/legacy/FileStream/createDir",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "0.7.38a"
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
    "getSdcardPath": {
        feature: "`getSdcardPath`",
        url: "/legacy/FileStream/getSdcardPath",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "0.7.38a"
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
    "moveFile": {
        feature: "`moveFile`",
        url: "/legacy/FileStream/moveFile",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "0.7.38a"
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
    "read": {
        feature: "`read`",
        url: "/legacy/FileStream/read",
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
    "readJSON": {
        feature: "`readJSON`",
        url: "/legacy/FileStream/readJSON",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "0.7.38a"
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
    "remove": {
        feature: "`remove`",
        url: "/legacy/FileStream/remove",
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
    "save": {
        feature: "`save`",
        url: "/legacy/FileStream/save",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "0.7.38a"
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
    "saveJSON": {
        feature: "`saveJSON`",
        url: "/legacy/FileStream/saveJSON",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "0.7.38a"
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
    "write": {
        feature: "`write`",
        url: "/legacy/FileStream/write",
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
                    detailedStatus: {
                        seeImpl: true
                    },
                    version: "1.0",
                    description: "반환값이 존재하지 않음 (`void`)"
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
    "writeJSON": {
        feature: "`writeJSON`",
        url: "/legacy/FileStream/writeJSON",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "0.7.38a"
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
};