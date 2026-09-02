import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';
const oldProjectCollection = defineCollection({
  loader: glob({ base: './src/content/oldProjects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    id: z.string(),
    iconSrc: z.string(),
    title: z.string(),
    codepen: z.boolean().optional(),
    codepenUrl: z.string().optional(),
    order: z.number().optional(),
  }),
});
const realProjectCollection = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    link: z.string().optional(),
    images: z.array(z.string()),
    order: z.number().optional(),
  }),
});
export const collections = {
  oldProjects: oldProjectCollection,
  projects: realProjectCollection,
};
