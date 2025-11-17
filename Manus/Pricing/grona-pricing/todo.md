# Project TODO

## Hero Section
- [x] Implement hero section with title and subtitle
- [x] Add billing toggle (Monthly/Annual with "Save 2 months" indicator)
- [x] Implement price animation on toggle

## Pricing Cards
- [x] Create pricing card component with consistent structure
- [x] Implement 4 pricing tiers: Starter, Growth (highlighted), Scale, Enterprise
- [x] Add "Most Popular" tag to Growth plan
- [x] Organize features into 4 groups per card: Optimization Power, AI Agents & Generators, Personalization Level, Integrations + Support
- [x] Implement plan-specific CTAs with correct routes
- [x] Add subtle scale effect (1.03) to Growth card
- [x] Add card shadows and visual hierarchy

## AI Credits Tooltip
- [x] Create tooltip component for AI Credits
- [x] Add "?" icon next to AI Credits
- [x] Implement hover functionality with explanation text
- [x] Include usage example in tooltip

## Autonomous Optimization Loop Diagram
- [x] Create 4-step horizontal diagram section
- [x] Add icons for each step: Detect, Generate, Test, Improve
- [x] Add animated arrows or pulse between steps
- [x] Style with Tailwind utilities

## Social Proof Section
- [x] Create social proof section with title
- [x] Add 4-6 placeholder logos with greyed-out styling
- [x] Implement hover fade effect
- [x] Make logos replaceable via props

## Comparison Table
- [x] Create comparison table with 6 categories
- [x] Implement frozen first column
- [x] Highlight Growth column subtly
- [x] Make table responsive
- [x] Organize features by: Optimization Power, AI Agents & Generation, Personalization, Integrations, Safety & Governance, Support

