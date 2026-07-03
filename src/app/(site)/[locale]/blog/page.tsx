import Link from 'next/link'

type PageProps = {
  params: Promise<{
    locale: string
  }>
}

export default async function BlogListingPage({ params }: PageProps) {
  const { locale } = await params
  const isMs = locale === 'ms'

  return (
    <div className="bg-light-grey dark:bg-zinc-950 py-16 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary dark:text-zinc-50 sm:text-5xl">
            {isMs ? 'Blog & Berita' : 'Blog & News'}
          </h1>
          <p className="mt-4 text-lg text-zinc-650 dark:text-zinc-400">
            {isMs ? 'Pemikiran, cerita, dan idea.' : 'Thoughts, stories, and ideas.'}
          </p>
        </header>

        <div className="grid gap-8 sm:grid-cols-2">
          {/* Static Preview Items */}
          {[1, 2, 3, 4].map((item) => (
            <article key={item} className="flex flex-col items-start justify-between p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-grey dark:border-zinc-800">
              <div className="flex items-center gap-x-4 text-xs">
                <time className="text-zinc-550">July {item + 3}, 2026</time>
                <span className="relative z-10 rounded-full bg-grey dark:bg-zinc-800 px-3 py-1.5 font-semibold text-primary dark:text-zinc-300">
                  {isMs ? 'Kategori' : 'Category'}
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-bold leading-6 text-primary dark:text-zinc-50 group-hover:text-zinc-700 dark:group-hover:text-zinc-300">
                  <Link href={`/${locale}/blog/sample-post-${item}`}>
                    <span className="absolute inset-0" />
                    How to configure your Next.js application with Payload CMS
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-zinc-650 dark:text-zinc-400">
                  This is a sample blog post. Soon, this content will be loaded dynamically using Payload CMS Local API.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
