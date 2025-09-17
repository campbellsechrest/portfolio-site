import { getAllCaseStudies, getCaseStudyBySlug } from "@/lib/case-studies";
import { mdxComponents } from "@/components/MDX";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";

export async function generateStaticParams() {
  const posts = await getAllCaseStudies();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { frontmatter } = await getCaseStudyBySlug(params.slug);
  return {
    title: `${frontmatter.title} — Case Study`,
    description: frontmatter.summary,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { content, frontmatter } = await getCaseStudyBySlug(params.slug);

  return (
    <article className="prose dark:prose-invert max-w-3xl mx-auto">
      <h1>{frontmatter.title}</h1>
      <p className="opacity-70 text-sm -mt-4">
        {new Date(frontmatter.date).toLocaleDateString()} · {frontmatter.role}
      </p>

      <MDXRemote
        source={content}
        components={mdxComponents}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              rehypeSlug,
              [rehypeAutolinkHeadings, { behavior: "wrap" }],
              [rehypePrettyCode, { keepBackground: false }],
            ],
          },
        }}
      />
    </article>
  );
}
