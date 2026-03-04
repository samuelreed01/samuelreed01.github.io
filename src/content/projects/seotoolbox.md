---
id: seotoolbox
title: SEOtoolbox.io
link: https://seotoolbox.io
images:
  [
    '/images/projects/seotoolbox1.webp',
    '/images/projects/seotoolbox2.webp',
    '/images/projects/seotoolbox3.webp',
    '/images/projects/seotoolbox4.webp',
    '/images/projects/seotoolbox5.webp',
  ]
order: 0
draft: true
---

A tool to help with many aspects of SEO, built with Node+Express backend and React Router v7 (formerly Remix) frontend.

When I took on this project the site was running PHP and 'vanilla' Javascript. After improving and adding new features, I took on the task of migrating the whole site to a modern, strongly-typed stack. This cut the number of bugs dramatically, allowed faster development of future features, and on many routes decreased the response time 3x.

My role covered not only development but also deployment and maintenance of the Google Cloud services, Stripe integrations, and integrations and approval applications with third-party APIs (Meta, Google, LinkedIn, Microsoft). I also handled containerisation and deployment of the scraping services using Chromium browers. I had to create a service that was fast enough to handle thousands of sites while minimising compute costs.

This project is spread across several Google Cloud services to optimise for hardware costs and availability. One of the most challenging aspects was architecting a service to handle tens of thousands of keyword updates each day. This required building a system that can handle scheduling, queueing, and automatic retries of these large volumes without overwhelming the database with too many simultaneous calls.

App features:

- Integrate social media or advertising accounts to see all your insights in one place
- Analyse your website content compare with your competitors with automatic website audits
- AI content generation tools based on top search results for your keywords
- Track how your website ranks in both search engines and AI query results
