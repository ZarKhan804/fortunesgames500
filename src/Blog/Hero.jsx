function Hero() {
  return (
    <section className="border-b border-gray-300 bg-gray-200">
      <div className="mx-auto max-w-5xl px-5 py-14 text-center sm:px-8">

        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-yellow-500" />

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-600">
            Latest Updates
          </p>

          <span className="h-px w-10 bg-yellow-500" />
        </div>

        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
          FortunesGames500 <span className="text-yellow-500">Blog</span>
        </h1>

        <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-yellow-400" />

        <article className="mx-auto mt-7 max-w-3xl text-left">
          <p className="text-base leading-8 text-slate-600">
            Welcome to the FortunesGames500 Blog, a dedicated space for
            entertainment updates, website improvements, design insights,
            gaming interface ideas, and useful information about the
            platform. Here you can discover articles covering the latest
            changes and explore how modern digital entertainment websites
            are designed and developed.
          </p>

          <p className="mt-4 text-base leading-8 text-slate-600">
            Our articles focus on creating a clear and enjoyable reading
            experience while keeping information simple and accessible.
            From responsive design and mobile-friendly layouts to interface
            improvements and new content, the blog provides an easy way to
            stay updated with the platform.
          </p>

          <p className="mt-4 text-base leading-8 text-slate-600">
            FortunesGames500 continues to focus on modern web design,
            responsive layouts, fast loading performance, and a user-friendly
            experience. The blog is designed to share useful insights,
            platform updates, and information related to digital
            entertainment and website development.
          </p>
        </article>

        <div className="mt-7 flex flex-wrap justify-center gap-2">
          {[
            "Entertainment",
            "Gaming Design",
            "Latest Updates",
            "Web Design",
            "Mobile Experience",
          ].map((keyword) => (
            <span
              key={keyword}
              className="rounded-full border border-gray-300 bg-white px-4 py-2 text-xs font-semibold text-slate-600"
            >
              {keyword}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Hero;