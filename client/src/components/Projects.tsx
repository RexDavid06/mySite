import { useEffect, useRef, useState } from 'react';
import ProjectCard, { type ProjectProps } from './ProjectCard';
import { Button } from '@/components/ui/button';

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState<Set<number>>(new Set());
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Mock project data - todo: remove mock functionality
  const projects: ProjectProps[] = [
    {
      title: "PayFlow API",
      description: "Built a fintech-style banking API supportingwallet creation, account validation,peer-to-peer transfers, transaction history,and atomic balance updates. ",
      liveUrl: "",
      techStack: ["Python", "DjangoRest_Framework", "PostgreSQL", "Docker" ],
      githubUrl: "https://github.com/RexDavid06/e-bankAPI"
    },
    
    {
      title: " User Wallet API",
      description: "A secure and minimal User Wallet API built with Django and Django REST Framework.This project demonstrates fintech-grade wallet logic, including safe money handling using Decimal, atomic transactions, and JWT authentication..",
      techStack: ["Python", "DjangoRest_Framework",],
      liveUrl: "https://userwalletapi.onrender.com/",
      githubUrl: "https://github.com/RexDavid06/User-Wallet-Api"
    },
     {
      title: " p2p payment API",
      description: "A peer-to-peer payment API built with Django REST Framework that allows users to create accounts, manage wallets, and perform secure fund transfers between users. The API includes features such as user authentication, wallet balance management, and transaction history tracking.",
      techStack: ["Python", "DjangoRest_Framework", "PostgreSQL", "Docker", "SwaggerDocs"],
      liveUrl: "",
      githubUrl: "https://github.com/RexDavid06/p2p-API"
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
