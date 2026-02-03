"use client";

import type { HTMLAttributes } from "react";
import Image from "next/image";
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
                <Image
                    src="/g_favicon.svg"
                    alt="Grona"
                    width={32}
                    height={32}
                    className="h-full w-full"
                />
            </div>
        );
    }

    return (
        <div {...props} className={cx("flex h-[47px] md:h-[50px] w-max items-center justify-start", className)}>
            {/* Logo for both mobile and desktop */}
            <Image
                src="/assets/logo/Light_logo (green).svg"
                alt="Grona"
                width={500}
                height={500}
                className="h-full w-auto"
            />
        </div>
    );
};

