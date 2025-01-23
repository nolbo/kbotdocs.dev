import {CompatibilityStatus} from "@/constants/compatibility";

export const compatibility: { [name: string]: Compatibility } = {
    "Api": {
        feature: "`Api`",
        url: "/legacy/Api",
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
                },
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
    "canReply": {
        feature: "`canReply`",
        url: "/legacy/Api/canReply",
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
    "compile": {
        feature: "`compile`",
        url: "/legacy/Api/compile",
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
                },
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.PARTIAL_SUPPORT,
                    version: "1.0",
                    description: "`compile(String, Boolean)`이 존재하지 않음."
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
    "gc": {
        feature: "`gc`",
        url: "/legacy/Api/gc",
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
                },
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "1.0",
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
    "getActiveThreadsCount": {
        feature: "`getActiveThreadsCount`",
        url: "/legacy/Api/getActiveThreadsCount",
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
                },
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: "",
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
        url: "/legacy/Api/getContext",
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
                },
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "1.0",
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
    "getLastImage": {
        feature: "`getLastImage`",
        url: "/legacy/Api/getLastImage",
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
                },
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "1.0",
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
    "getLastImageBitmap": {
        feature: "`getLastImageBitmap`",
        url: "/legacy/Api/getLastImageBitmap",
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
                },
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "1.0",
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
    "getRoomList": {
        feature: "`getRoomList`",
        url: "/legacy/Api/getRoomList",
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
                },
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "1.0",
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
    "getScriptNames": {
        feature: "`getScriptNames`",
        url: "/legacy/Api/getScriptNames",
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
                },
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "1.0",
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
    "interruptThreads": {
        feature: "`interruptThreads`",
        url: "/legacy/Api/interruptThreads",
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
                },
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: "",
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
    "isCompiled": {
        feature: "`isCompiled`",
        url: "/legacy/Api/isCompiled",
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
                },
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: "",
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
    "isCompiling": {
        feature: "`isCompiling`",
        url: "/legacy/Api/isCompiling",
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
                },
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: "",
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
    "isOn": {
        feature: "`isOn`",
        url: "/legacy/Api/isOn",
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
                },
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "1.0",
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
    "isTerminated": {
        feature: "`isTerminated`",
        url: "/legacy/Api/isTerminated",
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
                },
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: "",
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
    "makeNoti": {
        feature: "`makeNoti`",
        url: "/legacy/Api/makeNoti",
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
                },
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "1.0",
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
    "markAsRead": {
        feature: "`markAsRead`",
        url: "/legacy/Api/markAsRead",
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
                },
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "1.0",
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
    "markAsReadOnID(BigInt)": {
        feature: "`markAsReadOnID(BigInt)`",
        url: "/legacy/Api/markAsReadOnID(BigInt)",
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
                },
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: "",
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
    "markAsReadOnID(String)": {
        feature: "`markAsReadOnID(String)`",
        url: "/legacy/Api/markAsReadOnID(String)",
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
                },
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: "",
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
    "off": {
        feature: "`off`",
        url: "/legacy/Api/off",
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
                },
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "1.0",
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
    "on": {
        feature: "`on`",
        url: "/legacy/Api/on",
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
                },
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "1.0",
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
    "papagoTranslate": {
        feature: "`papagoTranslate`",
        url: "/legacy/Api/papagoTranslate",
        status: {
            deprecated: true,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    detailedStatus: {
                        seeImpl: true
                    },
                    version: "0.1.2a",
                    description: "Papago API 지원 중단으로 인해 `null`을 반환함."
                },
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    detailedStatus: {
                        seeImpl: true
                    },
                    version: "1.0",
                    description: "Papago API 지원 중단으로 인해 `\"Error Code: 051\"`을 반환함."
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
    "prepare": {
        feature: "`prepare`",
        url: "/legacy/Api/prepare",
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
                },
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "1.0",
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
    "reload": {
        feature: "`reload`",
        url: "/legacy/Api/reload",
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
                },
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.PARTIAL_SUPPORT,
                    version: "1.0",
                    description: "`reload(String, Boolean)`이 존재하지 않음."
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
    "replyRoom": {
        feature: "`replyRoom`",
        url: "/legacy/Api/replyRoom",
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
                },
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "1.0",
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
    "replyToID(BigInt,String,Boolean)": {
        feature: "`replyToID(BigInt, String, Boolean)`",
        url: "/legacy/Api/replyToID(BigInt,String,Boolean)",
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
                },
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: "",
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
    "replyToID(String,String,Boolean)": {
        feature: "`replyToID(String, String, Boolean)`",
        url: "/legacy/Api/replyToID(String,String,Boolean)",
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
                },
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: "",
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
    "showToast": {
        feature: "`showToast`",
        url: "/legacy/Api/showToast",
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
                },
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "1.0",
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
    "UIThread": {
        feature: "`UIThread`",
        url: "/legacy/Api/UIThread",
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
                },
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.PARTIAL_SUPPORT,
                    version: "1.0",
                    description: "`UIThread(() => Any?, (error: java.lang.Throwable?, result: Any?) => Any?)`이 존재하지 않음."
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
    "unload": {
        feature: "`unload`",
        url: "/legacy/Api/unload",
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
                },
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "1.0",
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