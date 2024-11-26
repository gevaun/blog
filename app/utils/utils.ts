import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Get the blog posts from the file system
export function getBlogPosts() {
  const blogsPath = path.join(process.cwd(), "app", "blog", "posts");

  const blogFiles = fs.readdirSync(blogsPath);
  const mdxFiles = blogFiles.filter((file: string) => file.endsWith(".mdx"));
  const posts = mdxFiles.map((file: string) => {
    const slug = file.replace(/\.mdx$/, "");
    const filePath = path.join(blogsPath, file);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
      content,
    };
  });
  return posts;
}
