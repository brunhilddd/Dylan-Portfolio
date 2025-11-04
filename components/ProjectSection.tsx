import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ExternalLink, ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import groceryImage from 'figma:asset/b09a778b75bcf4410b85d5a6ee45a78eb58bd90e.png';
import aurelLouhanImage from 'figma:asset/270164c137cbbe73d0821613918252ada162b923.png';
import gamingPlatformImage from 'figma:asset/d42cd07e77d0f3b39e24ca8d29c171efa4dd915b.png';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

interface ProjectSectionProps {
  onNext: () => void;
}

export function ProjectSection({ onNext }: ProjectSectionProps) {
  const [currentProject, setCurrentProject] = useState(0);
  const [direction, setDirection] = useState(0);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Grocery Online Apps',
      description: 'Designing Mobile Apps for Grocery order and Inventory Management for grocery',
      tags: ['UI Design', 'UX Research', 'Prototyping'],
      image: groceryImage,
    },
    {
      id: 2,
      title: 'Gaming Top Up Services',
      description: 'Gaming Platform Services that oferring several features such as Voucher Game, Item-In Game and Trade Items',
      tags: ['Website Design', 'Gaming', 'Accessibility'],
      image: gamingPlatformImage,
    },
    {
      id: 3,
      title: 'E-Commerce and Inventory Management',
      description: 'E-Commerce for business named Aurel Louhan that selling several categories and managing the inventory by sistems and AI',
      tags: ['E-Commerce Website Design', 'Prototyping', 'Inventory Management'],
      image: aurelLouhanImage,
    },
  ];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentProject((prev) => {
      const next = prev + newDirection;
      if (next < 0) return projects.length - 1;
      if (next >= projects.length) return 0;
      return next;
    });
  };

  return (
    <section id="project" className="relative min-h-screen py-16 sm:py-24 bg-gradient-to-br from-purple-light to-soft-white overflow-hidden" style={{ fontFamily: 'var(--font-poppins)' }}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-primary mb-4 px-4" style={{ fontFamily: 'var(--font-bungee)' }}>Project Showcase</h2>
          <p className="text-muted-foreground px-4">Welcome to my creative workspace</p>
        </motion.div>

        {/* Game room scene */}
        <div className="relative max-w-6xl mx-auto">
          {/* Room illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-purple-dark to-primary rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 shadow-2xl"
          >
            {/* Window with light - Hidden on mobile */}
            <motion.div
              className="hidden sm:block absolute top-4 sm:top-8 right-4 sm:right-8 w-20 h-20 sm:w-32 sm:h-32 rounded-xl sm:rounded-2xl overflow-hidden border-2 sm:border-4 border-secondary/30 shadow-inner"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(212, 175, 55, 0.2)',
                  '0 0 40px rgba(212, 175, 55, 0.4)',
                  '0 0 20px rgba(212, 175, 55, 0.2)',
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1571697018884-a79e50de113f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwbGFtcCUyMHdpbmRvd3xlbnwxfHx8fDE3NjIyNDUxNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Window view"
                className="w-full h-full object-cover opacity-70"
              />
            </motion.div>

            {/* Desk lamp - Hidden on mobile */}
            <motion.div
              className="hidden sm:block absolute top-2 sm:top-4 left-4 sm:left-8 text-secondary"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="text-4xl sm:text-6xl">💡</div>
            </motion.div>

            {/* Clock - Hidden on mobile */}
            <motion.div
              className="hidden md:block absolute top-4 right-1/3 text-3xl sm:text-4xl"
              animate={{
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              🕐
            </motion.div>

            {/* Main monitor/project display */}
            <div className="relative mx-auto max-w-3xl">
              {/* Monitor frame */}
              <div className="bg-gray-900 rounded-2xl p-2 shadow-2xl">
                {/* Screen */}
                <div className="bg-black rounded-xl overflow-hidden aspect-video relative">
                  <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                      key={currentProject}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: 'spring', stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                      }}
                      className="absolute inset-0"
                    >
                      <ImageWithFallback
                        src={projects[currentProject].image}
                        alt={projects[currentProject].title}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Project overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-6 md:p-8">
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <h3 className="text-white mb-2 text-base sm:text-lg md:text-xl">{projects[currentProject].title}</h3>
                          <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base line-clamp-2 sm:line-clamp-none">{projects[currentProject].description}</p>
                          
                          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                            {projects[currentProject].tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 sm:px-3 py-0.5 sm:py-1 bg-secondary/20 text-secondary rounded-full text-xs sm:text-sm backdrop-blur-sm"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <button className="flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors">
                            <span className="text-xs sm:text-sm">View Project</span>
                            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                          </button>
                        </motion.div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Monitor stand */}
                <div className="mt-2 flex justify-center">
                  <div className="w-32 h-4 bg-gray-800 rounded-t-xl" />
                </div>
              </div>

              {/* Navigation arrows */}
              <button
                onClick={() => paginate(-1)}
                className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 sm:-translate-x-16 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-10"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </button>
              <button
                onClick={() => paginate(1)}
                className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 sm:translate-x-16 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-10"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </button>

              {/* Project indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentProject ? 1 : -1);
                      setCurrentProject(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentProject
                        ? 'bg-secondary w-8'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Decorative items */}
            <motion.div
              className="absolute bottom-8 left-8 text-4xl"
              animate={{ rotate: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ☕
            </motion.div>
            <motion.div
              className="absolute bottom-8 right-8 text-4xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🪴
            </motion.div>
          </motion.div>
        </div>

        {/* Next button */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={onNext}
            className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full overflow-hidden shadow-lg"
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
              View Skills
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
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple-light to-transparent pointer-events-none z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-soft-white pointer-events-none z-20" />
    </section>
  );
}
