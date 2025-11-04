import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Briefcase, GraduationCap, Trophy, Star, ChevronDown } from 'lucide-react';

interface Experience {
  id: number;
  type: 'intern' | 'freelance';
  title: string;
  company: string;
  date: string;
  description: string;
  icon: any;
  level: number;
}

interface ExperienceSectionProps {
  onNext: () => void;
}

export function ExperienceSection({ onNext }: ExperienceSectionProps) {
  const [carProgress, setCarProgress] = useState(0);
  const { scrollYProgress } = useScroll();

  const experiences: Experience[] = [
    {
      id: 1,
      type: 'freelance',
      title: 'UI/UX Jockey for Students',
      company: 'UI/UX Service',
      date: '2023 - 2024',
      description: 'Designed scalable products',
      icon: Briefcase,
      level: 1,
    },
    {
      id: 2,
      type: 'intern',
      title: 'System Analyst Intern',
      company: 'Sokrates Empowering School',
      date: 'Feb 2025 - Feb 2026',
      description: 'Learned system flow and design',
      icon: GraduationCap,
      level: 2,
    },
    {
      id: 3,
      type: 'freelance',
      title: 'Freelance UI/UX Designer',
      company: 'Various Clients',
      date: '2024 - Present',
      description: 'Built diverse portfolio',
      icon: Star,
      level: 3,
    },


  ];

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      // Adjust these values based on when the experience section is visible
      // Reduced from 0.3 to 0.15 to make car move 2x faster
      const sectionProgress = Math.max(0, Math.min(1, (v - 0.15) / 0.15));
      setCarProgress(sectionProgress);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section id="experience" className="relative min-h-screen py-16 sm:py-24 bg-gradient-to-br from-soft-white to-purple-light overflow-hidden" style={{ fontFamily: 'var(--font-poppins)' }}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-primary mb-4 px-4" style={{ fontFamily: 'var(--font-bungee)' }}>Experience Journey</h2>
          <p className="text-muted-foreground px-4">Level up through my career progression</p>
        </motion.div>

        {/* Journey path */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical progress line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2">
            <motion.div
              className="w-full bg-gradient-to-b from-primary to-secondary origin-top"
              style={{
                height: `${carProgress * 100}%`,
              }}
            />
          </div>

          {/* Animated car on the path */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 z-20"
            style={{
              top: `${carProgress * 85}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg border-2 sm:border-4 border-white"
            >
              <span className="text-lg sm:text-xl">🚗</span>
            </motion.div>
          </motion.div>

          {/* Experience cards */}
          <div className="space-y-16 sm:space-y-24 relative">
            {experiences.map((exp, index) => {
              const isLeft = exp.type === 'intern';
              const Icon = exp.icon;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${isLeft ? 'md:justify-start justify-center' : 'md:justify-end justify-center'}`}
                >
                  <div className={`w-full md:w-5/12 px-4 sm:px-0 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl border-2 border-primary/10 relative"
                    >
                      {/* Level badge */}
                      <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg">
                        <span className="text-xs sm:text-sm">Lv.{exp.level}</span>
                      </div>

                      <div className={`flex items-start gap-3 mb-3 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                          <h3 className="text-primary mb-1">{exp.title}</h3>
                          <p className="text-muted-foreground text-sm">{exp.company}</p>
                        </div>
                      </div>

                      <p className={`text-sm text-muted-foreground mb-2 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>{exp.date}</p>
                      <p className={`text-sm text-foreground/70 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>{exp.description}</p>

                      {/* Achievement stars */}
                      <div className={`flex gap-1 mt-3 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                        {Array.from({ length: exp.level }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Next Section Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16 sm:mt-24"
        >
          <motion.button
            onClick={onNext}
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-full overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-secondary via-primary to-secondary"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{ opacity: 0.3 }}
            />
            
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.span>
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Gradient transitions */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-soft-white to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-purple-light pointer-events-none" />
    </section>
  );
}
