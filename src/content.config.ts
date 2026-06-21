import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tech: z.array(z.string()),
    order: z.number(),
    featured: z.boolean().optional(),
    liveUrl: z.string().url().optional(),
    sourceUrl: z.string().url().optional(),
    year: z.number().optional(),
    draft: z.boolean().optional(),
    archived: z.boolean().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.date(),
    draft: z.boolean().optional(),
    updatedDate: z.date().optional(),
  }),
});

export const collections = { projects, blog };