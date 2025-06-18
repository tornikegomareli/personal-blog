"use client";
import { sans } from "./fonts";
import Link from "./Link";

export default function IntroSection() {
  const myApps = [
    {
      name: "UrbanSportsClub",
      logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/ae/d7/cd/aed7cd1c-805b-9d3d-6aec-28f62941a192/AppIcon-Release-0-0-1x_U007ephone-0-1-85-220.png/230x0w.webp",
      link: "https://apps.apple.com/us/app/urban-sports-club/id998362348",
    },
    {
      name: "Coke Rewards",
      logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/83/f9/0d/83f90d85-6c11-a650-56ed-77acee361a94/AppIcon-0-0-1x_U007ephone-0-7-0-85-220.png/230x0w.webp",
      link: "https://apps.apple.com/ge/app/coca-cola-rewards-georgia/id6733216376",
    },
    {
      name: "Bank of Georgia",
      logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/3f/a8/97/3fa89748-6423-1c8e-7e81-914f1bdd4ca2/AppIcon-0-0-1x_U007emarketing-0-5-0-sRGB-85-220.png/230x0w.webp",
      link: "https://apps.apple.com/us/app/bank-of-georgia/id1159368231",
    },
    {
      name: "SuperApp",
      logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/0d/6c/0b/0d6c0bcf-1d52-674c-5c88-3442cfed9bde/AppIcon-0-0-1x_U007ephone-0-1-0-85-220.png/230x0w.webp",
      link: "https://apps.apple.com/us/app/superapp-tnet/id6444474250",
    },
    {
      name: "AnyDesk",
      logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/37/84/44/378444c4-2d01-ae96-bbc3-7b06680f4313/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp",
      link: "https://apps.apple.com/uz/app/tbc-uz-online-mobile-banking/id1450503714",
    },
    {
      name: "Shopthing",
      logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/77/63/e0/7763e037-84c1-51fe-914c-ee4107611e4e/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp",
      link: "https://apps.apple.com/us/app/shopthing-shop-luxury-deals/id1522774665",
    },
    {
      name: "TBC UZ",
      logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/4d/82/18/4d8218eb-fb95-f3ab-99be-e1bca05a36bc/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/230x0w.webp",
      link: "https://apps.apple.com/uz/app/tbc-uz-online-mobile-banking/id1450503714",
    },
    {
      name: "Halbestunde",
      logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/b9/08/fc/b908fcbe-783a-8fac-93b8-7ca67275e1bd/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/230x0w.webp",
      link: "https://apps.apple.com/us/app/sheet-music-reader-halbestunde/id1519736220",
    },
    {
      name: "Silk TV Go",
      logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/de/54/ed/de54edec-b4ac-47c3-b40e-7a6933dfd64d/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.jpeg/230x0w.webp",
      link: "https://apps.apple.com/us/app/silk-tv-go/id911759740",
    },
  ];

  return (
    <section className="mb-14">
      <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <div className="w-52 h-52 md:w-52 md:h-52 rounded-full overflow-hidden dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 mx-auto md:mx-0">
            <img
              src="https://avatars.githubusercontent.com/u/24585160?v=4"
              alt="Tornike Gomareli"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%234A5568'/%3E%3Ctext x='50' y='50' font-family='sans-serif' font-size='20' text-anchor='middle' dominant-baseline='middle' fill='white'%3ETG%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>
        </div>

        <div className="flex-grow text-center md:text-left">
          <p className={`${sans.className} text-lg mb-2`}>
            Hi, I'm a software engineer based in Europe. Specialized in Swift,
            systems programming and mobile engineering. I am also writing in
            Rust for my side projects. I write about programming, engineering
            challenges, and just my journey in tech. You can follow me on{" "}
            <Link
              href="https://twitter.com/tornikegomareli"
              className="text-[--link] hover:underline"
            >
              Twitter
            </Link>{" "}
            and check out my code on{" "}
            <Link
              href="https://github.com/tornikegomareli"
              className="text-[--link] hover:underline"
            >
              GitHub
            </Link>
            {". "}
            Also I am creating Technical podcast about engineering on Youtube{" "}
            <Link
              href="https://www.youtube.com/@Devtherapy"
              className="text-[--link] hover:underline"
            >
              @Devtherapy
            </Link>{" "}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <p className={`${sans.className} text-lg text-center mb-4`}>
          Here are a few projects I've worked on, built, and deployed:
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {myApps.map((app, index) => (
            <Link
              key={index}
              href={app.link}
              className="group"
              target="_blank"
            >
              <div
                className="w-20 h-20 overflow-hidden flex items-center justify-center rounded-2xl transition-all duration-200 hover:scale-105 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md"
              >
                {app.logo ? (
                  <img
                    src={app.logo}
                    alt={`${app.name} logo`}
                    className="w-full h-full object-cover rounded-2xl"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = "none";
                    }}
                  />
                ) : null}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
