import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Skills() {
  const skillCategories = [
    {
      title: "My Stack", 
      skills: ["Python", "DjangoRestFramework", "PostgreSQL", "Docker", "Redis"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Vercel", "Render", "Postman", "Docker"]
    },
    {
      title: "Core Competencies",
      skills: ["Problem Solving", "Team Collaboration", "Agile/Scrum", "Code Review", "Testing", "Performance Optimization"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of the technologies, tools, and practices I use to 
            build robust backend systems, design efficient APIs, and deliver scalable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="hover-elevate transition-all duration-300"
              data-testid={`card-skill-category-${index}`}
            >
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                      data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
