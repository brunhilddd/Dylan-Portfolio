import { motion } from 'motion/react';
import { Phone, Instagram, Globe, Mail, MapPin } from 'lucide-react';

export function InformationSection() {
  const contactMethods = [
    {
      id: 1,
      icon: Phone,
      title: 'Phone',
      value: '+62 821 1004 4292',
      href: 'tel:+6282110044292',
      emoji: '📞',
      description: 'Call me anytime',
    },
    {
      id: 2,
      icon: Instagram,
      title: 'Instagram',
      value: '@pixel_brun',
      href: 'https://instagram.com/pixel_brun',
      emoji: '📱',
      description: 'Follow my journey',
    },
    {
      id: 3,
      icon: Globe,
      title: 'Website',
      value: 'designer.com',
      href: 'https://designer.com',
      emoji: '💻',
      description: 'Visit my portfolio',
    },
  ];

  return (
    <section id="information" className="relative min-h-screen py-24 bg-gradient-to-br from-primary to-purple-dark overflow-hidden" style={{ fontFamily: 'var(--font-poppins)' }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-secondary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-soft-white mb-4" style={{ fontFamily: 'var(--font-bungee)' }}>Let's Connect</h2>
          <p className="text-soft-white/80">Reach out through your preferred channel</p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={method.id}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative bg-white rounded-3xl p-8 shadow-2xl overflow-hidden group"
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                />

                {/* Animated character/emoji */}
                <motion.div
                  className="text-7xl mb-6 text-center"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                >
                  {method.emoji}
                </motion.div>

                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-center text-primary mb-2">{method.title}</h3>
                <p className="text-center text-secondary mb-2">{method.value}</p>
                <p className="text-center text-sm text-muted-foreground">{method.description}</p>

                {/* Decorative corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 bg-secondary/10 rounded-bl-full"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
              </motion.a>
            );
          })}
        </div>

        {/* Additional contact info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 text-soft-white"
              >
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-purple-dark" />
                </div>
                <div>
                  <p className="text-sm text-soft-white/70">Email</p>
                  <p>dylan.nathanael001@gmail.com</p>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 text-soft-white"
              >
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-purple-dark" />
                </div>
                <div>
                  <p className="text-sm text-soft-white/70">Location</p>
                  <p>Jakarta, Jakarta Barat, Anggrek Cakra</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-12 border-t border-white/20"
        >
          <p className="text-soft-white/60 mb-4">
            Designed and developed with{' '}
            <motion.span
              className="inline-block text-secondary"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              ♥
            </motion.span>{' '}
            by Dylan Nathanael
          </p>
          <p className="text-soft-white/40 text-sm">© 2025 All rights reserved</p>
        </motion.div>
      </div>

      {/* Gradient transition from previous section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-primary to-transparent pointer-events-none z-20" />
    </section>
  );
}
