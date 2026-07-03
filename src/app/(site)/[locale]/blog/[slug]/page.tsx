type PageProps = {
  params: Promise<{
    slug: string
    locale: string
  }>
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  const { slug, locale } = await params
  const isMs = locale === 'ms'

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 py-16 px-6 sm:px-8">
      <article className="max-w-3xl mx-auto bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-sm">
        <header className="mb-8">
          <div className="flex items-center gap-x-4 text-xs mb-4">
            <time className="text-zinc-550">July 4, 2026</time>
            <span className="rounded-full bg-zinc-50 dark:bg-zinc-800 px-3 py-1.5 font-medium text-zinc-600 dark:text-zinc-300">
              {isMs ? 'Teknologi' : 'Technology'}
            </span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            {isMs ? 'Post Blog' : 'Blog Post'}: {slug}
          </h1>
          <p className="mt-4 text-lg text-zinc-650 dark:text-zinc-400">
            A walkthrough of setting up dynamic content management systems natively inside the Next.js App Router.
          </p>
        </header>

        <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300 space-y-6">
          <p>
            Payload CMS v3 runs natively inside Next.js, allowing you to fetch your schema definitions and local data using Server Components with zero HTTP overhead.
          </p>
          <p>
            This page represents the detailed view of a blog post with the slug: <code className="px-1.5 py-0.5 bg-zinc-150 dark:bg-zinc-800 rounded font-mono text-sm">{slug}</code>.
          </p>
        </div>
      </article>
    </div>
  )
}
