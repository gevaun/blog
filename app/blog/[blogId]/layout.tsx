"use client";

import { useRouter } from "next/navigation";
import { MoveLeftIcon } from "lucide-react";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const router = useRouter();

  return (
    <div>
      <div>
        <button
          onClick={router.back}
          className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100"
        >
          <MoveLeftIcon className="w-4"/>
          Back to blogs
        </button>
      </div>
      <div>{children}</div>
    </div>
  );
}
