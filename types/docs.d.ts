type Doc = {
    label: string,
    path?: string,
    children?: Doc[],
    deprecated?: boolean;
    experimental?: boolean;
    nonStandard?: boolean;
};