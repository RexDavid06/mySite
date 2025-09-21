import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { forwardRef } from 'react';

export interface ProjectProps {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = forwardRef<HTMLDivElement, ProjectProps>(({
  title,
  description,
  techStack,
  liveUrl,
  githubUrl
}, ref) => {
  const handleLiveClick = () => {
    if (liveUrl) {
      window.open(liveUrl, '_blank');
    }
    console.log('Live demo clicked:', title);
  };

  const handleGithubClick = () => {
    if (githubUrl) {
      window.open(githubUrl, '_blank');
    }
    console.log('GitHub clicked:', title);
  };

  return (
    <Card 
      ref={ref}
      className="hover-elevate transition-all duration-300 h-full flex flex-col"
      data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {/* Project Preview Area */}
      <div className="h-48 bg-gradient-to-br from-accent/20 to-chart-2/20 border-b border-border flex items-center justify-center">
        <div className="text-center text-muted-foreground">
          <div className="w-16 h-16 bg-accent/30 rounded-full flex items-center justify-center mx-auto mb-2">
            <ExternalLink className="h-8 w-8 text-accent" />
          </div>
          <p className="text-sm font-medium">Project Preview</p>
        </div>
      </div>

      <CardContent className="p-6 flex-grow">
        <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">{description}</p>
        
        {/* Tech Stack */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-foreground">Tech Stack:</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-xs"
                data-testid={`badge-tech-${tech.toLowerCase()}`}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex gap-3">
        {liveUrl && (
          <Button 
            onClick={handleLiveClick}
            className="flex-1"
            data-testid={`button-live-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Live Demo
          </Button>
        )}
        {githubUrl && (
          <Button 
            variant="outline" 
            onClick={handleGithubClick}
            className={liveUrl ? "" : "flex-1"}
            data-testid={`button-github-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <Github className="h-4 w-4 mr-2" />
            GitHub
          </Button>
        )}
      </CardFooter>
    </Card>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;