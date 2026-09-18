
import { Link } from "react-router-dom";

const gameImage =
  "https://bfstatic.io/preview/tadagaming:FortuneGems500@1x.jpeg";

const downloadUrl =
  "https://www.pakarcadeapp.com?code=MJ0D28WXAMD&t=1789636252";

function Hero() {
  return (
    <section className="bg-gray-200">
      <div className="mx-auto max-w-7xl px-5 py-4 sm:px-6 lg:px-8 lg:py-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">

          {/* LEFT SIDE */}
          <div className="order-1">

            <h1 className="text-4xl font-black leading-tight text-slate-900 sm:text-5xl md:text-6xl">
              Welcome to
              <span className="block text-yellow-500">
                FortunesGames500
              </span>
            </h1>

            {/* MOBILE IMAGE */}
            <div className="mt-7 lg:hidden">
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={gameImage}
                  alt="FortunesGames500 Game"
                  className="mx-auto block w-full max-w-[470px] rounded-2xl object-cover shadow-lg"
                />
              </a>
            </div>

            {/* MOBILE DOWNLOAD BUTTON */}
            <div className="mt-6 lg:hidden">
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-xl bg-yellow-400 px-6 py-4 text-center font-bold text-slate-950 transition hover:bg-yellow-300"
              >
                Download Game
              </a>
            </div>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              FortunesGames500 offers a colorful and engaging entertainment
              experience with a modern interface, smooth navigation, and
              enjoyable gameplay. Discover a simple design created for
              entertainment, explore the platform on different devices, and
              enjoy a fast, clean, and user-friendly experience wherever you
              go.
            </p>

            {/* DESKTOP BUTTONS */}
            <div className="mt-7 hidden flex-wrap gap-4 lg:flex">
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-yellow-400 px-6 py-3.5 font-bold text-slate-950 transition hover:bg-yellow-300"
              >
                Download Now
              </a>

              <Link
                to="/about"
                className="rounded-xl border border-slate-400 px-6 py-3.5 font-semibold text-slate-800 transition hover:bg-white"
              >
                Explore More
              </Link>
            </div>

          </div>

          {/* RIGHT SIDE - FORTUNESGAMES500 IMAGE */}
          <div className="order-2 hidden justify-center lg:flex">
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src={gameImage}
                alt="FortunesGames500 Game"
                className="block h-[450px] w-full max-w-[580px] rounded-2xl object-cover shadow-lg transition hover:scale-[1.01]"
              />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;