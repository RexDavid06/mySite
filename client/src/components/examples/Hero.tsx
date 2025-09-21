import Hero from '../Hero';

export default function HeroExample() {
  const handleScrollToProjects = () => {
    console.log('Scroll to projects triggered');
  };

  return <Hero onScrollToProjects={handleScrollToProjects} />;
}