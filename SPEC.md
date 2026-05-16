# FOCUS REBOOT - Landing Page Specification

## Project Overview
- **Project Name:** FOCUS REBOOT Landing Page
- **Type:** Premium Digital Product Landing Page (Single HTML)
- **Core Functionality:** High-converting sales page for "THE 7-DAY DOPAMINE DETOX CHALLENGE" ebook
- **Target Users:** Gen Z, students, creators, entrepreneurs, remote workers (ages 16-40)

---

## UI/UX Specification

### Layout Structure
- **Container:** Max-width 1200px, centered
- **Sections:** 12 distinct sections with smooth scroll navigation
- **Responsive Breakpoints:**
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

### Visual Design

#### Color Palette
- **Background:** #FAFAFA (off-white)
- **Primary Background:** #FFFFFF
- **Warm Beige:** #F5F0EB
- **Soft Gray:** #E8E6E3
- **Muted Sage Green:** #A8B5A0
- **Charcoal Text:** #1A1A1A
- **Secondary Text:** #4A4A4A
- **Muted Text:** #7A7A7A
- **Accent:** #2D3436
- **CTA Button:** #1A1A1A
- **CTA Hover:** #333333
- **Subtle Gradient:** linear-gradient(135deg, #F5F0EB 0%, #E8E6E3 100%)

#### Typography
- **Heading Font:** "Poppins", sans-serif (Bold/SemiBold)
- **Body Font:** "Inter", sans-serif
- **Hero Headline:** 64px desktop / 36px mobile, font-weight 700
- **Section Headings:** 48px desktop / 32px mobile, font-weight 600
- **Subheadings:** 24px desktop / 20px mobile, font-weight 500
- **Body Text:** 18px desktop / 16px mobile, font-weight 400
- **Line Height:** 1.6 for body, 1.2 for headings

#### Spacing System
- **Section Padding:** 120px vertical desktop / 60px mobile
- **Container Padding:** 24px horizontal
- **Element Gap:** 32px standard, 16px compact
- **Card Padding:** 32px
- **Premium Whitespace:** Use generous spacing between elements

#### Visual Effects
- **Shadows:** 0 4px 24px rgba(0,0,0,0.06) (subtle)
- **Card Shadows:** 0 8px 32px rgba(0,0,0,0.08)
- **Glow Effects:** 0 0 60px rgba(168,181,160,0.2)
- **Border Radius:** 16px for cards, 12px for buttons, 8px for small elements
- **Glassmorphism:** backdrop-filter: blur(10px) on floating elements
- **Gradients:** Subtle mesh gradients for backgrounds

---

### Components

#### Navigation
- Sticky header with logo, nav links, CTA button
- Transparent to solid on scroll
- Mobile hamburger menu

#### Hero Section
- Full viewport height
- Headline with staggered animation
- Subheadline with fade-in
- Primary CTA button with hover glow
- 3D ebook mockup placeholder (CSS-generated)
- Floating decorative elements with parallax
- Soft gradient background with subtle texture

#### Social Proof
- Review cards with star ratings
- Horizontal scroll on mobile
- Subtle shadow and rounded corners
- Real testimonial quotes

#### Problem Section
- Split layout: icon cards left, text right
- Emotional headline
- Pain point cards with icons
- Subtle hover lift effect

#### "Why This Happens"
- Educational infographic style
- Visual diagram representation
- Numbered steps with connecting lines

#### What's Inside
- Grid of premium feature cards
- Icon + title + description per card
- Realistic ebook mockup display

#### 7-Day Challenge Timeline
- Vertical timeline with day cards
- Each day: icon, title, description
- Alternating left/right on desktop
- Clean visual connector

#### Benefits Section
- Before/After comparison
- Left: "Before" with negative emotions (muted)
- Right: "After" with positive emotions (vibrant)
- Transformation narrative

#### Bonus Section
- Horizontal card carousel
- Printable mockup representations
- "Included Free" badges

#### About Brand
- Brand story paragraph
- Mission statement
- Premium brand mark/logo

#### FAQ Section
- Accordion style
- Smooth expand/collapse
- Plus/minus icons
- 6 questions with answers

#### Final CTA
- Full-width emotional section
- Impact headline
- Single primary CTA
- Atmospheric background

#### Footer
- Logo + tagline
- Social links (icons)
- Copyright
- Secondary CTA

---

## Functionality Specification

### Core Features
- Smooth scroll navigation between sections
- Sticky header with scroll-aware styling
- FAQ accordion (expand/collapse)
- Mobile menu toggle
- Scroll-triggered fade-in animations
- Hover effects on interactive elements

### User Interactions
- Click navigation links → smooth scroll to section
- Click CTA → scroll to purchase section
- Click FAQ question → toggle answer visibility
- Hover cards → subtle lift animation
- Hover buttons → color shift + glow

### Animations
- Hero elements: staggered fade-in on load (0.1s delays)
- Section headings: fade-up on scroll into view
- Cards: fade-up with stagger
- Floating elements: gentle float animation (3s loop)
- FAQ: smooth height transition

### Edge Cases
- Handle narrow viewport (< 320px)
- Graceful degradation if fonts fail to load
- Fallback for backdrop-filter (glassmorphism)

---

## Acceptance Criteria

1. Page loads without errors
2. All 12 sections render correctly
3. Navigation scrolls smoothly to sections
4. FAQ accordion works correctly
5. Mobile menu functions properly
6. All hover states visible
7. Animations trigger on scroll
8. Responsive at all breakpoints
9. Typography hierarchy is clear
10. CTA buttons are prominent
11. Page feels premium and calming
12. Color palette is consistent throughout

---

## Technical Implementation
- Single HTML file with embedded CSS and minimal JS
- Google Fonts: Poppins, Inter
- CSS custom properties for theming
- Intersection Observer for scroll animations
- No external dependencies except fonts
- CSS-only animations where possible