// import Link from "next/link";
import { getBlogPosts } from "../utils/utils";
import Link from "next/link";

export default function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div>
      {allBlogs.map((blog) => (
        <div key={blog.slug}>
          <Link href={`/blog/${blog.slug}`}>
            <h2>{blog.title}</h2>
            <p>{blog.date}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
