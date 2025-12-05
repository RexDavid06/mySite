import { useEffect, useRef, useState } from 'react';
import ProjectCard, { type ProjectProps } from './ProjectCard';
import { Button } from '@/components/ui/button';

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState<Set<number>>(new Set());
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Mock project data - todo: remove mock functionality
  const projects: ProjectProps[] = [
    {
      title: "MinstrelHub API",
      description: "A Django REST API that handles user authentication, client/musician roles, and provides endpoints for listing, verifying, and managing musicians on the MinstrelHub platform",
      liveUrl: "https://minstrelhubapi.onrender.com",
      techStack: ["Python", "Django", "DjangoRest_Framework", ],
      githubUrl: "https://github.com/RexDavid06/minstrelHubAPI"
    },
    {
      title: "Inventory Management System",
      description: "An Inventory Management System built with Django 5, designed to help businesses efficiently track their products, stock levels, suppliers, and transactions (stock in & stock out).",
      techStack: ["Python", "Django", "Html", "CSS3", "PostgreSQL"],
      liveUrl: "",
      githubUrl: "https://github.com/RexDavid06/inventory"
    },
    {
      title: "QuoteAPI with caching using REDIS",
      description: "A small Django project built to learn Redis. It serves quotes and caches responses for 20 seconds, demonstrating how Redis improves performance on repeated requests. It also tracks total visits and each user’s visits using Redis counters.",
      techStack: ["DjangoRest_Framework", "Python", "Redis"],
      liveUrl: "https://quotepulseapi.onrender.com/quote",
      githubUrl: "https://github.com/RexDavid06/QuotePulseApi"
    },
   
  ];

  useEffect(() => {
    const observers = projectRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleProjects(prev => new Set(Array.from(prev).concat(index)));
          }
        },
        {
          threshold: 0.1,
          rootMargin: '50px 0px'
        }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in backend development, 
            API design, and building scalable solutions with modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              className={`transform transition-all duration-700 ${
                visibleProjects.has(index)
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
              style={{
                transitionDelay: `${(index % 3) * 100}ms`
              }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild>
            <a
              href="https://github.com/RexDavid06"
              target="_blank"
              rel="noopener noreferrer"
            >
              View More on my GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}