## Styling & Polish
- [x] Configure Grona green colors (#16a34a dark, #22c55e light)
- [x] Set up proper spacing (20-32px)
- [x] Ensure responsive design for all breakpoints
- [x] Add dark mode support if needed
- [x] Test all animations and transitions

## Comparison Table Refinements
- [x] Add visual hierarchy to header row with darker background and semibold font
- [x] Highlight Growth column with subtle border and background tint
- [x] Add icons to category headers (Integrations, Safety & Governance, Support)
- [x] Use brand-colored checkmarks (green for paid plans, grey for Starter)
- [x] Replace × with muted dash (–) for negative items
- [x] Increase vertical spacing in rows (+6-8px)
- [x] Add alternating row backgrounds (zebra pattern)
- [x] Add left-hand category dividers with faint border-top
- [x] Ensure responsiveness is maintained

## Premium Enhancements
- [x] Remove "Trusted by fast-growing ecommerce and SaaS teams" section
- [x] Create ROI/Conversion Uplift Calculator component
- [x] Add calculator fields: monthly visitors, conversion rate, AOV
- [x] Calculate and display: uplift, new conversion rate, monthly/yearly revenue
- [x] Replace hero H1 with "Optimize faster. Grow continuously."
- [x] Update hero supporting line
- [x] Add subtle gradient/vignette behind hero section
- [x] Add abstract AI visual element to hero
- [x] Add hover lift animation to pricing cards
- [x] Add fade-in animations on scroll
- [x] Add credibility statement about rapid test iteration
- [x] Ensure all changes maintain premium, minimalist aesthetic

## Hero Compression & Calculator Redesign
- [x] Compress hero section vertical padding
- [x] Remove subheading, keep only uplift line
- [x] Redesign uplift line with premium styling (pill container, green dot, subtle animation)
- [x] Move calculator below pricing cards (before Optimization Loop)
- [x] Replace input fields with sliders for all calculator inputs
- [x] Add "number of experiments" slider (1-10 range)
- [x] Add mini horizontal bar chart showing current vs projected revenue
- [x] Enhance calculator card design with soft shadow and rounded edges
- [x] Add icons to pricing card feature groups (⚡🤖🎯🔌 as monochrome SVG)
- [x] Add subtle section background variations
- [x] Enhance pricing card hover effects (lift + shadow)
- [x] Add micro-interactions to buttons

## Industry Best Practices Implementation
- [x] Add one-sentence descriptions to each pricing tier
- [x] Enhance annual discount messaging (show percentage)
- [x] Create FAQ component with 8-10 common questions
- [x] Add tooltip component for complex features
- [x] Emphasize "Free Trial" in Starter plan CTA
- [x] Create customer testimonials section with metrics
- [x] Add trust badges section (G2, SOC 2, GDPR)
- [x] Implement sticky headers for comparison table
- [x] Create integrations showcase section
- [x] Update pricing card CTAs to be more action-oriented

## Structured Updates - Final Polish
- [x] Update hero H1 to "Optimize faster with AI."
- [x] Update uplift line styling (smaller, medium weight, muted grey, green dot)
- [x] Remove all "free trial" references from hero
- [x] Add elevation and hover effects to pricing cards
- [x] Add thin-line monochrome icons to pricing card category headers
- [x] Enhance Growth card with green border, tinted background, higher elevation
- [x] Increase price typography size in Growth card by 15-20%
- [x] Implement AI Credits tooltip with exact content specification
- [x] Update FAQ AI Credits answer with new content
- [x] Convert ROI calculator to modal popup
- [x] Add "Estimate Your Potential ROI" button below pricing cards
- [x] Add industry vertical dropdown to calculator modal
- [x] Implement industry-specific uplift percentages
- [x] Add supporting note to calculator
- [x] Move AI Optimization Loop section immediately after pricing cards
- [x] Update integrations list with 13 specified platforms
- [x] Move testimonials section to before final CTA
- [x] Add alternating row stripes to comparison table
- [x] Fill empty comparison table cells with "—" or "Not included"
- [x] Remove all remaining "free trial" references across page

## Final Exact Spacing & Modal Redesign
- [x] Apply exact hero spacing (pt-52px, pb-36px, uplift margins 12px/24px)
- [x] Apply exact uplift line styling (18px, lh-26px, fw-500, color #4B5563)
- [x] Apply exact pricing card spacing and shadows
- [x] Increase Growth card price to 32px font-size)
- [x] Remove G2/SOC2/GDPR trust badges section completely
- [x] Remove testimonials section completely
- [x] Reduce integrations to 8 platforms only
- [x] Add backend-agnostic message below integrations
- [x] Update comparison table with exact cell padding and stripes
- [x] Replace all empty comparison table cells with "—"
- [x] Remove "Number of Experiments" slider from modal
- [x] Update modal width to 440px with exact spacing
- [x] Add subtitle to modal
- [x] Convert Conversion Rate to stepper input
- [x] Convert AOV to stepper input
- [x] Add trust note under Expected Uplift
- [x] Redesign Projected Results as compact card
- [x] Add two-button CTA section to modal
- [x] Add soft value update animation (150ms fade)
- [x] Apply global spacing constants (64px sections, 32px within, 24px cards, 16px grids)

## Final Page-Wide Fixes & Modal Redesign
- [x] Remove green dot before uplift text in hero
- [x] Adjust hero spacing (12px below uplift, 16px below toggle, 24px bottom padding)
- [x] Update FAQ integrations answer to remove Segment/Mixpanel references
- [x] Change Enterprise AI credits from "Custom" to "Unlimited"
- [x] Ensure all empty comparison table cells show "—"
- [x] Apply exact table striping (even rows rgba(0,0,0,0.02))
- [x] Add soft left shading to first column (rgba(0,0,0,0.03))
- [x] Redesign modal with 440px width and 24px padding
- [x] Update modal title and subtitle with new copy
- [x] Add industry subtext "(Select the category that best matches your website)"
- [x] Add monthly visitors subtext "(Unique visitors per month)"
- [x] Reduce all modal spacing (16px sections, 12px inputs, 6px title-subtitle)
- [x] Redesign Projected Results section with new layout
- [x] Remove "Close" button (keep only X)
- [x] Remove current/projected monthly revenue rows
- [x] Simplify to show only monthly/yearly additional revenue
- [x] Add "Breakdown" section with uplift and new conversion rate
- [x] Update final note to shorter version
- [x] Change modal to single "Get Started Free" button
- [x] Apply global polish (20px titles, 14px labels, 12px subtext, button hover effects)
