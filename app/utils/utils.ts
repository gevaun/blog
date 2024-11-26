import fs from "fs";
import path from "path";
import matter from "gray-matter"


// Get the blog posts from the file system
export function getBlogPosts() {
  const blogsPath = path.join(process.cwd(), "app", "blog");
  
  const blogFiles = fs.readdirSync(blogsPath);
  const mdxFiles = blogFiles.filter((file: string) => file.endsWith(".mdx"))
  console.log(mdxFiles);
  // iterate through the files and read the contents
  const posts = mdxFiles.map((file: string) => {
    const slug = file.replace(/\.mdx$/, '');
    const filePath = path.join(blogsPath, file);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
    }
  })
  console.log(posts);
  return posts;
}

