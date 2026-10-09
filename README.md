# Scroll-Driven Hero Section Animation

This project is a high-quality, smooth scroll-driven hero section built with **Next.js**, **React**, **Tailwind CSS**, and **GSAP**.

## Features
- **Initial Load Animation**: The headline and stats gracefully fade and slide in when the page loads, using GSAP staggering and easing for a premium feel.
- **Scroll-Based Animation**: As you scroll down, a car moves across the screen smoothly, driven strictly by the scroll progress (using GSAP ScrollTrigger's `scrub` functionality).
- **Performant**: Animations exclusively use `transform` (`x`, `y`) and `opacity`/`filter` to avoid expensive layout reflows on scroll.
- **Responsive & Modern**: Styled with Tailwind CSS, ensuring it looks good on any device.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment (GitHub Pages)

To host this Next.js app on GitHub Pages for free:

1. In `next.config.ts`, add the following to enable static exports:
   ```ts
   const nextConfig = {
     output: "export",
     basePath: "/your-repo-name", // Change to your GitHub repository name
   };
   export default nextConfig;
   ```
2. Run `npm run build`. This will generate an `out` directory containing the static HTML/CSS/JS files.
3. Push the contents of the `out` directory to a `gh-pages` branch on your GitHub repository, or set up a GitHub Actions workflow to deploy it automatically.

Alternatively, you can seamlessly deploy it on **Vercel** (the creators of Next.js) or **Netlify** by simply importing your GitHub repository into their dashboard.
