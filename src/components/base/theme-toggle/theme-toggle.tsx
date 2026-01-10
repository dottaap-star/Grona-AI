"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";

// Sun icon for light mode
const SunIcon = ({ className }: { className?: string }) => (
    <svg
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
    </svg>
);

// Moon icon for dark mode
const MoonIcon = ({ className }: { className?: string }) => (
    <svg
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
    </svg>
);

interface ThemeToggleProps {
    className?: string;
    size?: "sm" | "md" | "lg" | "xl";
}

export function ThemeToggle({ className, size = "md" }: ThemeToggleProps) {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <Button
                color="tertiary"
                size={size}
                className={cx("size-10 p-0", className)}
                isDisabled
                aria-label="Toggle theme"
            >
                <div className="size-5" />
            </Button>
        );
    }

    const isDark = resolvedTheme === "dark" || theme === "dark";

    const toggleTheme = () => {
        setTheme(isDark ? "light" : "dark");
    };

    return (
        <Button
            color="tertiary"
            size={size}
            className={cx("size-10 p-0", className)}
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
            <div className="relative size-5">
                <SunIcon
                    className={cx(
                        "absolute size-5 transition-all duration-300",
                        isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100",
                    )}
                />
                <MoonIcon
                    className={cx(
                        "absolute size-5 transition-all duration-300",
                        isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0",
                    )}
                />
            </div>
        </Button>
    );
}

