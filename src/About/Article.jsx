import { CheckCircle2 } from "lucide-react";

function Article() {
  const points = [
    "Modern and responsive interface",
    "Simple navigation between pages",
    "Designed for casual entertainment",
    "Mobile-friendly layout",
    "Fast and lightweight frontend",
    "Clean visual experience",
  ];

  return (
    <section className="bg-gray-200">
      <div className="mx-auto max-w-5xl px-5 py-20">
        <h2 className="text-3xl font-black text-slate-900">
          A modern entertainment platform
        </h2>

        <div className="mt-6 space-y-5 leading-8 text-slate-600">
          <p>
            FortunesGames500 is designed as a modern entertainment platform
            with a clean and engaging digital experience. The website focuses
            on simple navigation, organized content, and a responsive layout
            that makes it easy for visitors to explore different sections.
          </p>

          <p>
            The interface has been developed using React and Tailwind CSS,
            providing a flexible frontend structure that works smoothly across
            desktop, tablet, and mobile devices. Reusable components help keep
            the website organized while making it easier to improve and expand
            the platform in the future.
          </p>

          <p>
            FortunesGames500 combines a simple visual style with practical
            navigation. Each section is designed to provide clear information
            without unnecessary complexity, helping visitors move through the
            website comfortably.
          </p>

          <p>
            The responsive design ensures that the website maintains a
            consistent appearance on different screen sizes. Layout spacing,
            typography, buttons, cards, and content sections are structured to
            provide a comfortable browsing experience on both larger screens
            and mobile devices.
          </p>

          <p>
            Another important part of FortunesGames500 is its lightweight
            frontend structure. By keeping the interface organized and using
            reusable React components, the project can be maintained and
            expanded more easily as new sections and features are introduced.
          </p>

          <p>
            The platform also focuses on maintaining a distinctive visual
            identity. The yellow and slate color combination, clean cards,
            responsive sections, and straightforward typography create a
            consistent appearance throughout the website.
          </p>

          <p>
            As the project continues to develop, additional content, improved
            graphics, animations, and interface enhancements can be introduced.
            The current structure provides a strong foundation for creating a
            polished and user-friendly entertainment website.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {points.map((point) => (
            <div
              key={point}
              className="flex items-center gap-3 rounded-xl border border-gray-300 bg-white p-4"
            >
              <CheckCircle2
                className="shrink-0 text-yellow-500"
                size={20}
              />
              <span className="text-slate-700">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Article;