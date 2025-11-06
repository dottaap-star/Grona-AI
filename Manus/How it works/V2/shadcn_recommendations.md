# shadcn/ui Component Recommendations for Grona Website

## Complete Component List from shadcn/ui

### Layout & Structure
- **Accordion** - Collapsible content sections
- **Aspect Ratio** - Maintain aspect ratios for media
- **Card** - Container for content grouping
- **Collapsible** - Show/hide content sections
- **Resizable** - Resizable panel layouts
- **Scroll Area** - Custom scrollable areas
- **Separator** - Visual dividers
- **Tabs** - Tabbed content navigation

### Navigation
- **Breadcrumb** - Navigation hierarchy
- **Navigation Menu** - Complex navigation menus
- **Menubar** - Application menu bar
- **Pagination** - Page navigation controls
- **Sidebar** - Side navigation panel

### Interactive Elements
- **Button** - Primary action buttons (already using)
- **Button Group** - Grouped button actions
- **Toggle** - Binary state switches
- **Toggle Group** - Multiple toggle options
- **Switch** - On/off toggle switch
- **Slider** - Range input slider

### Overlays & Modals
- **Alert Dialog** - Confirmation dialogs
- **Dialog** - Modal dialogs
- **Drawer** - Side panel drawer
- **Sheet** - Slide-out panel
- **Popover** - Floating content panels
- **Hover Card** - Content on hover
- **Tooltip** - Contextual hints (already using)

### Feedback & Status
- **Alert** - Notification messages
- **Badge** - Status indicators
- **Progress** - Progress bars
- **Skeleton** - Loading placeholders
- **Spinner** - Loading spinners
- **Toast/Sonner** - Notification toasts (already using)

### Data Display
- **Avatar** - User profile images
- **Table** - Data tables
- **Data Table** - Advanced sortable tables
- **Chart** - Data visualization
- **Empty** - Empty state placeholders
- **Typography** - Text styling system

### Form Elements
- **Form** - Form management
- **Input** - Text inputs
- **Input Group** - Grouped inputs
- **Input OTP** - OTP code inputs
- **Textarea** - Multi-line text
- **Select/Native Select** - Dropdown selects
- **Combobox** - Searchable select
- **Checkbox** - Checkboxes
- **Radio Group** - Radio buttons
- **Calendar** - Date selection
- **Date Picker** - Date input
- **Command** - Command palette
- **Dropdown Menu** - Context menus
- **Context Menu** - Right-click menus
- **Label** - Form labels
- **Field** - Form field wrapper
- **Kbd** - Keyboard shortcuts display

### Media
- **Carousel** - Image/content carousel

---

## HIGH PRIORITY RECOMMENDATIONS for Grona

### 1. **Accordion** ⭐⭐⭐⭐⭐
**Use Case**: FAQ section, feature details, pricing tiers
**Where to Add**: 
- Add an FAQ section at the bottom of the page
- Use for "How AI Agents Work" detailed explanations
- Pricing comparison details

**Benefits**:
- Reduces page length while maintaining information density
- Improves scanability
- Great for mobile experience

---

### 2. **Tabs** ⭐⭐⭐⭐⭐
**Use Case**: Switch between different views or categories
**Where to Add**:
- AI Agents section - tab between different agent types
- Comparison section - tab between "vs Traditional Tools", "vs ChatGPT", "vs Competitors"
- Use cases - tab between different industries (E-commerce, SaaS, B2B)

**Benefits**:
- Reduces scrolling
- Organizes related content
- Interactive engagement

---

### 3. **Hover Card** ⭐⭐⭐⭐
**Use Case**: Additional information on hover without cluttering
**Where to Add**:
- Stats section - hover over metrics to see detailed breakdown
- AI Agent cards - hover to see more capabilities
- Feature icons - hover for detailed explanations

**Benefits**:
- Progressive disclosure
- Keeps UI clean
- Adds depth without complexity

---

### 4. **Badge** ⭐⭐⭐⭐
**Use Case**: Status indicators, labels, highlights
**Where to Add**:
- "NEW" badge on latest features
- "POPULAR" on pricing tiers
- "BETA" on experimental features
- Agent status indicators (Active, Learning, Optimizing)

**Benefits**:
- Visual emphasis
- Quick status communication
- Draws attention to important items

---

### 5. **Dialog/Sheet** ⭐⭐⭐⭐
**Use Case**: Detailed information without page navigation
**Where to Add**:
- "Watch Demo" button → open video in dialog
- "Learn More" about each AI agent → detailed sheet
- Case study details
- Pricing calculator

**Benefits**:
- Keeps users on page
- Focused content presentation
- Better conversion flow

---

### 6. **Carousel** ⭐⭐⭐⭐
**Use Case**: Showcase multiple items in limited space
**Where to Add**:
- Customer testimonials
- Case studies
- Before/After results
- Feature highlights
- Partner logos

**Benefits**:
- Space-efficient
- Engaging interaction
- Social proof presentation

---

