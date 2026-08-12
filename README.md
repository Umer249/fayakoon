# Fayakoon Engineering — Company Website

React + Node.js website built from the **Fayakoon Company Profile 2026** PDF.

## Stack

- **Frontend:** React (Vite) + Tailwind CSS v4 + Framer Motion
- **Backend:** Express (contact API + production static hosting)

## Pages

- `/` — Home
- `/about` — About
- `/services` — Services
- `/contact` — Contact

## Setup

```bash
npm run install:all
```

## Develop

Runs Express on port `5000` and Vite on `5173` (API proxied):

```bash
npm run dev
```

- Site: http://localhost:5173  
- API health: http://localhost:5000/api/health  

## Production

```bash
npm run build
set NODE_ENV=production
npm start
```

Then open http://localhost:5000

## Content source

Company details, projects, offices, policies, and imagery are derived from  
`Fayakoon Company Profile 2026.pdf`.
