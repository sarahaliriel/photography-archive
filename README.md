# Photography Archive

Sarah Aliriel's personal cinematic photography archive. The current milestone is the technical foundation for the homepage.

## Local development

```bash
npm install
npm run dev
```

Useful checks:

```bash
npm run lint
npm run typecheck
npm run build
```

## Stack and structure

Next.js App Router, React, TypeScript, Tailwind CSS, and ESLint. Routes live in `app/`; typed archive metadata lives in `data/` and `types/`; media helpers live in `lib/`.

Published photography and video will be delivered by Cloudinary and must not be committed to this repository. Copy `.env.example` to `.env.local` when Cloudinary delivery is configured.
