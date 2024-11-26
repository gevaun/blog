import BlogPosts from "@/app/components/blogs";

export default function Home() {

  return (
    <div>
      <div className="mb-4">
        <h1>Hey There! </h1>
        <p>
          This is my blog about technology and cool things that I am working on.
        </p>
        <p>I hope you enjoy it!</p>
      </div>
      <h1 className="font-bold text-lg tracking-tight">Featured Posts</h1>
  
        <div>
          <div className="mt-4 space-y-4">
            <BlogPosts />
          </div>
        </div>
    </div>
  );
}
