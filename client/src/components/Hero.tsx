import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  onScrollToProjects: () => void;
}

export default function Hero({ onScrollToProjects }: HeroProps) {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-chart-2/10 to-transparent"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Software Developer
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-light">
              Building digital experiences with modern web technologies
            </p>
          </div>

          {/* Description */}
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in building reliable and scalable backend systems with Python and Django, 
                and I enjoy working with REST APIs and modern web technologies. 
                Passionate about clean architecture, performance, and creating solutions that are both 
                efficient and impactful.
            </p>
        </div>


          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={onScrollToProjects}
              data-testid="button-view-projects"
              className="min-w-[160px]"
            >
              View My Work
            </Button>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open('https://github.com/RexDavid06', '_blank')}
                data-testid="button-github"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open('https://linkedin.com/in/rex-david-buchi-54493a241/', '_blank')}
                data-testid="button-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open('mailto:rhexmilia06@gmail.com')}
                data-testid="button-email"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={onScrollToProjects}
          className="p-2 rounded-full hover:bg-muted/50 transition-colors"
          data-testid="button-scroll-down"
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </button>
      </div>
    </section>
  );
}