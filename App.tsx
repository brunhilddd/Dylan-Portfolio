import { useRef } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectSection } from './components/ProjectSection';
import { SkillSection } from './components/SkillSection';
import { InformationSection } from './components/InformationSection';

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const informationRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionId: string) => {
    const refs: { [key: string]: React.RefObject<HTMLDivElement> } = {
      home: heroRef,
      experience: experienceRef,
      project: projectRef,
      skill: skillRef,
      information: informationRef,
    };

    const targetRef = refs[sectionId];
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToNextSection = (currentSection: string) => {
    const sections = ['home', 'experience', 'project', 'skill', 'information'];
    const currentIndex = sections.indexOf(currentSection);
    if (currentIndex < sections.length - 1) {
      scrollToSection(sections[currentIndex + 1]);
    }
  };

  return (
    <div className="relative min-h-screen">
      <Header onNavigate={scrollToSection} />
      
      <div ref={heroRef}>
        <HeroSection onNext={() => scrollToNextSection('home')} />
      </div>
      
      <div ref={experienceRef}>
        <ExperienceSection onNext={() => scrollToNextSection('experience')} />
      </div>
      
      <div ref={projectRef}>
        <ProjectSection onNext={() => scrollToNextSection('project')} />
      </div>
      
      <div ref={skillRef}>
        <SkillSection onNext={() => scrollToNextSection('skill')} />
      </div>
      
      <div ref={informationRef}>
        <InformationSection />
      </div>
    </div>
  );
}
