import { motion } from 'motion/react';
import { Figma, Palette, Users, ChevronDown } from 'lucide-react';

interface SkillSectionProps {
  onNext: () => void;
}

export function SkillSection({ onNext }: SkillSectionProps) {
  const skillCategories = [
    {
      id: 1,
      title: 'UI Design Tools',
      skills: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator'],
      icon: Figma,
      color: '#FFD93D',
      rotation: -3,
      top: '10%',
      left: '15%',
    },
    {
      id: 2,
      title: 'UX Research & Prototyping',
      skills: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing', 'A/B Testing'],
      icon: Palette,
      color: '#A8E6CF',
      rotation: 2,
      top: '15%',
      left: '45%',
    },
    {
      id: 3,
      title: 'Design Thinking & Collaboration',
      skills: ['Design Systems', 'Team Leadership', 'Agile', 'Presentation', 'Mentoring'],
      icon: Users,
      color: '#FFB6C1',
      rotation: -2,
      top: '12%',
      left: '75%',
    },
  ];

  return (
    <section id="skill" className="relative min-h-screen py-16 sm:py-24 bg-gradient-to-br from-soft-white via-purple-light to-soft-white overflow-hidden" style={{ fontFamily: 'var(--font-poppins)' }}>
      {/* Background texture */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzZBMzVCRCIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L2c+PC9zdmc+')] bg-repeat" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-primary mb-4 px-4" style={{ fontFamily: 'var(--font-bungee)' }}>Skills & Expertise</h2>
          <p className="text-muted-foreground px-4">My creative toolkit pinned on the wall</p>
        </motion.div>

        {/* Wall with sticky notes */}
        <div className="relative max-w-6xl mx-auto min-h-[500px] sm:min-h-[600px]">
          {/* Wall background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl sm:rounded-3xl shadow-2xl"
          >
            {/* Wall texture lines */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-full h-px bg-gray-400"
                  style={{ top: `${(i + 1) * 10}%` }}
                />
              ))}
            </div>
          </motion.div>

          {/* Sticky notes */}
          <div className="md:hidden space-y-6 relative pt-6 px-4">
            {/* Mobile Stack Layout */}
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true }}
                  className="relative w-full cursor-pointer"
                >
                  {/* Pin */}
                  <motion.div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-6 z-10"
                    animate={{
                      y: [0, -2, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  >
                    <div className="w-full h-full relative">
                      <div className="absolute inset-0 bg-red-500 rounded-full" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-red-700 rounded-full" />
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-3 bg-gray-400" />
                    </div>
                  </motion.div>

                  {/* Sticky note */}
                  <div
                    className="relative p-4 rounded-lg shadow-xl"
                    style={{
                      backgroundColor: category.color,
                    }}
                  >
                    {/* Shadow/depth effect */}
                    <div className="absolute inset-0 bg-black/5 rounded-lg translate-x-1 translate-y-1 -z-10" />

                    {/* Icon */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-white/50 rounded-full flex items-center justify-center">
                        <Icon className="w-4 h-4 text-purple-dark" />
                      </div>
                      <h3 className="text-purple-dark text-base">{category.title}</h3>
                    </div>

                    {/* Skills list */}
                    <ul className="space-y-1.5">
                      {category.skills.map((skill) => (
                        <li key={skill} className="flex items-center gap-2 text-purple-dark">
                          <div className="w-1 h-1 bg-purple-dark rounded-full" />
                          <span className="text-sm">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Desktop Scattered Layout */}
          <div className="hidden md:block">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: category.rotation }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  type: 'spring',
                  stiffness: 200,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  rotate: 0,
                  transition: { duration: 0.2 },
                }}
                className="absolute w-64 lg:w-72 cursor-pointer"
                style={{
                  top: category.top,
                  left: category.left,
                  transform: 'translate(-50%, 0)',
                }}
              >
                {/* Pin */}
                <motion.div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 z-10"
                  animate={{
                    y: [0, -2, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  <div className="w-full h-full relative">
                    <div className="absolute inset-0 bg-red-500 rounded-full" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-red-700 rounded-full" />
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-1 h-4 bg-gray-400" />
                  </div>
                </motion.div>

                {/* Sticky note */}
                <div
                  className="relative p-6 rounded-lg shadow-xl"
                  style={{
                    backgroundColor: category.color,
                  }}
                >
                  {/* Shadow/depth effect */}
                  <div className="absolute inset-0 bg-black/5 rounded-lg translate-x-1 translate-y-1 -z-10" />

                  {/* Icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-white/50 rounded-full flex items-center justify-center">
                      <Icon className="w-5 h-5 text-purple-dark" />
                    </div>
                    <h3 className="text-purple-dark">{category.title}</h3>
                  </div>

                  {/* Skills list */}
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.li
                        key={skill}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.15 + skillIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-purple-dark"
                      >
                        <div className="w-1.5 h-1.5 bg-purple-dark rounded-full" />
                        <span className="text-sm">{skill}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tape effect on corners */}
                  <div className="absolute -top-2 left-4 w-12 h-6 bg-white/40 -rotate-45 rounded-sm" />
                  <div className="absolute -top-2 right-4 w-12 h-6 bg-white/40 rotate-45 rounded-sm" />
                </div>
              </motion.div>
            );
          })}
          </div>

          {/* Additional decorative sticky notes - Desktop only */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="hidden md:block absolute bottom-12 left-12 w-16 h-16 lg:w-20 lg:h-20 bg-purple-light rounded-lg shadow-lg rotate-12"
          >
            <div className="w-full h-full flex items-center justify-center text-3xl lg:text-4xl">✨</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
            className="hidden md:block absolute bottom-12 right-12 w-20 h-20 lg:w-24 lg:h-24 bg-secondary/30 rounded-lg shadow-lg -rotate-6"
          >
            <div className="w-full h-full flex items-center justify-center text-3xl lg:text-4xl">🎨</div>
          </motion.div>
        </div>

        {/* Next button */}
        <motion.div
          className="text-center mt-12 sm:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
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
              Get in Touch
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
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-soft-white to-transparent pointer-events-none z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-purple-light/50 to-primary pointer-events-none z-20" />
    </section>
  );
}
