import { getAllBooks } from "@/app/lib/books"
import BooksGrid from "../components/BooksGrid"
import Form from "next/form"
import type { BookPageProps } from "../types"

export default async function Books({searchParams}: {searchParams: Promise<BookPageProps>}){
    const books = await getAllBooks()
    const query = (await searchParams)?.book?.toLowerCase() || ""
    const filterBooks = query ? books.filter((book)=>( 
        book.author.toLowerCase().includes(query) || 
        book.category.toLowerCase().includes(query) ||
        book.name.toLowerCase().includes(query)
    )): books
    return(
        <section>
            <Form
                action="/books" className="w-full px-5 md:px-0 md:max-w-xl md:mx-auto mb-5">
                <input type="text"
                       name="book"
                       placeholder="e.g La divina comedia"
                       autoComplete="off"
                       defaultValue={query}
                       className={`w-full py-3 pl-5 pr-5 text-sm placeholder-gray-500 bg-white border border-muted rounded-full focus:border-muted focus:outline-none focus:ring-0 md:text-base`}/>
            </Form>
            <BooksGrid books={filterBooks}/>
        </section>
    )
}