import Script from "next/script";
import React from "react";

const script = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', '${process.env.NEXT_PUBLIC_GA}');
`;

export default function GA() {
    return (
        process.env.NEXT_PUBLIC_GA &&
        <>
            <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA}`}/>
            <Script dangerouslySetInnerHTML={{ __html: script }}/>
        </>
    );
}