import { motion } from 'motion/react';
import { ChevronDown, Sparkles } from 'lucide-react';
import profileImage from 'figma:asset/f9f40aeec9f76bd7ecc599e7fe6b528522a1614d.png';

interface HeroSectionProps {
  onNext: () => void;
}

export function HeroSection({ onNext }: HeroSectionProps) {
  // Particle animation variants
  const particleVariants = {
    animate: {
      y: [0, -20, 0],
      opacity: [0.5, 1, 0.5],
      scale: [0.8, 1.2, 0.8],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#4A2577] via-[#6A35BD] to-[#8B5FD9]">
      {/* Retro wave layers */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Wave layer 1 - Back (darkest) */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-64 opacity-40"
          animate={{
            x: ['-100%', '0%'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg className="absolute bottom-0 w-[200%] h-full" preserveAspectRatio="none" viewBox="0 0 1200 120">
            <path
              d="M0,60 C150,90 350,30 600,60 C850,90 1050,30 1200,60 L1200,120 L0,120 Z"
              fill="#2D1B4E"
            />
          </svg>
        </motion.div>

        {/* Wave layer 2 - Middle */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-56 opacity-50"
          animate={{
            x: ['0%', '-100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg className="absolute bottom-0 w-[200%] h-full" preserveAspectRatio="none" viewBox="0 0 1200 120">
            <path
              d="M0,70 C200,100 400,40 600,70 C800,100 1000,40 1200,70 L1200,120 L0,120 Z"
              fill="#4A2577"
            />
          </svg>
        </motion.div>

        {/* Wave layer 3 - Front (lightest) */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-48 opacity-60"
          animate={{
            x: ['-100%', '0%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg className="absolute bottom-0 w-[200%] h-full" preserveAspectRatio="none" viewBox="0 0 1200 120">
            <path
              d="M0,80 C250,110 450,50 600,80 C750,110 950,50 1200,80 L1200,120 L0,120 Z"
              fill="#6A35BD"
            />
          </svg>
        </motion.div>

        {/* Wave layer 4 - Top accent */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-40 opacity-40"
          animate={{
            x: ['0%', '-100%'],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg className="absolute bottom-0 w-[200%] h-full" preserveAspectRatio="none" viewBox="0 0 1200 120">
            <path
              d="M0,85 C300,105 500,65 600,85 C700,105 900,65 1200,85 L1200,120 L0,120 Z"
              fill="#8B5FD9"
            />
          </svg>
        </motion.div>
      </div>

      {/* Floating bubbles */}
      {[...Array(25)].map((_, i) => {
        const size = Math.random() * 40 + 20;
        const isGold = Math.random() > 0.6;
        const speed = Math.random() * 15 + 10;
        const delay = Math.random() * 5;
        const horizontalDrift = Math.random() * 100 - 50;
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '-10%',
              width: size,
              height: size,
              background: isGold
                ? 'radial-gradient(circle at 30% 30%, rgba(212, 175, 55, 0.6), rgba(212, 175, 55, 0.2))'
                : 'radial-gradient(circle at 30% 30%, rgba(248, 248, 255, 0.5), rgba(248, 248, 255, 0.1))',
              boxShadow: isGold
                ? '0 0 20px rgba(212, 175, 55, 0.4), inset -5px -5px 10px rgba(212, 175, 55, 0.3)'
                : '0 0 15px rgba(248, 248, 255, 0.3), inset -5px -5px 10px rgba(248, 248, 255, 0.2)',
              border: isGold
                ? '2px solid rgba(212, 175, 55, 0.3)'
                : '2px solid rgba(248, 248, 255, 0.2)',
            }}
            animate={{
              y: [0, -window.innerHeight - 100],
              x: [0, horizontalDrift, 0],
              opacity: [0, 1, 1, 0],
              scale: [0.8, 1, 1, 0.8],
            }}
            transition={{
              duration: speed,
              repeat: Infinity,
              delay: delay,
              ease: 'easeInOut',
            }}
          >
            {/* Bubble highlight */}
            <div
              className="absolute top-[20%] left-[25%] w-[30%] h-[30%] rounded-full"
              style={{
                background: isGold
                  ? 'radial-gradient(circle, rgba(255, 255, 255, 0.8), transparent)'
                  : 'radial-gradient(circle, rgba(255, 255, 255, 0.6), transparent)',
              }}
            />
          </motion.div>
        );
      })}

      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center pt-20 lg:pt-0">
        {/* Spotlight effect */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-secondary/20 via-primary/10 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Designer illustration */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'backOut' }}
          className="relative mb-8"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="inline-block relative"
          >
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-4 border-secondary shadow-2xl">
              <img
                src={profileImage}
                alt="Dylan Nathanael Profile"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Sparkle icons */}
            <motion.div
              className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 text-secondary"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" />
            </motion.div>
            <motion.div
              className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 text-primary"
              animate={{ rotate: -360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{ fontFamily: 'var(--font-poppins)' }}
        >
          <motion.h1
            className="mb-4"
            whileHover={{ scale: 1.02 }}
            style={{ fontFamily: 'var(--font-bungee)' }}
          >
            <span className="text-soft-white">Dylan Nathanael</span>
          </motion.h1>
          <motion.p
            className="text-soft-white mb-6 sm:mb-8"
            whileHover={{ scale: 1.02 }}
          >
            UI/UX Designer
          </motion.p>
          <motion.p
            className="max-w-2xl mx-auto text-soft-white/90 px-4 sm:px-0"
          >
            Creating delightful digital experiences through thoughtful design and playful interactions
          </motion.p>
        </motion.div>

        {/* Next button with gamified style */}
        <motion.button
          onClick={onNext}
          className="mt-8 sm:mt-12 group relative px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-full overflow-hidden shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{ fontFamily: 'var(--font-poppins)' }}
        >
          {/* Glowing effect */}
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
            Start Journey
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.span>
          </span>
        </motion.button>
      </div>

      {/* Gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-soft-white pointer-events-none z-20" />
    </section>
  );
}
