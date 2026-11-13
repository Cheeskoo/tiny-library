import type { Book } from "../types";
import Image from "next/image";
import Link from "next/link";
import ImageSquare from "@/public/hero-image-square.png"
import { CiHeart } from "react-icons/ci";
import Badges from "./Badges";

export default function BookCard({book}: {book: Book}){
    return(
            <Link href={`/books/${book.id}`} className="block w-full max-w-[362px] border border-[#DDDDDD] rounded-[10px] overflow-hidden hover:shadow-md transition-shadow">
            <Image 
                src={ImageSquare} 
                alt={`the cover of the book: ${book.name}`} 
                className="w-full h-auto object-cover" 
            />
            <div className="flex flex-col gap-3 p-5 bg-white">
                <h2 className="text-2xl font-bold text-[#1E1E1E] leading-snug">{book.name}</h2>
                <p className="text-xl text-gray-600">{book.author}</p>
                
                <div>
                    <Badges>
                        {book.category}
                    </Badges>
                </div>

                <span className="flex items-center gap-1 text-[#606060] text-sm mt-1">
                    <CiHeart className="text-2xl text-gray-400"/> 
                    {book.likes}
                </span>
            </div>
        </Link>
    )
}