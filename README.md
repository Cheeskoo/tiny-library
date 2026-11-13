# 📚 Tiny Library

Una pequeña biblioteca web hecha con **Next.js 16 (App Router)**, **React 19** y **Tailwind CSS 4**. Permite explorar un catálogo seleccionado de libros, filtrarlos por categoría, buscarlos por título, autor o género y ver el detalle de cada uno.

> Proyecto de práctica para aprender Next.js: rutas dinámicas, layouts anidados, Server Components, `searchParams`, `next/form`, `next/image` y `next/font`.

---

## ✨ Funcionalidades

- **Página de inicio** con una sección hero y un llamado a la acción hacia el catálogo.
- **Catálogo de libros** (`/books`) en una grilla responsive de tarjetas.
- **Búsqueda** por título, autor o categoría usando `next/form` y query params (`/books?book=...`).
- **Filtro por categoría** (`/books/categories/[categoryName]`) con una barra de navegación fija que resalta la categoría activa.
- **Detalle del libro** (`/books/[id]`) con autor, categoría, likes y fecha de alta formateada con `date-fns`.
- **Páginas About y Contact** (`/about`, `/about/contact`).
- **Navbar** que resalta la sección activa con `usePathname`.
- Diseño **responsive** (mobile first).

## 🛠️ Tecnologías

| Herramienta | Uso |
| --- | --- |
| [Next.js 16](https://nextjs.org/) | Framework (App Router, Server Components, Turbopack) |
| [React 19](https://react.dev/) + React Compiler | UI |
| [TypeScript](https://www.typescriptlang.org/) | Tipado |
| [Tailwind CSS 4](https://tailwindcss.com/) | Estilos |
| [date-fns](https://date-fns.org/) | Formato de fechas |
| [react-icons](https://react-icons.github.io/react-icons/) | Íconos |
| ESLint | Linting |

## 📁 Estructura del proyecto

```
tiny-library/
├── app/
│   ├── about/
│   │   ├── contact/page.tsx          # /about/contact
│   │   └── page.tsx                  # /about
│   ├── books/
│   │   ├── [id]/page.tsx             # Detalle de un libro
│   │   ├── categories/
│   │   │   └── [categoryName]/page.tsx  # Libros filtrados por categoría
│   │   ├── layout.tsx                # Layout con la barra de categorías
│   │   └── page.tsx                  # Catálogo + buscador
│   ├── components/
│   │   ├── Badges.tsx                # Etiqueta de categoría
│   │   ├── BookCard.tsx              # Tarjeta de libro
│   │   ├── BooksGrid.tsx             # Grilla de tarjetas
│   │   ├── LibraryNav.tsx            # Navegación de categorías (client)
│   │   └── Navbar.tsx                # Barra de navegación principal (client)
│   ├── data/
│   │   ├── books.json                # Datos de los libros
│   │   └── categories.json           # Categorías disponibles
│   ├── lib/
│   │   └── books.ts                  # Funciones de acceso a datos
│   ├── types/
│   │   └── index.ts                  # Tipos de TypeScript (Book, BookCategory…)
│   ├── globals.css
│   ├── layout.tsx                    # Layout raíz (fuentes + Navbar)
│   └── page.tsx                      # Home
├── public/                           # Logo e imágenes
├── next.config.ts
└── package.json
```

## 🗺️ Rutas

| Ruta | Descripción |
| --- | --- |
| `/` | Página de inicio |
| `/books` | Todos los libros |
| `/books?book=<texto>` | Búsqueda por título, autor o categoría |
| `/books/categories/<slug>` | Libros de una categoría (`fiction`, `fantasy`, `horror`…) |
| `/books/<id>` | Detalle de un libro |
| `/about` | Sobre Tiny Library |
| `/about/contact` | Contacto |

## 🗄️ Datos

No hay base de datos ni API externa: los libros y las categorías se leen de archivos JSON en [`app/data/`](app/data/) a través de las funciones de [`app/lib/books.ts`](app/lib/books.ts):

- `getAllBooks()` – devuelve todos los libros.
- `getBookById(id)` – devuelve un libro por su id.
- `getAllCategories()` – devuelve las categorías.
- `getCategoryBySlug(slug)` – devuelve una categoría por su slug.
- `getBookByCategory(category)` – devuelve los libros de una categoría.

Cada libro tiene esta forma:

```ts
type Book = {
  id: number
  name: string
  author: string
  likes: number
  image: string
  category: string
  dateAdded: string // ISO 8601
}
```

Para agregar libros o categorías basta con editar `books.json` o `categories.json` (y sumar el slug nuevo al tipo `BookCategorySlug` en `app/types/index.ts`).

## 🚀 Cómo ejecutarlo

### Requisitos

- [Node.js](https://nodejs.org/) 20.9 o superior
- npm

### Instalación

```bash
git clone https://github.com/cheeskoo/tiny-library.git
cd tiny-library
npm install
```

### Scripts

```bash
npm run dev     # Servidor de desarrollo en http://localhost:3000
npm run build   # Build de producción
npm run start   # Sirve el build de producción
npm run lint    # Ejecuta ESLint
```

## ⚠️ Limitaciones conocidas

- Todavía no hay páginas `not-found.tsx` ni `error.tsx`. Si se accede a un libro o a una categoría que no existe (por ejemplo `/books/999`), las funciones de `app/lib/books.ts` lanzan un error y se muestra la página de error genérica de Next.js.

## 📌 Posibles mejoras

- Agregar `not-found.tsx` / `error.tsx` (usando `notFound()` de `next/navigation`) para manejar ids o categorías inexistentes.
- Usar la portada real de cada libro (campo `image`) en lugar de la imagen genérica.
- Generar las rutas estáticas con `generateStaticParams`.
- Ordenar por likes o por fecha de alta.
- Mover los datos a una base de datos o API.

## 📄 Licencia

Proyecto con fines educativos.
