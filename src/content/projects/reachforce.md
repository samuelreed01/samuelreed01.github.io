---
id: reachforce
title: Reachforce
link: https://reachforce.ai
images: ['/images/projects/reachforce1.webp', '/images/projects/reachforce2.webp', '/images/projects/reachforce3.webp']
order: 1
draft: true
---

A web app built with Next.js to automate B2B marketing emails.

I took this app from a buggy prototype the client built themselves with AI to a stable, production-ready product with regular users. Apart from lots of refactoring and cleanup, one important addition I made was adding tests for vital functions to greatly improve code resiliency.

App features:

- Automatic email warmup, scheduling, and sending
- A/B testing for email templates
- Varying email wording with AI
- Upload CSV of your own leads or receive monthly allowance of leads based on your chosen filters

Technologies used:

- Next.js 16 / React 19
- Postgres database
- SMTP/IMAP for emails
- Stripe for payment handling
- Vitest for testing
- Hosted on Google Cloud
