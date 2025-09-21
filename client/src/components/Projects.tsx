import { useEffect, useRef, useState } from 'react';
import ProjectCard, { type ProjectProps } from './ProjectCard';
import { Button } from '@/components/ui/button';

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState<Set<number>>(new Set());
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Mock project data - todo: remove mock functionality
  const projects: ProjectProps[] = [
    {
      title: "Contact API",
      description: "A simple Contact Book API built with Django REST Framework, using ViewSets and Routers to provide full CRUD functionality. Authentication is handled using JWT (JSON Web Tokens) via djangorestframework-simplejwt.",
      liveUrl: "",
      techStack: ["Python", "Django", "DjangoRest_Framework",  "PostgreSQL"],
      githubUrl: "https://github.com/RexDavid06/contact-API"
    },
    {
      title: "Inventory Management System",
      description: "An Inventory Management System built with Django 5, designed to help businesses efficiently track their products, stock levels, suppliers, and transactions (stock in & stock out).",
      techStack: ["Python", "Django", "Html", "CSS3", "PostgreSQL"],
      liveUrl: "",
      githubUrl: "https://github.com/RexDavid06/inventory"
    },
    {
      title: "CharziClean",
      description: "CharziClean is a Django-powered e-commerce platform offering a range of cleaning and lifestyle products. Includes dynamic product filtering, category-based navigation, and user-friendly design.",
      techStack: ["Django", "Python", "HTML", "CSS"],
      liveUrl: "",
      githubUrl: "https://github.com/RexDavid06/charziclean"
    },
    {
      title: "Blog Application",
      description: "A Django-powered blog application where users can sign up, create posts, and manage their profile. This project demonstrates core Django features including user authentication, model relationships, and basic frontend styling.",
      techStack: ["Django", "Python", "HTML", "CSS"],
      liveUrl: "",
      githubUrl: "https://github.com/RexDavid06/blogApp"
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