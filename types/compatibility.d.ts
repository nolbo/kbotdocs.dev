type DetailedStatus = {
    bug?: boolean,
    seeImpl?: boolean,
};

type FeatureStatus = {
    deprecated?: boolean,
    experimental?: boolean,
    nonStandard?: boolean,
};

type CompatibilityHistory = {
    status: CompatibilityStatus,
    detailedStatus?: DetailedStatus,
    version: string,
    description?: string | string[],
};

type Compatibility = {
    feature: string,
    url?: string,
    status: FeatureStatus,
    support: {
        msgBot: CompatibilityHistory[],
        autoReplyBot: CompatibilityHistory[],
        starLight: CompatibilityHistory[],
    },
};
