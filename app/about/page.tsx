import Link from "next/link"
import Image from "next/image"
import heroSquare from "@/public/hero-image-square.png"
import { GoStack } from "react-icons/go"
import { CiGlobe } from "react-icons/ci"
import { IoFlagOutline } from "react-icons/io5"

export default function About(){
    return(
        <main className="text-[#1E1E1E]">
            <section className="px-5 max-w-7xl mx-auto md:grid md:grid-cols-2 md:items-center md:gap-10">
                <div>
                <Image src={heroSquare} alt="An image of a beach" className="object-cover w-full h-auto rounded-md" />
                </div>
                <div className="mt-6 md:mt-0">
                <p className="mt-4 uppercase font-semibold text-gray-500">About tiny library</p>
                <h1 className="font-bold text-4xl mt-4">Small shelf, big impact</h1>
                <p className="mt-3 text-2xl text-gray-600">
                    Tiny Library started as a simple idea: make it easier 
                    for curious readers to actually find books they'll love,
                    not just scroll endless lists. Every title here is chosen
                    with care, not algorithms.
                </p>
                <Link href="/about/contact" className="flex w-fit py-2 px-6 border-2 border-[#1E1E1E] mx-auto md:mx-0 mt-6 text-xl uppercase font-semibold hover:bg-[#1E1E1E] hover:text-white transition-colors">
                    Contact us
                </Link>
                </div>
            </section>
            <div className="max-w-7xl mx-auto px-5 my-12">
                <div className="border-t border-[#DDDDDD] w-full"></div>
            </div>
            <section className="flex flex-col gap-8 px-5 max-w-7xl mx-auto md:flex-row md:justify-between md:items-stretch">
                <div className="flex flex-col gap-2 md:flex-1">
                <h3 className="flex items-center gap-2 font-bold text-2xl">
                    <GoStack />
                    Curated, not crowded 
                </h3>
                <p className="text-xl text-gray-600">
                    Tiny Library keeps the catalogue intentionally
                    small so every book feels like a recommendation.
                </p>
                </div>
                <div className="hidden md:block w-[1px] bg-[#DDDDDD] self-stretch"></div>

                <div className="flex flex-col gap-2 md:flex-1">
                <h3 className="flex items-center gap-2 font-bold text-2xl">
                    <CiGlobe />
                    Easy to browse
                </h3>
                <p className="text-xl text-gray-600">
                    Clear categories and simple descriptions make
                    it quick to choose what you actually want to read
                    next.
                </p>
                </div>
                <div className="hidden md:block w-[1px] bg-[#DDDDDD] self-stretch"></div>

                <div className="flex flex-col gap-2 md:flex-1">
                <h3 className="flex items-center gap-2 font-bold text-2xl">
                    <IoFlagOutline />
                    Readers first 
                </h3>
                <p className="text-xl text-gray-600">
                    Every part of Tiny Library is designed to help you
                    spend less time searching and more time reading.
                </p>
                </div>
            </section>
            <div className="max-w-7xl mx-auto px-5 my-12">
                <div className="border-t border-[#DDDDDD] w-full"></div>
            </div>
            <section className="mb-16 max-w-3xl mx-auto px-5">
                <div className="flex flex-col gap-4 ">
                <h2 className="font-bold text-4xl">
                    Our ethos
                </h2>
                <p className="text-2xl text-gray-600">
                    At Tiny Library, we believe a good book shouldn't be hard
                    to find. Our ethos is to create a small, carefully curated
                    space where every title earns its place on the shelf and 
                    readers can trust that anything they pick up is worth 
                    their time.
                </p>
                <div className="border-t border-[#DDDDDD] w-full md:max-w-sm md:mx-auto my-6"></div>
                <p className="text-2xl text-gray-600">
                    Instead of overwhelming you with thousands of options, 
                    Tiny Library focuses on a modest collection that feels personal
                    and approachable. 
                    We want readers to feel like they've stepped into a cosy, well-loved 
                    library where someone has already done the hard work of sorting through
                    the noise.
                </p>
                </div>
            </section>
        </main>
    )
}