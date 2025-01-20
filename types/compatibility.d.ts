import React from "react";

type CompatibilityHistory = {
    compatibility: Compatibility,
    detailedStatus: CompatibilityDetailedStatus,
    version: string,
    description: string | React.ReactNode,
};

type CompatibilityInfo = {
    source: String,
    compatibility: {
        msgBot: CompatibilityHistory[],
        autoReplyBot: CompatibilityHistory[],
        starLight: CompatibilityHistory[],
    }
};