### 7. **Skeleton** ⭐⭐⭐⭐
**Use Case**: Loading states for dynamic content
**Where to Add**:
- Stats that load from API
- Testimonials section
- Any async data

**Benefits**:
- Professional loading experience
- Reduces perceived wait time
- Modern UX pattern

---

### 8. **Progress** ⭐⭐⭐
**Use Case**: Show completion or status
**Where to Add**:
- Onboarding progress indicator
- "Setup takes 5 minutes" → show visual progress
- Test completion status
- Feature adoption meter

**Benefits**:
- Visual feedback
- Motivates completion
- Clear status communication

---

### 9. **Alert** ⭐⭐⭐
**Use Case**: Important announcements or notices
**Where to Add**:
- Top of page: "🎉 New: AI-powered heatmaps now available"
- Limited time offers
- Important updates

**Benefits**:
- Grabs attention
- Communicates urgency
- Flexible styling

---

### 10. **Avatar** ⭐⭐⭐
**Use Case**: User representation, testimonials
**Where to Add**:
- Testimonials section with customer photos
- Team section (if added)
- "2,500+ teams" → show actual company logos/avatars

**Benefits**:
- Humanizes content
- Social proof
- Professional appearance

---

## MEDIUM PRIORITY RECOMMENDATIONS

### 11. **Tooltip** ⭐⭐⭐
**Use Case**: Contextual help text
**Where to Add**: Technical terms, feature icons, metrics
**Already Using**: Yes, but can expand usage

### 12. **Command** ⭐⭐⭐
**Use Case**: Quick navigation/search
**Where to Add**: Search functionality, quick actions
**Benefits**: Power user feature, modern UX

### 13. **Separator** ⭐⭐⭐
**Use Case**: Visual section dividers
**Where to Add**: Between major sections
**Benefits**: Improves visual hierarchy

### 14. **Drawer** ⭐⭐
**Use Case**: Mobile navigation menu
**Where to Add**: Replace hamburger menu on mobile
**Benefits**: Better mobile UX

---

## LOW PRIORITY (Nice to Have)

### 15. **Calendar/Date Picker**
**Use Case**: Schedule demo functionality
**Where to Add**: "Schedule Demo" button

### 16. **Table/Data Table**
**Use Case**: Feature comparison, pricing details
**Where to Add**: Detailed feature comparison section

### 17. **Switch**
**Use Case**: Toggle between options
**Where to Add**: Pricing toggle (Monthly/Annual)

### 18. **Breadcrumb**
**Use Case**: Navigation on multi-page sites
**Where to Add**: Not needed for single-page design

---

## IMPLEMENTATION PRIORITY

### Phase 1 (Immediate Impact):
1. **Accordion** - FAQ section
2. **Badge** - Feature highlights, status indicators
3. **Carousel** - Testimonials/case studies
4. **Dialog** - Demo video, detailed content

### Phase 2 (Enhanced Interactivity):
5. **Tabs** - Organize comparison section
6. **Hover Card** - Additional info on stats/features
7. **Alert** - Announcements banner
8. **Skeleton** - Loading states

### Phase 3 (Polish):
9. **Progress** - Onboarding indicators
10. **Avatar** - Testimonials with photos
11. **Separator** - Visual improvements
12. **Tooltip** - Expanded usage

---

## SPECIFIC IMPLEMENTATION IDEAS

### 1. FAQ Section with Accordion
```
Q: How long does setup take?
Q: Do I need technical skills?
Q: What analytics platforms do you integrate with?
Q: How much does it cost?
Q: Can I cancel anytime?
```

### 2. Testimonials Carousel
- Rotating customer quotes
- Company logos
- Results achieved
- Auto-play with manual controls

### 3. Comparison Tabs
- Tab 1: vs Traditional Tools
- Tab 2: vs ChatGPT
- Tab 3: vs Competitors (VWO, Optimizely, etc.)

### 4. Stats with Hover Cards
- Hover over "47% Conversion Lift" → see breakdown by industry
- Hover over "2,500+ teams" → see company examples
- Hover over "5min Setup" → see step-by-step preview

### 5. Feature Badges
- "NEW" on latest features
- "POPULAR" on most-used features
- "BETA" on experimental features
- "PRO" on premium features

### 6. Demo Dialog
- Click "Watch Demo" → open video dialog
- Embedded video player
- Transcript option
- CTA at the end

### 7. Case Study Sheets
- Click "View Case Study" → slide-out sheet
- Full case study details
- Metrics, quotes, screenshots
- Related case studies

---

## DESIGN CONSISTENCY NOTES

- All components already styled with Grona brand colors
- shadcn/ui uses Tailwind CSS (already in project)
- Components are accessible by default
- Easy to customize with existing design tokens
- Maintains current aesthetic while adding functionality

---

## COMPONENTS TO AVOID

- **Form elements** (Input, Select, etc.) - Not needed for marketing site
- **Command palette** - Overkill for single page
- **Sidebar** - Not needed for marketing layout
- **Resizable** - No use case
- **Context Menu** - Not needed
- **Input OTP** - Not applicable
