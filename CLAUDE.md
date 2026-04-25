# Continuum Studios — Claude Agent Context

## What This Project Is
A subscription-based AI editorial platform for fiction authors.
Built with Next.js 16, Supabase (PostgreSQL), and Stripe.
Deployed on Vercel. Repository: HoshiDenshi/continuum-studios

## The Three-Layer AI Architecture
- **Sanctuary Threshold** — platform identity, content permissions, editorial philosophy
- **Techno Twin** — per-project editorial voice and mode instructions  
- **MasterVersion** — canon context injection and continuity logic

## Subscription Tiers
- Solo Studio — 1 project, $9/mo
- Trio Studio — 3 projects, $19/mo
- Ensemble Studio — 5 projects, $29/mo

## Core Database Tables
- `public.users` — auth, stripe_customer_id, plan_tier, plan_status, addons
- `public.projects` — owner_id, title, genre, canon_context, active_mode

## Key Conventions
- All dev work lives on D: drive
- npm cache redirected to D:\nodejs\cache (intentional — see README)
- TypeScript strict mode, App Router, Tailwind CSS
- RLS enabled on all tables from Day One

## Team Structure
- Dana (Techie-Dana) — technical build lead
- Daka (Daffy-Daka) — creative director and product vision
- AI collaborators: Claude (architecture/prompts), Copilot (inline coding), ChatGPT (UX/strategy), Gemini/H.E.S.T.I.A. (project management)