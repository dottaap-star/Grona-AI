# Grona — Product Understanding (Functions + Full User Flow)

*(Source: Demo videos pt 1–3; UI-visible behavior. Audio not transcribed.)*

## 0) One-line definition

**Grona is a chat-first CRO assistant that analyzes a website, proposes experiment objectives and variations, generates deployable variations, lets you preview them against a real site, and provides an installation/verification path to activate the campaign.**

---

## 1) Core mental model

Grona is organized around a **Campaign Lifecycle**:

1. **Prompt** (tell Grona what you want)
2. **Analyze** (Grona gathers site data and produces structured insight)
3. **Objective** (choose what success looks like)
4. **Suggestions** (data-driven experiment ideas tied to metrics + concrete element changes)
5. **Variations** (Grona turns suggestions into actual page modifications)
6. **Preview** (toggle Control vs each Variation and inspect changes on the live page)
7. **Deploy** (install script + antiflicker, verify, activate)

In the demo UI, these appear as:

* Left panel: **“CRO Assistant”** with steps **Prompt → Preview → Deploy**
* Right panel: an embedded page preview (example: `svv.ai`) with tabs for **Control + variations**
* Top right: campaign state and control: **Inactive** → **Activate**

---

## 2) Primary User Journey (End-to-end)

### Step 1 — Create / Open a campaign (“Design your campaign”)

**Screen title:** `Design your campaign`
**Left:** CRO Assistant
**Right:** embedded website preview / browser-like container

**What user does**

* Starts with a conversational prompt (free-form text).

**Visible example prompt**

* “Let’s get started with the business analysis of my website.”

**What Grona does**

* Interprets intent + outlines a plan.
* Runs an analysis tool (visible as progress items + tool label).

**Visible tool / module**

* `Business Analysis`

  * “Starting Business Analysis…”

**Visible output format (structured)**

* **Nature of Business**
* **Target Audience**
* **Current Strategy**
* **Products/Services**
* **Tone**
* Followed by a brief summary.

> ✅ Key insight: Grona doesn’t answer like generic chat. It answers in **CRO-ready structure** (business model, audience, strategy), meant to inform experiments.

---

### Step 2 — Analyze page structure + conversion elements

**What user does**

* Asks Grona to examine layout, structure, and conversion components.

**Visible prompt**

* “I want to analyze the page structure, layout, and conversion elements to understand …”

**What Grona does (visible in the “Thought / Plan” block)**

* Declares intent: examine structure + conversion components.
* Declares a plan: use a tool to extract & analyze page components.

**Visible tool**

* `website elements` tool (wording visible in the plan)

**Output (implied / partially visible)**

* A breakdown of the page’s components: CTAs, forms, navigation, content blocks
* A view of design patterns and conversion elements that can be optimized

---

### Step 3 — Generate campaign objectives

**What user does**

* Asks: what objectives can be achieved by optimizing the page?

**Visible prompt**

* “what could be some of the objective i can achieve by optimizing the page”

**What Grona does**

* Creates campaign objectives (visible progress section)

**Visible module**

* `Campaign Objectives`

  * “Starting Campaign Objectives”
  * “Generating 2 objectives”

**Outcome**

* A set of measurable objectives you can choose from (exact objective text not fully visible on-frame).

---

### Step 4 — Get experiment suggestions (the heart of CRO guidance)

This is where Grona transitions from “analysis” to “experimentation.”

**Visible UI heading**

* `Experiment Suggestions`

**What Grona produces for each suggestion**

1. **Suggestion title** (e.g., “Enhance Credibility Signals”)
2. **Reasoning**

   * Why it should work
   * Evidence / best-practice logic
3. **Target Metric** (explicit measurable goal)

   * Example visible: increase a CTA click-through rate by X%
4. **Element Changes** (concrete, implementable)

   * Example visible:

     * **HEADING**: `Founders` → `Visionary Founders`
     * **PARAGRAPH**: rewrite/adjust body copy
     * (More element edits likely follow — not all lines visible)

