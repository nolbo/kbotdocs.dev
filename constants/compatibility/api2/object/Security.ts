import {CompatibilityStatus} from "@/constants/compatibility";

export const compatibility: { [name: string]: Compatibility } = {
    "Security": {
        feature: "`Security`",
        url: "/api2/Security",
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
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ]
        }
    },
    "aesDecode": {
        feature: "`aesDecode`",
        url: "/api2/Security/aesDecode",
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
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ]
        }
    },
    "aesEncode": {
        feature: "`aesEncode`",
        url: "/api2/Security/aesEncode",
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
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ]
        }
    },
    "ariaDecode": {
        feature: "`ariaDecode`",
        url: "/api2/Security/ariaDecode",
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
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ]
        }
    },
    "ariaDecodeRaw": {
        feature: "`ariaDecodeRaw`",
        url: "/api2/Security/ariaDecodeRaw",
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
    "ariaEncode": {
        feature: "`ariaEncode`",
        url: "/api2/Security/ariaEncode",
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
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ]
        }
    },
    "ariaEncodeRaw": {
        feature: "`ariaEncodeRaw`",
        url: "/api2/Security/ariaEncodeRaw",
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
    "base32Decode": {
        feature: "`base32Decode`",
        url: "/api2/Security/base32Decode",
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
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ]
        }
    },
    "base32Encode": {
        feature: "`base32Encode`",
        url: "/api2/Security/base32Encode",
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
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ]
        }
    },
    "base64Decode": {
        feature: "`base64Decode`",
        url: "/api2/Security/base64Decode",
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
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ]
        }
    },
    "base64Encode": {
        feature: "`base64Encode`",
        url: "/api2/Security/base64Encode",
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
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ]
        }
    },
    "des3Decode": {
        feature: "`des3Decode`",
        url: "/api2/Security/des3Decode",
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
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ]
        }
    },
    "des3Encode": {
        feature: "`des3Encode`",
        url: "/api2/Security/des3Encode",
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
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ]
        }
    },
    "desDecode": {
        feature: "`desDecode`",
        url: "/api2/Security/desDecode",
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
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ]
        }
    },
    "desEncode": {
        feature: "`desEncode`",
        url: "/api2/Security/desEncode",
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
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ]
        }
    },
    "desKey": {
        feature: "`desKey`",
        url: "/api2/Security/desKey",
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
    "eccDecode": {
        feature: "`eccDecode`",
        url: "/api2/Security/eccDecode",
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
                    detailedStatus: {
                        seeImpl: true
                    },
                    version: "4.0",
                    description: "메소드명이 `eecDecode`임."
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
    "eccEncode": {
        feature: "`eccEncode`",
        url: "/api2/Security/eccEncode",
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
                    detailedStatus: {
                        seeImpl: true
                    },
                    version: "4.0",
                    description: "메소드명이 `eecEncode`임."
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
    "getDesKey": {
        feature: "`getDesKey`",
        url: "/api2/Security/getDesKey",
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
                    status: CompatibilityStatus.PARTIAL_SUPPORT,
                    version: "4.0",
                    description: "구현되지 않음"
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
    "hashCode": {
        feature: "`hashCode`",
        url: "/api2/Security/hashCode",
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
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ]
        }
    },
    "md2": {
        feature: "`md2`",
        url: "/api2/Security/md2",
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
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ]
        }
    },
    "md5": {
        feature: "`md5`",
        url: "/api2/Security/md5",
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
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ]
        }
    },
    "md55": {
        feature: "`md55`",
        url: "/api2/Security/md55",
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
    "rc4Decode": {
        feature: "`rc4Decode`",
        url: "/api2/Security/rc4Decode",
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
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ]
        }
    },
    "rc4Encode": {
        feature: "`rc4Encode`",
        url: "/api2/Security/rc4Encode",
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
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ]
        }
    },
    "seedDecode": {
        feature: "`seedDecode`",
        url: "/api2/Security/seedDecode",
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
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ]
        }
    },
    "seedEncode": {
        feature: "`seedEncode`",
        url: "/api2/Security/seedEncode",
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
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ]
        }
    },
    "sha": {
        feature: "`sha`",
        url: "/api2/Security/sha",
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
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ]
        }
    },
    "sha3_224": {
        feature: "`sha3_224`",
        url: "/api2/Security/sha3_224",
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
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ]
        }
    },
    "sha3_256": {
        feature: "`sha3_256`",
        url: "/api2/Security/sha3_256",
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
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ]
        }
    },
    "sha3_384": {
        feature: "`sha3_384`",
        url: "/api2/Security/sha3_384",
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
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ]
        }
    },
    "sha3_512": {
        feature: "`sha3_512`",
        url: "/api2/Security/sha3_512",
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
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ]
        }
    },
    "sha256": {
        feature: "`sha256`",
        url: "/api2/Security/sha256",
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
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ]
        }
    },
    "sha384": {
        feature: "`sha384`",
        url: "/api2/Security/sha384",
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
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ]
        }
    },
    "sha512": {
        feature: "`sha512`",
        url: "/api2/Security/sha512",
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
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ]
        }
    },
    "ulid": {
        feature: "`ulid`",
        url: "/api2/Security/ulid",
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
    "uuid": {
        feature: "`uuid`",
        url: "/api2/Security/uuid",
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
    "uuidv7": {
        feature: "`uuidv7`",
        url: "/api2/Security/uuidv7",
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