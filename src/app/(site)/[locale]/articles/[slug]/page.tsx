type PageProps = {
  params: Promise<{
    slug: string
    locale: string
  }>
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug, locale } = await params
  const isMs = locale === 'ms'

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 py-16 px-6 sm:px-8">
      <article className="max-w-3xl mx-auto bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-sm">
        <header className="mb-8">
          <div className="flex items-center gap-x-4 text-xs mb-4">
            <time className="text-zinc-500">July 4, 2026</time>
            <span className="rounded-full bg-zinc-50 dark:bg-zinc-800 px-3 py-1.5 font-medium text-zinc-600 dark:text-zinc-300">
              {isMs ? 'Rujukan' : 'Reference'}
            </span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            {isMs ? 'Artikel' : 'Article'}: {slug}
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            A comprehensive reference for developers building database schemas and ORM relationships.
          </p>
        </header>

        <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300 space-y-6">
          <p>
            When utilizing relational models in PostgreSQL database configuration, using Drizzle ORM offers first-class type safety.
          </p>
          <p>
            This article explores technical details related to the path slug: <code className="px-1.5 py-0.5 bg-zinc-150 dark:bg-zinc-800 rounded font-mono text-sm">{slug}</code>.
          </p>
        </div>
      </article>
    </div>
  )
}
