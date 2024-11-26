import Link from "next/link";
import { notFound } from "next/navigation";
import { CustomMDX } from "@/app/components/mdx";
import { getBlogPosts } from "@/app/utils/utils";

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

type BlogProps = {
  params: {
    slug: string;
    title: string;
    description: string;
    content: string;
  };
};

export default async function Blog(props: BlogProps) {
  const params = await props.params;
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
          }),
        }}
      />
    <a href="/" className="text-blue-500 hover:underline">
        &larr; Back to Blogs
    </a>
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {post.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
      </div>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
