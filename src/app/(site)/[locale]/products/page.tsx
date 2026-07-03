import Link from 'next/link'

type PageProps = {
  params: Promise<{
    locale: string
  }>
}

export default async function ProductsListingPage({ params }: PageProps) {
  const { locale } = await params
  const isMs = locale === 'ms'

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 py-16 px-6 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            {isMs ? 'Barangan' : 'Merchandise'}
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            {isMs
              ? 'Pameran produk jenama premium dan katalog barangan kami.'
              : 'Showcase of our premium brand products and merchandise catalog.'}
          </p>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="group relative flex flex-col bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-zinc-100 dark:border-zinc-800">
              <div className="aspect-w-1 aspect-h-1 bg-zinc-200 dark:bg-zinc-800 h-64 w-full flex items-center justify-center">
                <span className="text-zinc-400 dark:text-zinc-650 text-sm font-semibold">
                  {isMs ? 'Pratinjau Gambar Produk' : 'Product Image Preview'}
                </span>
              </div>
              <div className="flex-1 flex flex-col p-6">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                    <Link href={`/${locale}/products/premium-tshirt-${item}`}>
                      <span className="absolute inset-0" />
                      Premium Logo T-Shirt V{item}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                    {isMs
                      ? 'Baju penjenamaan kapas sikat berkualiti tinggi. Sangat selesa.'
                      : 'High quality combed cotton branding shirt. Extremely comfortable.'}
                  </p>
                </div>
                <div className="flex justify-between items-center mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-850">
                  <span className="text-lg font-extrabold text-zinc-900 dark:text-zinc-550">RM 99.00</span>
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    {isMs ? 'Ada Stok' : 'In Stock'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
