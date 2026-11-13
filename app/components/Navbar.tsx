'use client'
import image from "@/public/tinylibrary-logo.png"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar(){
    const pathname = usePathname()
    const about = pathname === "/about/contact" ? "About : contact": "About"
    return(
        <nav className="h-20 flex items-center justify-between px-5 md:px-10 ">
            <Link href="/">
                <Image src={image} alt="Tiny library logo" className="w-16 h-auto md:w-20 object-contain"/>
            </Link>
            <div className="flex gap-10 text-[#606060] font-semibold">
                <Link href="/books" className={`uppercase hover:text-black transition-colors 
                ${pathname.startsWith("/books") ? "text-orange-600 underline underline-offset-10 decoration-1" : ""}`}>Books</Link>
                <Link href="/about" className={`uppercase hover:text-black transition-colors 
                ${pathname.startsWith('/about') ? "text-orange-600 underline underline-offset-10 decoration-1" : ""}`}>{about}</Link>
            </div>
        </nav>
    )
}