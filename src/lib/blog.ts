export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
};

// Sin artículos todavía — listo para crecer sin cambiar la estructura de la página.
export const posts: BlogPost[] = [];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
