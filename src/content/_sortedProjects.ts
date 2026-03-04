import { getCollection } from 'astro:content';

const projects = await getCollection('projects');

projects.sort((a, b) => a.data.order! - b.data.order!);

export default projects;
