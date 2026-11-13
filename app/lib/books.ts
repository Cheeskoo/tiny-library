import data from '@/app/data/books.json'
import categories from '@/app/data/categories.json'
import type { Book, BookCategory, BookCategorySlug } from '../types'

export async function getAllBooks(): Promise<Book[]>{
 return await data
}
export async function getBookById(id: number | string): Promise<Book>{
    let BookId = id
    if(typeof id === "string"){
        BookId = Number(id) 
    }
    const filterBook = await data.find(book => book.id === BookId)
    if(!filterBook){
        throw new Error('No book found, check the id and try again')
    }
    return filterBook
}
export function getAllCategories(): BookCategory[]{
    return categories
}
export async function getCategoryBySlug(slug: BookCategorySlug): Promise<BookCategory | null>{
    const getCategory = categories.find((category)=> category.slug === slug)
    if(!getCategory){
        throw new Error(`Slug: ${slug} doesnt match any category`)
    }
    return getCategory
}
export async function getBookByCategory(category: string): Promise<Book[]> {
    const filterBooks = await data.filter((book)=> book.category.toLowerCase() === category.toLowerCase())
    if(filterBooks.length < 1){
        throw new Error(`Category doesn't exists`)
    }
    return filterBooks
}