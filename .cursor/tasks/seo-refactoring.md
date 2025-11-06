# SEO Refactoring Task Preset

## Overview
This task preset guides the refactoring of HTML pages to meet SEO best practices. Use this when optimizing existing pages or creating new pages for better search engine visibility.

## Reference
See `Standard Tasks/seo-checklist.md` for the complete checklist.

## Task Steps

### 1. Metadata Review & Optimization
- **Title Tag**: Ensure it's unique, 50-60 characters, includes primary keyword
- **Meta Description**: 120-155 characters, compelling, includes primary keyword
- **H1 Tag**: One H1 per page, matches main intent, supports title tag
- **Heading Hierarchy**: Use H2/H3 to structure content logically

### 2. Content Optimization
- **Primary Keyword**: Place naturally in first 100 words
- **Image Alt Text**: Add descriptive alt attributes to all images
- **Internal Linking**: Add relevant internal links to related pages
- **Call-to-Action**: Ensure clear, prominent CTA is present

### 3. Technical SEO
- **Image Optimization**: 
  - Convert images to `.webp` format where possible
  - Add responsive image sizes using `srcset`
  - Implement lazy loading for non-critical images
- **Performance**:
  - Add `rel=preload` for LCP (Largest Contentful Paint) images
  - Preload hero fonts if custom fonts are used
- **Schema Markup**: 
  - Add appropriate schema (Organization, FAQ, Product, or Article)
  - Validate schema using Google's Rich Results Test

### 4. Post-Publish Verification
- Add page to sitemap.xml
- Run PageSpeed Insights (Mobile)
- Check indexing status in Google Search Console

## Implementation Guidelines

### For Each HTML Page:
1. Review current metadata (title, meta description, H1)
2. Optimize content structure and keyword placement
3. Audit and optimize all images
4. Add/update schema markup
5. Test page performance
6. Verify accessibility (alt text, semantic HTML)

### Common Patterns in This Codebase:
- HTML pages are in root directory: `index.html`, `how_it_works.html`, `features.html`, etc.
- Shared components in `shared/` directory
- Images stored in `assets/` directory
- Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<footer>`)

## Success Criteria
- All checklist items from `Standard Tasks/seo-checklist.md` are completed
- Page passes PageSpeed Insights (Mobile score > 80)
- Schema markup validates without errors
- All images have descriptive alt text
- Internal links are contextually relevant

