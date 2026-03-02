# Student Dashboard - Next.js Project

## Project Overview
A complete Next.js 16 project with React, TypeScript, and Tailwind CSS that replicates the "10 - Student (Desktop)" design.

## Project Setup

### Location
```
/Users/sam/Documents/New project/dlweek/student-dashboard/
```

### Key Technologies
- **Framework**: Next.js 16.1.6
- **Language**: TypeScript
- **Styling**: Tailwind CSS (with @tailwindcss/postcss)
- **Runtime**: React 19 with App Router
- **Package Manager**: npm

## Project Structure

```
student-dashboard/
├── app/
│   ├── page.tsx              # Main page component
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global Tailwind styles
│   └── favicon.ico
├── components/
│   ├── GlobalShell.tsx       # Header/Navigation component
│   ├── Dashboard.tsx         # Main dashboard with progress and homework
│   └── CoursesOverview.tsx   # Courses grid section
├── public/                   # Static assets
├── .next/                    # Build output (ignored in git)
├── node_modules/             # Dependencies (ignored in git)
├── package.json              # Project dependencies
├── package-lock.json
├── tsconfig.json             # TypeScript configuration
├── next.config.ts            # Next.js configuration
├── postcss.config.mjs        # PostCSS configuration for Tailwind
├── eslint.config.mjs         # ESLint configuration
├── .gitignore
├── README.md
└── LICENSE
```

## Configuration Files

### TypeScript (tsconfig.json)
- Target: ES2017
- Strict mode enabled
- Path alias: `@/*` maps to root directory
- JSX: react-jsx

### Tailwind CSS (postcss.config.mjs)
- Uses @tailwindcss/postcss for CSS-in-JS
- Integrated with Next.js App Router
- Supports arbitrary color values (e.g., `bg-[#FF6B6B]`)

### Next.js (next.config.ts)
- Optimized for production builds
- Uses Turbopack for fast builds
- App Router enabled

## Component Details

### GlobalShell
Header component featuring:
- Logo (red "S" on coral background)
- Course switcher dropdown
- Search bar for courses
- Notification button

Color scheme matches design tokens:
- Primary: #FF6B6B (coral)
- Background: #F6F7F8 (light gray)
- Text: #1A1A1A (dark)

### Dashboard
Two-column layout with:
- **Left Column**:
  - Learning Progress card (68% completion)
  - Pre-read Next Week card (yellow background)
- **Right Column**:
  - Upcoming Homework section
  - Quick Actions with Sync Courses button

### CoursesOverview
Course grid section with:
- Header with term selector (Spring 2025)
- Two sample course cards:
  - Chemistry 101 (Pinned)
  - Physics Lab (Synced)
- Responsive grid layout

## Design Color Tokens

All colors from the design have been implemented as inline Tailwind classes:

| Token | Value | Usage |
|-------|-------|-------|
| color-accent-coral | #FF6B6B | Logo, progress %, status text |
| color-accent-indigo | #6366F1 | CTA buttons |
| color-accent-green | #22C55E | Synced status |
| color-accent-yellow | #FCD34D | Highlights |
| color-bg-card | #F6F7F8 | Card backgrounds |
| color-bg-highlight | #FFFBEB | Highlight cards |
| color-text-primary | #1A1A1A | Headings, main text |
| color-text-secondary | #6B7280 | Secondary text |
| color-text-tertiary | #9CA3AF | Tertiary text |

## Running the Project

### Development Server
```bash
cd student-dashboard
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build
```bash
npm run build
npm start
```

### Type Checking
```bash
npm run type-check
```

### Linting
```bash
npm run lint
```

## Build Status

✅ **Build Status**: Successfully compiled
- TypeScript compilation: ✓ Passed
- Turbopack build: ✓ Optimized production build
- Static page generation: ✓ 4/4 pages generated

## Next Steps

To further customize the project:

1. **Add More Components**: Create additional feature components as needed
2. **Database Integration**: Add database connection for real homework/course data
3. **Authentication**: Integrate authentication system
4. **Styling**: Extend Tailwind config with custom theme variables
5. **Responsive Design**: Add mobile/tablet breakpoints
6. **Interactive Features**: Add event handlers and state management (React hooks or state library)

## Notes

- All components use the `'use client'` directive for client-side rendering
- The design uses consistent spacing (Tailwind gap/padding classes)
- Border radius values match the design tokens (12px, 16px, 20px, etc.)
- Hover states have been added to interactive elements (buttons)
- The layout is responsive with Tailwind's flexbox utilities

## License

This project is licensed under the MIT License - see LICENSE file for details.
