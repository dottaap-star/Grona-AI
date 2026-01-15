# Navigation Header Implementation Guide

## Overview
This guide ensures consistent navigation across all pages in the Grona application.

## Standard Header Implementation

### Required Import
```typescript
import { Header } from "@/components/marketing/header-navigation/header";
```

### Standard Usage Pattern
All pages should use the **floating header** variant for consistency:

```typescript
export const YourPageComponent = () => {
    return (
        <div className="bg-primary">
            <Header isFloating />
            
            {/* Your page sections */}
        </div>
    );
};
```

## Header Props

### `isFloating` (Required for all pages)
When set to `true`, creates the modern floating navigation bar with:
- ✅ Frosted glass effect (`backdrop-blur-lg`)
- ✅ Semi-transparent background (`bg-primary/80`)
- ✅ Rounded corners on desktop (`md:rounded-2xl`)
- ✅ Elevated shadow effect (`md:shadow-lg`)
- ✅ Hover animation (`md:hover:shadow-xl`)
- ✅ Sticky positioning across entire page (`sticky top-0 z-50`)

### Other Available Props (Optional)
- `isFullWidth`: Makes dropdown menus full width
- `items`: Custom navigation items (defaults to standard menu)
- `className`: Additional CSS classes (rarely needed)

## ✅ Correct Implementation

### Example: Home Page
```typescript
export const HomeScreen = () => {
    return (
        <div className="bg-primary">
            <Header isFloating />
            
            <HeroSection />
            <FeaturesSection />
            <FooterSection />
        </div>
    );
};
```

### Example: Blog Post Page
```typescript
export const BlogPost = () => {
    return (
        <div className="bg-primary">
            <Header isFloating />
            
            <ArticleContent />
            <RelatedArticles />
            <Footer />
        </div>
    );
};
```

## ❌ Common Mistakes to Avoid

### 1. Missing `isFloating` prop
```typescript
// ❌ WRONG - No floating effect
<Header />

// ✅ CORRECT
<Header isFloating />
```

### 2. Header nested inside component
```typescript
// ❌ WRONG - Header stuck inside hero section
const HeroSection = () => {
    return (
        <div>
            <Header isFloating />
            <section>...</section>
        </div>
    );
};

// ✅ CORRECT - Header at top level
const Page = () => {
    return (
        <div className="bg-primary">
            <Header isFloating />
            <HeroSection />
        </div>
    );
};
```

### 3. Using custom className unnecessarily
```typescript
// ❌ WRONG - Overriding default styles
<Header className="bg-secondary" />

// ✅ CORRECT - Use isFloating for consistent styling
<Header isFloating />
```

## Section Z-Index Requirements

All page sections should have proper z-index stacking to ensure the header floats above content:

```typescript
<section className="relative z-0 bg-gradient-to-br ...">
    {/* Section content */}
</section>
```

**Important**: Always add `relative z-0` to sections that have background colors or gradients.

## Pages Currently Using Standard Header

The following pages have been updated to use the standard floating header:

- ✅ Home (`/` - home-screen.tsx)
- ✅ About Us (`/about-us` - about-page-10.tsx)
- ✅ Pricing (`/pricing` - pricing-page-05.tsx)
- ✅ Blog (`/blog` - blog-page-02.tsx)
- ✅ Contact (`/contact` - contact-page-01.tsx)
- ✅ Privacy Policy (`/privacy` - privacy-policy.tsx)
- ✅ Terms & Conditions (`/terms` - terms-and-conditions.tsx)
- ✅ Blog Post: CRO Software (`/blog-post` - blog-post-cro-software.tsx)

## Excluded Directories

The following directories contain example/template files and should **NOT** be updated:
- ❌ `/src/app/00-landing-pages-examples/`
- ❌ `/src/app/01-blog-posts/`

## Creating New Pages

When creating a new page:

1. **Import the Header component**
   ```typescript
   import { Header } from "@/components/marketing/header-navigation/header";
   ```

2. **Add Header at the top level** with `isFloating` prop
   ```typescript
   <Header isFloating />
   ```

3. **Ensure proper z-index** on all sections
   ```typescript
   <section className="relative z-0 ...">
   ```

4. **Wrap everything in a bg-primary container**
   ```typescript
   <div className="bg-primary">
   ```

## Header Component Location

The Header component is located at:
```
src/components/marketing/header-navigation/header.tsx
```

## Logo Implementation

The Header automatically uses the `GronaLogo` component which handles:
- Dark/Light mode switching
- Responsive sizing (favicon on mobile, full logo on desktop)
- Correct logo variants for theme

No additional logo configuration is needed in pages.

## Testing Checklist

When implementing the header on a new page, verify:

- [ ] Header appears at the top of the page
- [ ] Header stays sticky when scrolling
- [ ] Frosted glass effect is visible when content scrolls behind
- [ ] Shadow gives elevation/floating effect
- [ ] Logo switches correctly in dark/light mode
- [ ] Navigation links work correctly
- [ ] Mobile menu opens and closes properly
- [ ] No z-index conflicts with page content

## Questions or Issues?

If you encounter issues with the header implementation, check:
1. Is `isFloating` prop present?
2. Is Header at the top level (not nested in sections)?
3. Do sections have `relative z-0` classes?
4. Is the parent container using `bg-primary`?

---

**Last Updated**: January 2026
**Maintained By**: Grona Development Team
