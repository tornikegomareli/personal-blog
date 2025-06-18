"use client";
import { mono } from "../fonts";
import Link from "../Link";

export default function ProjectsSection() {
  const projects = [
    {
      name: "Urban Sports Club",
      description: "A web application for managing sports activities and memberships efficiently.",
      logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/ae/d7/cd/aed7cd1c-805b-9d3d-6aec-28f62941a192/AppIcon-Release-0-0-1x_U007ephone-0-1-85-220.png/230x0w.webp",
      link: "https://apps.apple.com/us/app/urban-sports-club/id998362348",
      color: "bg-gray-100",
      image: "/api/placeholder/300/200"
    },
    {
      name: "Bank of Georgia",
      description: "A mobile app for tracking finances and managing bank accounts seamlessly.",
      logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/3f/a8/97/3fa89748-6423-1c8e-7e81-914f1bdd4ca2/AppIcon-0-0-1x_U007emarketing-0-5-0-sRGB-85-220.png/230x0w.webp",
      link: "https://apps.apple.com/us/app/bank-of-georgia/id1159368231",
      color: "bg-red-50",
      image: "/api/placeholder/300/200"
    },
    {
      name: "SuperApp",
      description: "A cloud-based solution for scalable data processing and management.",
      logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/0d/6c/0b/0d6c0bcf-1d52-674c-5c88-3442cfed9bde/AppIcon-0-0-1x_U007ephone-0-1-0-85-220.png/230x0w.webp",
      link: "https://apps.apple.com/us/app/superapp-tnet/id6444474250",
      color: "bg-teal-50",
      image: "/api/placeholder/300/200"
    }
  ];

  return (
    <section id="projects" className="mb-20">
      <h2 className={`${mono.className} text-2xl font-bold text-gray-900 dark:text-white mb-8`}>
        Recent Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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