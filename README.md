# elbwalker Landing Page

Company landing page for [www.elbwalker.com](https://www.elbwalker.com)

Built with Next.js 15, TypeScript, and Tailwind CSS.

## Tech Stack

- **Next.js 15.5.4** - App Router
- **React 19** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 3.4** - Styling (stable version, no experimental v4)
- **Vercel** - Deployment platform

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Project Structure

```
/app
  /company      - About page
  /services     - Services page
  layout.tsx    - Root layout with header/footer
  page.tsx      - Home page
  globals.css   - Global styles

/components
  header.tsx    - Site header with navigation
  footer.tsx    - Site footer

/public         - Static assets

tailwind.config.ts  - Tailwind configuration with elbwalker colors
vercel.json         - Vercel deployment config
```

## Brand Colors

The site uses the elbwalker brand colors matching the main website:

- **Primary:** `#01b5e2` (elbwalker cyan)
- **Background:** `#020617` (slate-950)
- **Text:** `#e2e8f0` (slate-100)

Full color palette available in `tailwind.config.ts`.

## Deployment

This site is configured for Vercel deployment:

```bash
# Deploy to Vercel
vercel
```

The `vercel.json` configuration ensures standard Next.js deployment without custom build flags.

## Notes

- Uses standard `npm run build` (no environment variables or workarounds needed)
- All pages are statically generated for optimal performance
- Responsive design with mobile-first approach
- Links to main walkerOS documentation at www.walkeros.io
