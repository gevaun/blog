"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { SunIcon, MoonStarIcon, MonitorIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
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

  const themeIconStyle =
    "w-4 h-4 duration-400 ease-in-out transition dark:hover:stroke-white";
 
  //   const themeIcon = theme ? (
  //   <SunIcon
  //     className={themeIconStyle}
  //     onClick={() => {
  //       setTheme("light")
  //       setThemeState("light");
  //     }}
  //   />
  // ) : (
  //   <MoonStarIcon
  //     className={`${themeIconStyle}`}
  //     onClick={() => {
  //       setTheme("dark")
  //       setThemeState("dark");
  //     }}
  //   />
  // );

  return (
    <nav className="flex justify-between items-center p-4">
      <div className="flex items-center gap-4">
        <Link href="/" className="text-xl font-bold tracking-tighter">
          Blog.
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
