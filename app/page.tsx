import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl">
            Privacy-First Data Collection
            <span className="block text-elbwalker">Built with walkerOS</span>
          </h1>
          <p className="mb-8 text-lg text-slate-300 sm:text-xl">
            We help teams build privacy-first data collection with walkerOS - an open-source platform for digital analytics.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-md bg-elbwalker px-6 py-3 text-base font-medium text-white transition-colors hover:bg-elbwalker-600"
            >
              Our Services
            </Link>
            <Link
              href="https://www.walkeros.io/docs/"
              className="inline-flex items-center justify-center rounded-md bg-white/10 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-white/20"
            >
              View Documentation
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-elbwalker" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Open Source</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-elbwalker" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Privacy-Centric</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-elbwalker" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Enterprise Ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Why walkerOS?
            </h2>
            <p className="text-lg text-slate-300">
              A modern approach to event data collection
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-elbwalker/10">
                <svg className="h-6 w-6 text-elbwalker" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">Privacy First</h3>
              <p className="text-slate-300">
                Built-in consent management and GDPR compliance. Collect only what you need, when you have permission.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-elbwalker/10">
                <svg className="h-6 w-6 text-elbwalker" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">Developer Friendly</h3>
              <p className="text-slate-300">
                Tag management as code. Version controlled, testable, and maintainable data collection.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-elbwalker/10">
                <svg className="h-6 w-6 text-elbwalker" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">Your Infrastructure</h3>
              <p className="text-slate-300">
                Runs in your own infrastructure. Full control over your data pipeline and integrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 sm:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-gradient-to-br from-elbwalker/10 to-transparent p-8 text-center sm:p-12">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mb-8 text-lg text-slate-300">
            Explore our services or dive into the documentation to learn more about walkerOS.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-md bg-elbwalker px-6 py-3 text-base font-medium text-white transition-colors hover:bg-elbwalker-600"
            >
              Explore Services
            </Link>
            <Link
              href="https://www.walkeros.io/docs/"
              className="inline-flex items-center justify-center rounded-md bg-white/10 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-white/20"
            >
              Read Documentation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
