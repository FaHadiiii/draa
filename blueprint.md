# Project Blueprint: Landing Page + CMS + Blog + Merchandise

## Stack

- Frontend: Next.js
- CMS: Payload CMS
- Database: NeonDB PostgreSQL
- ORM: Drizzle
- Styling: Tailwind CSS
- File Storage: Cloudflare R2
- Deployment: Vercel

## Core Features

### 1. Public Landing Page

Sections:

- Hero
- About
- Services / Features
- Featured Articles
- Featured Products / Merchandise
- Testimonials
- FAQ
- Contact / CTA

### 2. CMS Admin Panel

Admin can manage:

- Landing page content
- Blog posts
- Articles
- Product / merchandise catalogue
- Categories
- Media assets
- SEO metadata

### 3. Blog & Articles

Features:

- Blog listing page
- Article detail page
- Category filtering
- Search-ready structure
- SEO-friendly slug
- Featured image
- Rich text content

### 4. Product / Merchandise Catalogue

Phase 1:

- Product listing
- Product detail page
- Price display
- Product gallery
- Stock status
- WhatsApp order button

Phase 2:

- Cart
- Checkout
- Payment gateway
- Order management

## Proposed Folder Structure

```txt
src/
  app/
    (site)/
      page.tsx
      blog/
        page.tsx
        [slug]/
          page.tsx
      articles/
        page.tsx
        [slug]/
          page.tsx
      products/
        page.tsx
        [slug]/
          page.tsx
    (payload)/
      admin/
        [[...segments]]/
          page.tsx
      api/
        [...slug]/
          route.ts

  collections/
    Pages.ts
    Posts.ts
    Articles.ts
    Products.ts
    Categories.ts
    Media.ts

  components/
    layout/
    sections/
    ui/
    cards/

  lib/
    db/
    payload/
    r2/
    seo/

  styles/
    globals.css
```
