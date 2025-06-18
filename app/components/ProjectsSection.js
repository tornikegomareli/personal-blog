"use client";
import { mono } from "../fonts";
import Link from "../Link";

export default function ProjectsSection() {
  const projects = [
    {
      name: "UrbanSportsClub",
      description: "Sports & fitness membership app with access to thousands of venues.",
      logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/ae/d7/cd/aed7cd1c-805b-9d3d-6aec-28f62941a192/AppIcon-Release-0-0-1x_U007ephone-0-1-85-220.png/230x0w.webp",
      link: "https://apps.apple.com/us/app/urban-sports-club/id998362348",
      color: "bg-gray-100"
    },
    {
      name: "Coke Rewards",
      description: "Coca-Cola rewards program app for Georgia market.",
      logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/83/f9/0d/83f90d85-6c11-a650-56ed-77acee361a94/AppIcon-0-0-1x_U007ephone-0-7-0-85-220.png/230x0w.webp",
      link: "https://apps.apple.com/ge/app/coca-cola-rewards-georgia/id6733216376",
      color: "bg-red-50"
    },
    {
      name: "Bank of Georgia",
      description: "Mobile banking app for one of Georgia's leading financial institutions.",
      logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/3f/a8/97/3fa89748-6423-1c8e-7e81-914f1bdd4ca2/AppIcon-0-0-1x_U007emarketing-0-5-0-sRGB-85-220.png/230x0w.webp",
      link: "https://apps.apple.com/us/app/bank-of-georgia/id1159368231",
      color: "bg-orange-50"
    },
    {
      name: "SuperApp",
      description: "All-in-one super app platform for multiple services.",
      logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/0d/6c/0b/0d6c0bcf-1d52-674c-5c88-3442cfed9bde/AppIcon-0-0-1x_U007ephone-0-1-0-85-220.png/230x0w.webp",
      link: "https://apps.apple.com/us/app/superapp-tnet/id6444474250",
      color: "bg-blue-50"
    },
    {
      name: "AnyDesk",
      description: "Remote desktop software for seamless remote access.",
      logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/37/84/44/378444c4-2d01-ae96-bbc3-7b06680f4313/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp",
      link: "https://apps.apple.com/uz/app/tbc-uz-online-mobile-banking/id1450503714",
      color: "bg-red-50"
    },
    {
      name: "Shopthing",
      description: "Luxury shopping app for exclusive deals and products.",
      logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/77/63/e0/7763e037-84c1-51fe-914c-ee4107611e4e/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp",
      link: "https://apps.apple.com/us/app/shopthing-shop-luxury-deals/id1522774665",
      color: "bg-purple-50"
    },
    {
      name: "TBC UZ",
      description: "Mobile banking solution for TBC Bank Uzbekistan.",
      logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/4d/82/18/4d8218eb-fb95-f3ab-99be-e1bca05a36bc/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/230x0w.webp",
      link: "https://apps.apple.com/uz/app/tbc-uz-online-mobile-banking/id1450503714",
      color: "bg-teal-50"
    },
    {
      name: "Halbestunde",
      description: "Sheet music reader app for musicians and music students.",
      logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/b9/08/fc/b908fcbe-783a-8fac-93b8-7ca67275e1bd/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/230x0w.webp",
      link: "https://apps.apple.com/us/app/sheet-music-reader-halbestunde/id1519736220",
      color: "bg-yellow-50"
    },
    {
      name: "Silk TV Go",
      description: "Streaming app for Silk TV entertainment content.",
      logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/de/54/ed/de54edec-b4ac-47c3-b40e-7a6933dfd64d/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.jpeg/230x0w.webp",
      link: "https://apps.apple.com/us/app/silk-tv-go/id911759740",
      color: "bg-indigo-50"
    }
  ];

  return (
    <section id="projects" className="mb-20">
      <h2 className={`${mono.className} text-2xl font-bold text-gray-900 dark:text-white mb-8`}>
        Projects I've Worked On
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className={`${project.color} dark:bg-gray-700 h-48 flex items-center justify-center p-8`}>
                <img
                  src={project.logo}
                  alt={project.name}
                  className="w-32 h-32 object-contain rounded-2xl shadow-lg"
                />
              </div>
              
              <div className="p-6">
                <h3 className={`${mono.className} font-semibold text-lg text-gray-900 dark:text-white mb-2`}>
                  {project.name}
                </h3>
                <p className={`${mono.className} text-sm text-gray-600 dark:text-gray-400`}>
                  {project.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}