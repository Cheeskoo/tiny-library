import LibraryNav from "../components/LibraryNav";
import { getAllCategories } from "../lib/books";


export default function BooksLayout({ children }: LayoutProps<"/">) {
  const categories = getAllCategories()
  return (
        <main>
          <nav className="py-2 px-4 mb-2 flex gap-2 overflow-x-auto sticky top-0 bg-white items-center  max-sm:scrollbar-hide bg-linear-to-r from-white/80 to-transparent w-full md:mx-auto md:py-4 lg:justify-center">
            <LibraryNav categories={categories}/>
          </nav>
          <div>
            {children}
          </div>
        </main>
  );
}
