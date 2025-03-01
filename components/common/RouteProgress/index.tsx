"use client";

import {usePathname, useRouter, useSearchParams} from "next/navigation";
import nProgress from "nprogress";
import {useEffect} from "react";
import "@/styles/nProgress.css";

export default function RouteProgress() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        const _push = router.push.bind(router);
        const _replace = router.replace.bind(router);

        nProgress.configure({
            showSpinner: false,
        });

        router.push = (href, options) => {
            const currentHref = pathname + ((searchParams.size > 0) ? `?${searchParams}` : "");
            if (href !== currentHref) {
                nProgress.start();
            }
            _push(href, options);
        };

        router.replace = (href, options) => {
            const currentHref = pathname + ((searchParams.size > 0) ? `?${searchParams}` : "");
            if (href !== currentHref) {
                nProgress.start();
            }
            _replace(href, options);
        };

        const handlePopState = () => {
            nProgress.start();
        };

        // Popstate listener to handle back/forward navigation
        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

    useEffect(() => {
        nProgress.done();
    }, [pathname, searchParams]);

    return null;
}