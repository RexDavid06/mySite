import ProjectCard from '../ProjectCard';

export default function ProjectCardExample() {
  return (
    <div className="max-w-sm">
      <ProjectCard
        title="E-Commerce Platform"
        description="A full-featured online store with shopping cart, payment integration, and admin dashboard. Built with modern web technologies for optimal performance."
        techStack={['React', 'TypeScript', 'Node.js', 'PostgreSQL']}
        liveUrl="https://example.com"
        githubUrl="https://github.com/user/project"
      />
    </div>
  );
}