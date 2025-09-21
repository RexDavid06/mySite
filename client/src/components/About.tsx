import { Card, CardContent } from '@/components/ui/card';
import { Code2, Lightbulb, Users, Zap } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code with modern best practices'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Turning complex challenges into elegant, user-friendly solutions'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams to deliver exceptional results'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed and exceptional user experience'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Description */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm Buchi Rex-David, a passionate backend developer with expertise in Python, Django, 
              and modern web technologies. I enjoy building scalable applications, APIs, and platforms 
             that solve real-world problems and deliver meaningful user experiences.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in software development is fueled by curiosity and continuous learning. 
              From e-commerce projects to API-driven platforms, I focus on writing clean, maintainable code 
              while staying current with the latest industry tools and practices.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond coding, I enjoy contributing to the tech community through content creation, mentoring 
              aspiring developers, and exploring innovations in robotics and AI. 
              Every project is an opportunity to grow and share knowledge.
            </p>

          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="hover-elevate transition-all duration-300"
                data-testid={`card-highlight-${index}`}
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-accent/10 rounded-full">
                      <highlight.icon className="h-8 w-8 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}