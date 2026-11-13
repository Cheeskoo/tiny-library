
import Link from "next/link"
import Image from "next/image"
import heroImage from "@/public/hero-image.png"

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-80px)] flex items-center justify-center">
      <section className="w-full max-w-7xl px-5 py-12 flex flex-col md:grid md:grid-cols-2 md:gap-10 items-center">
        <div className="flex flex-col gap-5">
          <span className="hidden md:flex font-semibold text-[#1E1E1E] uppercase">Browse Books</span>
          <h1 className="text-5xl font-bold text-center md:text-left">
            Find your next favourite book
          </h1>
          <p className="text-center text-2xl md:text-left">
            A cosy corner of the web where readers discover hand-picked titles across every genre, from timeless classics to hidden indie gems.
          </p>
          <Link href="/books" className="w-fit px-4 py-2 font-semibold text-xl border-2 uppercase md:mt-5">
            Browse Books
          </Link>
        </div>
        <div className="flex justify-center mt-8 md:mt-0">
         <Image src={heroImage} alt="Image of a beach" className="w-full max-w-md object-cover" width={400} height={400}/>
        </div>
      </section>
    </main>
  )
}
