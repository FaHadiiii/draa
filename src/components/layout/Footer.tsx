export default function Footer() {
  return (
    <footer className="border-t border-grey bg-white py-8 px-6">
      <div className="max-w-7xl px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-y-4 text-xs text-zinc-500">
        <span>&copy; 2025 Company Name. All rights reserved.</span>
        <div className="flex gap-x-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
