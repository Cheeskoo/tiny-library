import { Book } from "../types";
import BookCard from "@/app/components/BookCard"

export default function BooksGrid({books} : {books: Book[]}){
    
    return(
        <section className="grid grid-cols-[repeat(auto-fill,minmax(max(250px,calc((100%_-_4.5rem)/4)),1fr))] gap-6 px-5">
            {books.map((book)=> <BookCard key={book.id} book={book} /> )}
        </section>
    )
}