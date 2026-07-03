type PageProps = {
  params: Promise<{
    slug: string
    locale: string
  }>
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug, locale } = await params
  const isMs = locale === 'ms'

  return (
    <div className="bg-zinc-550/5 dark:bg-zinc-950 py-16 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-sm md:flex">
        <div className="md:w-1/2 bg-zinc-100 dark:bg-zinc-800 h-96 md:h-auto flex items-center justify-center">
          <span className="text-zinc-400 dark:text-zinc-650 font-bold">
            {isMs ? 'Gambar Pameran Produk' : 'Product Showcase Image'}
          </span>
        </div>
        <div className="p-8 md:w-1/2 flex flex-col justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              {isMs ? 'Barangan Katalog' : 'Catalog Item'}
            </span>
            <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-50 mt-2">
              {isMs ? 'Produk' : 'Product'}: {slug}
            </h1>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              {isMs
                ? 'Item premium ini dihasilkan dengan bahan premium. Butiran dan spesifikasi katalog diuruskan di dalam Payload CMS.'
                : 'This premium item is crafted with premium materials. Details and catalog specs are managed inside Payload CMS.'}
            </p>
            <div className="flex items-center gap-x-2 mt-6">
              <span className="text-2xl font-black text-zinc-900 dark:text-zinc-50">
                {isMs ? 'RM 99.00' : '$29.99'}
              </span>
              <span className="text-xs bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded font-semibold border border-emerald-100 dark:border-emerald-900/30">
                {isMs ? 'Ada Stok' : 'In Stock'}
              </span>
            </div>
          </div>
          <div className="mt-8">
            <a 
              href={`https://wa.me/1234567890?text=Hi,%20I'm%20interested%20in%20the%20product%20${encodeURIComponent(slug)}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full inline-flex justify-center items-center py-3.5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-555 transition-colors text-white font-bold text-base shadow-sm"
            >
              {isMs ? 'Pesan melalui WhatsApp' : 'Order via WhatsApp'}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
