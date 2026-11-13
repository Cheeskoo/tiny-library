import BooksGrid from "@/app/components/BooksGrid"
import { getBookByCategory } from "@/app/lib/books"
import type { BookCategorySlug } from "@/app/types"

export default async function FilterByCategory({params}: {params: Promise<{categoryName: BookCategorySlug}>}){
    const {categoryName} = await params
    const books = await getBookByCategory(categoryName)

    return(
        <BooksGrid books={books} />
    )
}