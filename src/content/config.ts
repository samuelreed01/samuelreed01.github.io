import { defineCollection, z } from 'astro:content';
const oldProjectCollection = defineCollection({
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
