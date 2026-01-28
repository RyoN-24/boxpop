# LEO PRIVÉ | High-End E-commerce

A premium, silent-luxury perfume landing site built with Next.js 14+ and Tailwind CSS.

## Features
- **Silent Luxury Aesthetic**: Minimal, dark-themed, gold accents.
- **Product Showcase**: Grid of 6 signature perfumes with detailed modal views.
- **WhatsApp Integration**: Direct purchase inquiries via WhatsApp API.
- **Responsive**: Fully optimized for mobile and desktop.
- **Animations**: Subtle, premium feel animations using Framer Motion.

## Tech Stack
- [Next.js](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/) (Styling)
- [Framer Motion](https://www.framer.com/motion/) (Animations)
- [Lucide React](https://lucide.dev/) (Icons)

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

3. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## Customization
- **Phone Number**: Go to `src/components/WhatsAppButton.tsx`, `Hero.tsx`, and `CallToAction.tsx` (and `ProductModal.tsx`) and replace standard placeholder numbers with your actual WhatsApp business number.
- **Products**: Edit `src/components/ProductGrid.tsx` to update the product catalog data.

## Deployment (Vercel)
1. Push to GitHub.
2. Import project in Vercel.
3. Deploy. (No special configuration needed).
