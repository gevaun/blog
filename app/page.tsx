import Image from "next/image";
import BlogElements from "@/components/app/blogElements";

export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-lg tracking-tight">Featured Posts</h1>
      <div className="mt-4 space-y-4">
        <BlogElements />
      </div>
    </div>
  );
}
