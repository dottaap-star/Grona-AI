"use client";

import { useRef } from "react";
import { Button as AriaButton, Dialog as AriaDialog, DialogTrigger as AriaDialogTrigger, Popover as AriaPopover } from "react-aria-components";
import { Button } from "@/components/base/buttons/button";
import { GronaLogo } from "@/components/foundations/logo/grona-logo";
import { cx } from "@/utils/cx";

const MobileMenu = () => {
    return (
        <div className="flex flex-col gap-3 px-4 py-6">
            <Button color="link-gray" size="lg" href="/pricing">
                Pricing
            </Button>
            <Button color="link-gray" size="lg">
                Log in
            </Button>
        </div>
    );
};

interface HeaderProps {
    isFullWidth?: boolean;
    isFloating?: boolean;
    className?: string;
}

export const Header = ({ isFloating, className }: HeaderProps) => {
    const headerRef = useRef<HTMLElement>(null);

    return (
        <header
            ref={headerRef}
            className={cx(
                "sticky top-0 z-50 flex h-18 w-full items-center justify-center md:h-20",
                isFloating && "h-16 md:h-19 md:pt-4",
                "max-md:has-aria-expanded:bg-primary",
                className,
            )}
        >
            <div className="flex size-full max-w-container flex-1 items-center pr-3 pl-4 md:px-8">
                <div
                    className={cx(
                        "flex w-full justify-between gap-4 transition-shadow duration-300",
                        isFloating && "backdrop-blur-lg backdrop-saturate-150 bg-primary/80 ring-secondary_alt md:rounded-2xl md:bg-primary md:py-3 md:pr-3 md:pl-4 md:shadow-lg md:ring-1 md:hover:shadow-xl",
                    )}
                >
                    <div className="flex flex-1 items-center">
                        <a
                            aria-label="Go to homepage"
                            href="/"
                            className="rounded-xs outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                            <GronaLogo />
                        </a>
                    </div>

                    {/* Desktop buttons */}
                    <div className={cx("flex items-center max-md:hidden", isFloating ? "gap-[22px]" : "gap-3")}>
                        <Button color="link-gray" size={isFloating ? "md" : "lg"} href="/pricing">
                            Pricing
                        </Button>
                        <Button color="link-gray" size={isFloating ? "md" : "lg"}>
                            Log in
                        </Button>
                    </div>

                    {/* Mobile menu trigger */}
                    <AriaDialogTrigger>
                        <AriaButton
                            aria-label="Toggle navigation menu"
                            className={({ isFocusVisible, isHovered }) =>
                                cx(
                                    "group ml-auto cursor-pointer rounded-lg p-2 md:hidden",
                                    isHovered && "bg-primary_hover",
                                    isFocusVisible && "outline-2 outline-offset-2 outline-focus-ring",
                                )
                            }
                        >
                            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    className="hidden text-secondary group-aria-expanded:block"
                                    d="M18 6L6 18M6 6L18 18"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    className="text-secondary group-aria-expanded:hidden"
                                    d="M3 12H21M3 6H21M3 18H21"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </AriaButton>
                        <AriaPopover
                            triggerRef={headerRef}
                            className="h-calc(100%-72px) scrollbar-hide w-full overflow-y-auto shadow-lg md:hidden"
                            offset={0}
                            crossOffset={20}
                            containerPadding={0}
                            placement="bottom left"
                        >
                            <AriaDialog className="outline-hidden">
                                <div className="w-full bg-primary shadow-lg">
                                    <MobileMenu />
                                </div>
                            </AriaDialog>
                        </AriaPopover>
                    </AriaDialogTrigger>
                </div>
            </div>
        </header>
    );
};