**Important: suggestions are NOT vague**
They are formatted in a way that can be converted into actual DOM edits:

* “Change this heading text to …”
* “Adjust paragraph copy to …”
* (Potentially CTAs/nav labels/etc.)

---

### Step 5 — Create variations (turn suggestions into real variants)

Once suggestions exist, Grona can generate actual variations.

**Visible action**

* `Create Variations` phase with step-by-step logs

**Visible progress log items**

* “Starting Create Variations”
* “Loading campaign and suggestions”
* “Preparing suggestions”
* “Checking prerequisites and artifacts”
* “Extracting website artifacts now”
* “Gathering website data from [https://svv.ai/”](https://svv.ai/”)
* ✅ “Successfully extracted **54 elements** from website.”
* Creating variations:

  * From “Enhance Credibility Signals” (1/3)
  * From “Strengthen Call-to-Actions” (2/3)
  * From “Emphasize Entrepreneurial Support” (3/3)

**Outcome**

* Variations are created as separate “versions” that can be previewed.

> ✅ Key insight: Grona appears to build a **page element map** (e.g., 54 elements) to reliably apply changes.

---

### Step 6 — Preview: Control vs Variations

After creating variations, the right-side embedded page shows toggle tabs.

**Visible preview tabs**

* `Control`
* `Enhance Credibil…`
* `Strengthen Call-t…`
* (and a third variation loading/available)

**What changes look like**

* The page visually updates:

  * Example visible: the main headline changes from `FOUNDERS BACKING FOUNDERS` to a modified version including `Strategic Partnerships`
  * Navigation labels appear highlighted/modified (green outline in demo UI)
  * This indicates Grona is applying text/UI changes live in the preview for each variant.

**What user does**

* Clicks between tabs to compare Control and variations.

**What Grona provides**

* A quick side-by-side mental model:

  * Control = baseline
  * Variation = proposed improvement tied to the objective/metric

---

### Step 7 — Deploy & Activate

Deployment has two pieces in the demo:

1. **Installation Guide** (script + antiflicker)
2. **Verification / activation path** (campaign remains “Inactive” until installed/verified)

#### 7.1 Installation Guide modal

**Modal title:** `Installation Guide`
**Instruction:** “Copy and paste this code into your website’s HTML `<head>` section.”

**Visible installation bundle includes**

* `<link rel="preconnect" href="https://cdn.grona.ai">`
* `<script src="https://cdn.grona.ai/workspaces/<workspace_id>/antiflicker.js" data-grona-af-bg="#ffffff"></script>`
* `<script src="https://cdn.grona.ai/workspaces/<workspace_id>/main.js" async></script>`

**Controls**

* ✅ `Include Antiflicker` (checkbox)
* `Background` color picker / hex field (default `#ffffff`)
* `Copy All` button

#### 7.2 Platform-specific guides

Clickable tiles:

* Shopify
* WordPress
* Webflow
* WooCommerce
* Wix
* Google Tag Manager

> ✅ Key insight: Grona is set up for “copy/paste install” + guided paths per platform.

#### 7.3 Campaign state + activation

**Visible state:** “Inactive” (top right), with a CTA “Activate”.

**Inferred activation flow (based on UI labels visible behind modal)**

* “Verify Script”
* “Installation Guide”
* “Install and verify the script to activate this campaign”

*(Exact verification mechanism is not shown in the sampled frame — likely pings/handshake/event.)*

---

## 3) Major Product Functions (What Grona *does*)

Below are Grona’s functions as demonstrated on-screen:

### A) Chat-first campaign design

* Single interface to define what you want to achieve
* Grona converts prompts into structured CRO tasks

### B) Business Analysis (foundation)

* Outputs structured summary:

  * nature of business
  * audience segments
  * strategy
  * offerings
  * tone

### C) Website Element Extraction (“artifact extraction”)

* Grona extracts website elements (example: **54 elements**)
* Enables reliable modifications across variants

### D) Campaign Objectives generation

* Produces measurable objectives (example shows 2 objectives generated)

### E) Experiment Suggestions

* Generates data-driven suggestions
* Provides:

  * reasoning
  * target metric
  * specific element-level changes (headings, paragraphs, etc.)

### F) Variation generation

* Converts suggestions into actual variants
* Creates multiple variations (e.g., 3)
* Tracks progress explicitly

### G) Preview & comparison

* Toggleable tabs for Control and each variation
* Shows live changes in embedded preview

### H) Deployment tooling

* Installation snippet
* Antiflicker + background config
* Platform-specific guides
* Verify + Activate campaign workflow

---

## 4) Example End-to-End Flow (Copy/paste narrative)

Here’s a concrete “story” a new user could follow:

1. User opens Grona → “Design your campaign”.
2. User types:

   * “Let’s start with the business analysis of my website.”
3. Grona outputs:

   * Nature of business, audience, current strategy, offerings, tone.
4. User types:

   * “Analyze the page structure, layout, and conversion elements.”
5. Grona runs website elements extraction and summarizes key conversion components.
6. User asks:

   * “What objectives can I achieve by optimizing this page?”
7. Grona generates measurable objectives (e.g., increase ‘Learn more’ CTR).
8. User asks:

   * “Based on this information, what should I change?”
9. Grona outputs Experiment Suggestions like:

   * “Enhance Credibility Signals”
   * Target metric: increase CTA CTR
   * Element changes: heading/paragraph rewrites, CTA emphasis, etc.
10. User clicks “Create variations”.
11. Grona:

* Extracts artifacts (e.g., 54 elements)
* Generates variations (3)

12. User previews:

* Control vs “Enhance Credibility…” vs “Strengthen CTAs…”

13. User installs script:

* copy/paste snippet into `<head>`
* optionally include antiflicker
* chooses background color

14. User verifies script → activates campaign.

---

## 5) UI Concepts & Vocabulary (as seen in demo)

* **Campaign**: a container for objectives, suggestions, variations, deployment
* **CRO Assistant**: the agent/chat panel
* **Prompt / Preview / Deploy**: the main campaign stages
* **Control**: baseline website experience
* **Variation**: modified experience based on a suggestion set
* **Inactive / Activate**: deployment gating state
* **Credits**: usage counter visible in the left panel (e.g., `Credits: 508/1000`)

---

## 6) Open Questions / TBD (not visible on-screen)

Marking explicitly so we don’t hallucinate:

* How traffic/analytics are collected and displayed (a “Traffic” label is visible; full analytics UI not captured).
* How “Verify Script” works (polling? event? handshake?).
* Targeting rules (audience segmentation, URL targeting, device targeting, etc.) are not visible in sampled frames.
* How experiments are randomized (split %, bucketing, persistence) is not shown.
* What exactly “multivariant” implies in your internal terminology (seen behind installation modal).

---

## 7) Suggested additions to this doc (for next iteration)

To make this spec “complete” for engineering + GTM alignment, append:

1. **Targeting model**

   * URL rules, segments, device rules, geo, referrer, etc.
2. **Experiment configuration**

   * traffic allocation, start/stop, goals
3. **Measurement**

   * events, conversions, guardrails
4. **Safety + antiflicker explanation**
5. **Permissions & roles**
6. **Data model**

   * workspace, site, campaign, variation, element map, artifacts

---

## Appendix A — What to tell Cursor (how to use this file)

* Treat this as **canonical product behavior**
* If implementing UI, follow the steps/stages:

  * Prompt → Preview → Deploy
* Ensure installation snippet and antiflicker options match the described behavior
* Use the “Example End-to-End Flow” as the default product demo script

---

*End of file.*
