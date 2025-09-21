# Personal Portfolio Design Guidelines

## Design Approach
**System-Based Approach**: Using modern minimalist design principles with clean typography and subtle animations for a professional developer portfolio.

## Core Design Elements

### Color Palette
**Light Mode:**
- Primary: 15 8% 15% (charcoal)
- Text: 0 0% 10% (near black)
- Background: 0 0% 99% (off-white)
- Accent: 220 90% 56% (professional blue)
- Surface: 0 0% 96% (light gray)

**Dark Mode:**
- Primary: 220 90% 70% (lighter blue)
- Text: 0 0% 95% (near white)
- Background: 220 13% 9% (dark charcoal)
- Accent: 220 90% 56% (professional blue)
- Surface: 220 13% 14% (dark surface)

### Typography
- **Primary Font**: Inter (via Google Fonts CDN)
- **Headings**: 600-700 weight, responsive sizing (2.5rem-4rem for h1)
- **Body**: 400 weight, 1.125rem base size, 1.6 line height
- **Code/Tech**: JetBrains Mono for tech stack labels

### Layout System
**Spacing Units**: Consistent use of 4, 8, 16, 24, 32px spacing
- Sections: 32px vertical spacing
- Components: 16px internal padding
- Cards: 24px padding with 8px margins

### Component Library

**Navigation:**
- Fixed header with blur backdrop
- Clean typography links with underline hover animations
- Mobile hamburger menu with smooth slide transitions

**Hero Section:**
- Large typography introduction
- Minimal text with strong hierarchy
- No background image - clean gradient overlay (220 90% 56% to 260 90% 70%)

**Project Cards:**
- Clean white/dark surface cards
- Subtle shadow with hover elevation
- Tech stack as small pills/badges
- Fade-up animation on scroll intersection

**Skills Section:**
- Grid layout of skill categories
- Icon integration via Heroicons CDN
- Clean typography without ratings

### Animations
**Minimal Animation Strategy:**
- Fade-up entrance animations (300ms ease-out)
- Smooth scroll behavior for navigation
- Subtle hover states (transform: translateY(-2px))
- Loading states with opacity transitions

### Responsive Behavior
- Mobile-first approach
- Single column on mobile, multi-column on desktop
- Collapsible navigation on mobile
- Touch-friendly button sizing (44px minimum)

### Images
**No Hero Images**: Clean typography-focused hero with gradient background
**Project Placeholders**: Use colored rectangles or simple geometric shapes as project previews
**Icons Only**: Tech stack icons via Heroicons, no photography needed

This design emphasizes professionalism, readability, and subtle sophistication suitable for a developer portfolio while maintaining excellent mobile usability.