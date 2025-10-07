import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      <main className="container mx-auto px-4 md:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <Image
            src="/elbwalker_logo_centred_trans.png"
            alt="elbwalker logo"
            width={150}
            height={150}
            className="mx-auto mb-8"
          />
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
            About us
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            We're building an open source library to simplify tracking
            implementation for developers and help them do reliable tag
            management: config-as-code, git support, CLI-based.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Our story
          </h2>
          <div className="mt-8 max-w-3xl mx-auto space-y-6 text-gray-300">
            <p>
              In 2018, Alexander started to work on walker.js, a lightweight
              library for web tracking based on tagging DOM attributes. Later
              that year, Ayla joined to create a company around Digital
              Analytics and they founded elbwalker to have a home for all their
              consulting projects and product ideas.
            </p>
            <p>
              In 2022 after building and implementing walker.js as a closed
              product for some time, we decided to open-source walkerOS, the
              further development of walker.js. This decision best fits to our
              mission: Enable full data ownership.
            </p>
            <p>
              We are not backed by a VC and are funding the development of
              walkerOS through consulting and support.
            </p>
            <p>
              Feel free to reach out to hello@elbwalker.com for any questions :)
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href="https://walkeros.io"
            className="text-[#01b5e2] hover:underline font-semibold"
          >
            <svg
              className="inline-block w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            back to walkeros.io
          </a>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Core Team
          </h2>
          <div className="mt-8 max-w-3xl mx-auto space-y-6 text-gray-300 text-center">
            <p>We are based in Hamburg and work full-time on walkerOS.</p>
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="text-center">
              <Image
                src="/alexander größer.png"
                alt="Alexander"
                width={128}
                height={128}
                className="rounded-full mx-auto"
              />
              <h3 className="mt-4 text-xl font-bold">Alexander</h3>
              <p className="text-gray-300">Co-Founder</p>
            </div>
            <div className="text-center">
              <Image
                src="/ayla.png"
                alt="Ayla"
                width={128}
                height={128}
                className="rounded-full mx-auto"
              />
              <h3 className="mt-4 text-xl font-bold">Ayla</h3>
              <p className="text-gray-300">Co-Founder</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
