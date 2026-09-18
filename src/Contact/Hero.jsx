function Hero() {
  return (
    <section className="border-b border-gray-300 bg-gray-200">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-600">
            Contact Us
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            We’d Love to <span className="text-yellow-500">Hear From You</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Have a question, suggestion, or need more information about
            FortunesGames500? Get in touch with us and let us know how we can
            help.
          </p>

          <div className="mx-auto mt-8 h-px w-20 bg-yellow-500" />

          <div className="mx-auto mt-8 max-w-3xl text-sm leading-7 text-slate-500">
            <p>
              FortunesGames500 values communication with its visitors. Whether
              you want to learn more about our website, share feedback,
              discuss available content, or ask a general question, our
              contact section is here to make communication simple and
              straightforward.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <span className="rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600 shadow-sm">
              General Questions
            </span>

            <span className="rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600 shadow-sm">
              Feedback & Suggestions
            </span>

            <span className="rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600 shadow-sm">
              Website Support
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;