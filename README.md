# Chris Schuhmacher - Personal Profile Site

A minimal, clean one-page portfolio website built with Next.js and deployed on Vercel.

**Live site:** [chrisschuhmacher.com](https://chrisschuhmacher.com)

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Language:** TypeScript

## Sections

- **Hero** - Name, title, and brief tagline
- **About** - Short bio and background
- **Experience** - Work history and notable roles
- **Contact** - Email and social links (GitHub, LinkedIn)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/cschuhmacher-profile-site.git
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
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main profile page
│   └── globals.css     # Global styles + Tailwind
├── components/
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Experience.tsx  # Experience/work history
│   └── Contact.tsx     # Contact info and social links
├── public/
│   └── (images, resume, etc.)
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## Customization

Edit the content in each component file under `components/` to update:
- Your name and title in `Hero.tsx`
- Bio and background in `About.tsx`
- Work experience in `Experience.tsx`
- Email and social links in `Contact.tsx`

## Deployment to Vercel

### Step 1: Push to GitHub

1. Create a new repository on GitHub
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/cschuhmacher-profile-site.git
   git push -u origin main
   ```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import your `cschuhmacher-profile-site` repository
4. Vercel auto-detects Next.js - click **"Deploy"**
5. Wait for the build to complete

### Step 3: Connect Your Domain

1. In Vercel, go to your project → **Settings** → **Domains**
2. Add `chrisschuhmacher.com`
3. Vercel will show DNS records to configure

### Step 4: Configure DNS

Go to your domain registrar (where you bought chrisschuhmacher.com) and add:

**Option A: Using Vercel DNS (Recommended)**
- Change nameservers to Vercel's nameservers (shown in Vercel dashboard)

**Option B: Using External DNS**
- Add an **A record**: `@` → `76.76.21.21`
- Add a **CNAME record**: `www` → `cname.vercel-dns.com`

DNS propagation can take up to 48 hours, but usually completes within a few minutes.

### Step 5: SSL Certificate

Vercel automatically provisions an SSL certificate once DNS is configured. Your site will be accessible via HTTPS.

## Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## License

MIT
