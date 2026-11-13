import Link from "next/link";
import Image from "next/image";
import squareImg from "@/public/hero-image-square.png"
import { CiHeart } from "react-icons/ci";
import Badges from "@/app/components/Badges";
import { getBookById } from "@/app/lib/books";
import {format} from 'date-fns'

export default async function BookDetail({params}: {params: Promise<{id:string}>}){
    const {id} = await params
    const book = await getBookById(id)
    const formattedDate = format(book.dateAdded, "M/d/yyyy")
    return (
        <main className="mx-auto max-w-5xl px-5">
            <nav className="py-5 text-center">
                <Link href="/books" className="font-semibold uppercase text-muted">
                    Back to overview
                </Link>
            </nav>

            <article className="flex flex-col gap-8 md:flex-row">
                <Image
                    src={squareImg}
                    alt={`The cover of the book: ${book.name}`}
                    className="w-full rounded-lg md:w-1/2"
                    priority
                />

                <div className="flex flex-col gap-2">
                    <span className="flex items-center gap-1 text-muted" aria-label={`${book.likes} likes`}>
                        <CiHeart className="text-xl" aria-hidden />
                        {book.likes}
                    </span>
                    <h1 className="text-3xl font-bold">{book.name}</h1>
                    <Badges>{book.category}</Badges>
                    <p className="text-2xl text-ink">{book.author}</p>

                    <p className="mt-auto pt-10 text-sm text-muted">
                        Added on <time dateTime={book.dateAdded}>{formattedDate}</time>
                    </p>
                </div>
            </article>
        </main>
    )
}