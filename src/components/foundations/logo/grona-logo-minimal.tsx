"use client";

import type { HTMLAttributes } from "react";
import { cx } from "@/utils/cx";

export const GronaLogoMinimal = (props: HTMLAttributes<HTMLDivElement>) => {
    return (
        <div {...props} className={cx("flex h-8 w-8 items-center justify-center", props.className)}>
            <img
                src="/g_favicon.svg"
                alt="Grona"
                className="h-full w-full"
            />
        </div>
    );
};

