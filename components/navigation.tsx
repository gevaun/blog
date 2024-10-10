'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function navigation() {
    const styles = {
        nav: "flex justify-between items-center p-4",
        link: "text-xl font-bold tracking-tighter",
    }

    return (
        <nav className="flex justify-between items-center p-4">
            <div className="flex items-center gap-4">
                <Link href="/" className="text-xl font-bold tracking-tighter">Blog.</Link>
                <Link href="/about">About</Link>
            </div>
            <div className="flex items-center gap-4">
                <Link href="/login">Login</Link>
                <Link href="/register">Register</Link>
            </div>
        </nav>
    )
}