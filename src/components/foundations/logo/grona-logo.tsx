"use client";

import type { HTMLAttributes } from "react";
import { cx } from "@/utils/cx";

interface GronaLogoProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Whether to show the minimal version (just the icon) or the full logo with text
     * @default false
     */
    minimal?: boolean;
}

export const GronaLogo = ({ minimal = false, className, ...props }: GronaLogoProps) => {
    if (minimal) {
        // For minimal version, use the favicon
        return (
            <div {...props} className={cx("flex h-8 w-8 items-center justify-center", className)}>
                <img
                    src="/g_favicon.svg"
                    alt="Grona"
                    className="h-full w-full"
                />
            </div>
        );
    }

    return (
        <div {...props} className={cx("flex h-8 md:h-[50px] w-max items-center justify-start", className)}>
            {/* Favicon for reduced viewport (mobile/small screens) */}
            <img
                src="/g_favicon.svg"
                alt="Grona"
                className="h-full w-auto md:hidden"
            />
            {/* Light mode logo (hidden in dark mode and on mobile) - has black text for light backgrounds */}
            <img
                src="/assets/logo/Light_logo.svg"
                alt="Grona"
                className="hidden h-full w-auto md:block dark:md:hidden"
            />
            {/* Dark mode logo (hidden in light mode and on mobile) - has white text for dark backgrounds */}
            <img
                src="/assets/logo/Dark_logo.svg"
                alt="Grona"
                className="hidden h-full w-auto dark:md:block"
            />
        </div>
    );
};

