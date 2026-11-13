export type Book = {
    id: number
    name: string
    author: string
    likes: number
    image: string
    category: string
    dateAdded: string
}
export type BookCategorySlug = "all" | "fiction" | "non-fiction" | "romance" | "fantasy" | "thriller" | "horror" | "historical" | "biography" | "self-help"
export type BookCategory = {
    "id": number
    "slug": string
    "label": string
}
export type BookPageProps = {
        book?: string
}