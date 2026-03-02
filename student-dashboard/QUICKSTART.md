# 🚀 Quick Start Guide

## Installation

The project is already fully set up! All dependencies are installed in `node_modules/`.

## Running the Application

### Development Mode
```bash
cd /Users/sam/Documents/New\ project/dlweek/student-dashboard
npm run dev
```

Then open your browser to `http://localhost:3000`

### Production Build
```bash
npm run build
npm start
```

## What's Included

✅ **Next.js 16** - Latest React framework with App Router  
✅ **TypeScript** - Full type safety enabled  
✅ **Tailwind CSS** - Utility-first CSS framework  
✅ **ESLint** - Code quality and linting  
✅ **Components** - Three main components replicating the design:
  - `GlobalShell` - Header with navigation
  - `Dashboard` - Learning progress and homework section
  - `CoursesOverview` - Courses grid

## Project Features

- 🎨 **Design Replicated**: Exact color scheme and layout from "10 - Student (Desktop)" design
- 📱 **Responsive**: Built with Tailwind's responsive utilities
- 🎯 **Component-based**: Modular, reusable React components
- 🔧 **Configured**: All config files properly set up and tested
- ✨ **Production-ready**: Successfully builds to optimized output

## Key Files

| File | Purpose |
|------|---------|
| `app/page.tsx` | Main page entry point |
| `app/layout.tsx` | Root layout wrapper |
| `components/GlobalShell.tsx` | Header component |
| `components/Dashboard.tsx` | Dashboard content |
| `components/CoursesOverview.tsx` | Courses section |
| `app/globals.css` | Tailwind CSS imports |
| `tailwind.config.ts` | Tailwind configuration (auto-generated) |
| `tsconfig.json` | TypeScript settings |

## Customization

### Add More Courses
Edit `components/CoursesOverview.tsx` to add more course cards.

### Change Colors
Update hex values in components or add to a CSS variables file:
- Replace `#FF6B6B` for coral/red colors
- Replace `#6366F1` for indigo/blue colors
- Replace `#F6F7F8` for card backgrounds

### Add Interactivity
Import hooks in components:
```tsx
'use client';
import { useState } from 'react';

export const YourComponent = () => {
  const [state, setState] = useState(false);
  // ...
};
```

## Common Commands

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Run production server
npm start

# Check TypeScript types
npm run type-check

# Run ESLint
npm run lint

# Run ESLint with fixes
npm run lint -- --fix
```

## Troubleshooting

**Issue**: Port 3000 already in use
```bash
npm run dev -- -p 3001
```

**Issue**: Tailwind not showing styles
- Check that all CSS files are imported in `app/layout.tsx`
- Rebuild with `npm run build`

**Issue**: Components not found
- Verify path aliases in `tsconfig.json`
- Ensure components are exported correctly

## Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs)

---

**Created**: March 3, 2026  
**Project Type**: Next.js App Router with TypeScript & Tailwind CSS
