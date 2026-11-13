export default function Contact(){
    return(
        <main>
            <section className="px-5 my-12 text-[#1E1E1E] max-w-2xl md:mx-auto">
                <p className="text-lg font-medium text-gray-500 uppercase tracking-wider">Ways to reach us</p>
                <h1 className="py-4 font-bold text-4xl">Contact</h1>
                
                <ul className="flex flex-col gap-4 list-disc text-xl md:text-2xl pl-6 text-gray-600">
                <li>
                    <strong className="text-[#1E1E1E]">Book suggestions:</strong> Tell us what we should add to the shelf.
                </li>
                <li>
                    <strong className="text-[#1E1E1E]">Corrections:</strong> Spotted an error? Let us know so we can fix it.
                </li>
                <li>
                    <strong className="text-[#1E1E1E]">Careers:</strong> Interested in joining Tiny Library? Send a short note and we'll get back to you.
                </li>
                </ul>

                <p className="mt-8 text-xl md:text-2xl font-medium">
                Email: <a href="mailto:hello@tinylibrary.example" className="underline hover:text-gray-900">hello@tinylibrary.example</a>
                </p>
                
                <p className="mt-6 text-xl md:text-2xl text-gray-600">
                We're a small team, so we don't list a phone number—email is best. 
                </p>
            </section>
        </main>
)
}