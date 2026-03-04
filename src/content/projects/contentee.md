---
id: contentee
title: Contentee
link: https://contentee.ai
images: ['/images/projects/contentee1.webp', '/images/projects/contentee2.webp', '/images/projects/contentee3.webp']
order: 2
draft: true
---

A Next.js app that uses AI to automatically generate and post content according to the user's schedule.

The original prototype was built by the client themselves using AI, and even after I started with this project the client continued to merge their own AI-generated changes. I worked partly as a 'code janitor' cleaning up and fixing the AI-generated bugs, and partly as a developer adding new features. I also managed the containerisation and deployment of the whole app on Google Cloud Run.

This app uses LLM APIs extensively to generate videos, images, and text. I was therefore able to familiarise myself with using these APIs both for quick tasks and for long-running tasks requiring polling.

App features:

- Use AI to generate videos, images, and text, and post them directly to social media or Wordpress
- Generate content on a schedule of user's choosing
