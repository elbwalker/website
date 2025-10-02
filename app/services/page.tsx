import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Professional services for walkerOS implementation and data analytics",
};

export default function ServicesPage() {
  return (
    <main className="px-6 py-16 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
          Our Services
        </h1>
        <p className="mb-12 text-lg text-slate-300">
          We help teams implement and optimize walkerOS for privacy-first data collection.
        </p>

        <div className="space-y-8">
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-2xl font-semibold text-white">Implementation Support</h2>
            <p className="text-slate-300">
              Get expert help setting up walkerOS in your infrastructure. We guide you through setup, configuration, and best practices.
            </p>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-2xl font-semibold text-white">Custom Development</h2>
            <p className="text-slate-300">
              Need custom sources or destinations? We build tailored solutions that integrate with your existing systems.
            </p>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-2xl font-semibold text-white">Training & Workshops</h2>
            <p className="text-slate-300">
              Empower your team with in-depth training on walkerOS architecture, implementation patterns, and best practices.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="mailto:hello@elbwalker.com"
            className="inline-flex items-center justify-center rounded-md bg-elbwalker px-6 py-3 text-base font-medium text-white transition-colors hover:bg-elbwalker-600"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </main>
  );
}
