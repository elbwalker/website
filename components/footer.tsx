import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Product</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="https://www.walkeros.io/docs/" className="hover:text-white">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="https://www.walkeros.io/playground/" className="hover:text-white">
                  Playground
                </Link>
              </li>
              <li>
                <Link href="https://github.com/elbwalker/walkerOS" className="hover:text-white">
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Company</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/company" className="hover:text-white">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Legal</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/legal/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/imprint" className="hover:text-white">
                  Imprint
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Connect</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="https://www.linkedin.com/company/elbwalker/" className="hover:text-white">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="mailto:hello@elbwalker.com" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} elbwalker GmbH, Hamburg
        </div>
      </div>
    </footer>
  );
}
