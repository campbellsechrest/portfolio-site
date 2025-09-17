import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export type CaseStudyMeta = {
  slug: string;
  title: string;
  date: string;
  summary?: string;
  tags?: string[];
  role?: string;
  heroImage?: string;
};

const CONTENT_DIR = path.join(process.cwd(), "content", "case-studies");

export async function getCaseStudySlugs() {
  const files = await fs.readdir(CONTENT_DIR);
  return files.filter((f) => f.endsWith(".mdx")).map((f) => f.replace(/\.mdx$/, ""));
}

export async function getAllCaseStudies(): Promise<CaseStudyMeta[]> {
  const slugs = await getCaseStudySlugs();
  const metas = await Promise.all(
    slugs.map(async (slug) => {
      const raw = await fs.readFile(path.join(CONTENT_DIR, `${slug}.mdx`), "utf8");
      const { data } = matter(raw);
      return { slug, ...(data as Omit<CaseStudyMeta, "slug">) };
    })
  );
  return metas.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getCaseStudyBySlug(slug: string) {
  const raw = await fs.readFile(path.join(CONTENT_DIR, `${slug}.mdx`), "utf8");
  const { content, data } = matter(raw);
  return {
    content,
    frontmatter: { slug, ...(data as Omit<CaseStudyMeta, "slug">) } as CaseStudyMeta,
  };
}
