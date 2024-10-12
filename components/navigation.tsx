"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { SunIcon, MoonStarIcon, MonitorIcon, MessageSquareDotIcon, MessageCircleMoreIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function navigation() {
  const { setTheme } = useTheme();

  return (
    <nav className="flex justify-between items-center p-4">
      <div className="flex items-center gap-4">
        <Link href="/" className="text-xl font-bold tracking-tighter flex items-center">
          <MessageSquareDotIcon className="scale-x scale-x-[-1] h-5"/> Blog.
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/about">About</Link>
          <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonStarIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
      </div>
    </nav>
  );
}
