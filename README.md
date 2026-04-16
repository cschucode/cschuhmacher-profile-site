# Chris Schuhmacher - Personal Profile Site

A minimal, clean one-page portfolio website built with Next.js and deployed on Vercel.

**Live site:** [chrisschuhmacher.com](https://chrisschuhmacher.com)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Deployment:** Vercel
- **Language:** TypeScript

## Features

- **Dark mode** — Toggle between light/dark themes, respects system preference
- **Scroll animations** — Sections fade in as you scroll
- **Typewriter effect** — Animated role titles in hero section
- **Sticky navigation** — Header appears on scroll with section links
- **Responsive design** — Looks great on mobile and desktop
- **Custom favicon** — CS initials branding

## Sections

- **Hero** — Name, animated title, headshot, and CTA buttons
- **About** — Bio with skills sidebar
- **Experience** — Work history with timeline and tech tags
- **Contact** — Email and social links (GitHub, LinkedIn)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/cschucode/cschuhmacher-profile-site.git
   cd cschuhmacher-profile-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main profile page
│   ├── globals.css      # Global styles + Tailwind
│   └── icon.svg         # Favicon
├── components/
│   ├── Header.tsx       # Sticky nav + dark mode toggle
│   ├── Hero.tsx         # Hero with typewriter effect
│   ├── About.tsx        # About section with skills
│   ├── Experience.tsx   # Work history timeline
│   ├── Contact.tsx      # Contact info and social links
│   ├── TypeWriter.tsx   # Typewriter animation component
│   └── ScrollReveal.tsx # Scroll animation wrapper
├── public/
│   └── headshot.jpg     # Profile photo
└── package.json
```

## Customization

Edit the content in each component file under `components/`:
- Name and roles in `Hero.tsx`
- Bio and skills in `About.tsx`
- Work experience in `Experience.tsx`
- Email and social links in `Contact.tsx`

## Deployment to Vercel

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel auto-detects Next.js — click **Deploy**
4. Add your custom domain in **Settings → Domains**

## Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Future Enhancements

Ideas for future iterations:

- [ ] **Blog section** — Add MDX-powered blog posts
- [ ] **Projects showcase** — Highlight key projects with screenshots
- [ ] **Download resume** — PDF download button
- [ ] **Analytics** — Add Vercel Analytics or Plausible
- [ ] **Contact form** — Serverless form submission
- [ ] **Testimonials** — Quotes from colleagues
- [ ] **Open Graph images** — Auto-generated social preview images
- [ ] **Reading list** — Books/articles recommendations
- [ ] **RSS feed** — For blog content
- [ ] **i18n** — Multi-language support

## License

MIT
