import { getBlogPosts } from "../utils/utils";
import Link from "next/link";

export default function BlogPosts() {
  const allBlogs = getBlogPosts();

  return (
    <div>
      {allBlogs.map((blog) => (
        <div key={blog.slug}>
          <Link href={`/blog/${blog.slug}`}>
            <p className="flex gap-2">
              <span className="opacity-75">
                {blog.date}
                </span>
              {blog.title}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}
