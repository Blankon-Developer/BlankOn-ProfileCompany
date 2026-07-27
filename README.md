
# Blankon — Profile Company

Website profil perusahaan Blankon yang dibangun menggunakan **Next.js** (App Router), **React 18**, dan **Tailwind CSS v4**.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 18
- **Styling**: Tailwind CSS v4 + shadcn/ui components
- **Fonts**: Space Grotesk, Plus Jakarta Sans, JetBrains Mono
- **Icons**: Lucide React

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout (metadata, fonts, global styles)
│   ├── page.tsx            # Landing page
│   └── globals.css         # Global styles + Tailwind + theme
├── components/
│   ├── sections/           # Page-level section components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── MarqueeBand.tsx
│   │   ├── Offers.tsx
│   │   ├── Services.tsx
│   │   ├── Process.tsx
│   │   ├── StatsBand.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   └── ui/                 # shadcn/ui components
└── lib/
    └── utils.ts            # Shared utilities & constants
```

## Original Design

Berdasarkan desain dari Figma: [Landing page for Blankon](https://www.figma.com/design/ERJxYsbF3kBvx8jxML61P5/Landing-page-for-Blankon)