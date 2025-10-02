import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company",
  description: "About elbwalker - Privacy-first data collection experts",
};

export default function CompanyPage() {
  return (
    <main className="px-6 py-16 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
          About elbwalker
        </h1>
        <div className="space-y-6 text-lg text-slate-300">
          <p>
            We are a team of data engineers and privacy advocates based in Hamburg, Germany.
            We believe that effective data collection and user privacy are not mutually exclusive.
          </p>
          <p>
            Our mission is to help organizations build privacy-first data infrastructure with walkerOS,
            an open-source platform that puts developers in control of their data collection.
          </p>

          <div className="my-12 rounded-lg border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-2xl font-semibold text-white">Our Values</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="mt-1 h-5 w-5 flex-shrink-0 text-elbwalker" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong className="text-white">Open Source:</strong> We believe in transparency and community collaboration</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-1 h-5 w-5 flex-shrink-0 text-elbwalker" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong className="text-white">Privacy by Design:</strong> User privacy is a fundamental right, not a feature</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-1 h-5 w-5 flex-shrink-0 text-elbwalker" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong className="text-white">Developer Experience:</strong> Tools should empower, not constrain</span>
              </li>
            </ul>
          </div>

          <p>
            Interested in working with us? <a href="mailto:hello@elbwalker.com" className="text-elbwalker hover:underline">Get in touch</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
