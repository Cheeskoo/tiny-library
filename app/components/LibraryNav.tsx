'use client'
import Link from "next/link"
import type { BookCategory } from "../types"
import { usePathname } from "next/navigation"

export default function LibraryNav({categories} : {categories: BookCategory[]}){
    const pathName = usePathname()
    const labels = categories.map((cat) => {
       const isActive = cat.slug === "all" ? "/books" : `/books/categories/${cat.slug}`
       return (<Link
            key={cat.id}
            href={isActive}
            className={`whitespace-nowrap uppercase text-sm font-medium text-muted hover:text-black transition-colors px-1 py-1 ${
                pathName === isActive 
                ? "text-orange-600"
                : ""}`
        }>
          {cat.label}
        </Link>)
})
    return labels
    
}