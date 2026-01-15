import BlogPostCROSoftware from "@/app/blog-post/blog-post-cro-software";

export const metadata = {
    title: "A/B Testing & Personalization: The Must-Have CRO Software for Marketers | Grona",
    description:
        "Discover the best CRO software for A/B testing and personalization. Compare top tools like Grona, Optimizely, Hotjar, and more to boost your conversion rates.",
    keywords: [
        "CRO software",
        "A/B testing tools",
        "personalization software",
        "conversion rate optimization",
        "marketing tools",
        "website optimization",
        "conversion optimization software",
        "A/B testing for marketers",
        "personalization tools",
    ],
    openGraph: {
        title: "A/B Testing & Personalization: The Must-Have CRO Software for Marketers",
        description: "Compare the best CRO tools for testing and personalization. Learn how to boost conversions with proven software solutions.",
        type: "article",
        publishedTime: "2026-01-14T00:00:00.000Z",
        authors: ["Grona Team"],
        images: [
            {
                url: "/assets/images/blogs/feature-cro.png",
                width: 1200,
                height: 630,
                alt: "CRO Software for Marketers",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "A/B Testing & Personalization: The Must-Have CRO Software for Marketers",
        description: "Compare the best CRO tools for testing and personalization. Learn how to boost conversions with proven software solutions.",
        images: ["/assets/images/blogs/feature-cro.png"],
    },
};

export default function Page() {
    return <BlogPostCROSoftware />;
}
