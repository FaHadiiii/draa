import Link from 'next/link'

type PageProps = {
  params: Promise<{
    locale: string
  }>
}

export default async function ArticlesListingPage({ params }: PageProps) {
  const { locale } = await params
  const isMs = locale === 'ms'

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 py-16 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            {isMs ? 'Artikel' : 'Articles'}
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            {isMs 
              ? 'Panduan mendalam, dokumentasi, dan bahan rujukan.' 
              : 'In-depth guides, documentation, and reference materials.'}
          </p>
        </header>

        <div className="grid gap-6">
          {[1, 2, 3].map((item) => (
            <article key={item} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800 hover:border-zinc-200 dark:hover:border-zinc-700 transition-colors">
              <div className="max-w-xl">
                <div className="flex items-center gap-x-3 text-xs text-zinc-500 mb-2">
                  <span>{isMs ? 'Panduan' : 'Guides'}</span>
                  <span>•</span>
                  <span>10 min read</span>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
                  <Link href={`/${locale}/articles/sample-article-${item}`} className="hover:underline">
                    Comprehensive Guide to Cloudflare R2 and Next.js Integration
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  Learn how to configure `@payloadcms/storage-s3` to handle high-performance asset uploads using Cloudflare R2 bucket.
                </p>
              </div>
              <Link href={`/${locale}/articles/sample-article-${item}`} className="mt-4 sm:mt-0 text-sm font-semibold text-zinc-900 dark:text-zinc-50 hover:underline">
                {isMs ? 'Baca Artikel →' : 'Read Article →'}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
