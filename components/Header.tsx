import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Mail, Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Transform scroll position to navbar properties
  const navbarScale = useTransform(scrollY, [0, 200], [1, 0.85]);
  const navbarTop = useTransform(scrollY, [0, 200], [24, 12]);
  const navbarPaddingY = useTransform(scrollY, [0, 200], [16, 10]);
  const navbarPaddingX = useTransform(scrollY, [0, 200], [32, 24]);
  const logoFontSize = useTransform(scrollY, [0, 200], [18, 14]);
  const navFontSize = useTransform(scrollY, [0, 200], [16, 13]);
  const navGap = useTransform(scrollY, [0, 200], [32, 20]);
  const emailPaddingY = useTransform(scrollY, [0, 200], [10, 6]);
  const emailPaddingX = useTransform(scrollY, [0, 200], [24, 16]);
  const emailFontSize = useTransform(scrollY, [0, 200], [14, 12]);
  const shadowIntensity = useTransform(scrollY, [0, 200], [0.2, 0.4]);

  const navItems = [
    { label: 'Experience', id: 'experience' },
    { label: 'Project', id: 'project' },
    { label: 'My Skill', id: 'skill' },
    { label: 'Contact Me', id: 'information' },
  ];

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ top: navbarTop }}
        className="fixed left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-3 sm:px-6 hidden lg:block"
      >
        <motion.div 
          style={{ 
            scale: navbarScale,
            paddingTop: navbarPaddingY,
            paddingBottom: navbarPaddingY,
            paddingLeft: navbarPaddingX,
            paddingRight: navbarPaddingX,
            boxShadow: useTransform(shadowIntensity, (v) => `0 25px 50px -12px rgba(0, 0, 0, ${v})`)
          }}
          className="bg-[#2D1B4E] rounded-full flex items-center justify-between border border-primary/20 transition-all"
        >
          {/* Logo */}
          <motion.button
            onClick={() => handleNavClick('home')}
            className="text-white"
            style={{ fontFamily: 'var(--font-bungee)', fontSize: logoFontSize }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            DYLAN
          </motion.button>

          {/* Navigation */}
          <motion.nav 
            style={{ gap: navGap }}
            className="flex items-center"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="relative px-3 py-2 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className={`transition-colors ${
                      isActive ? 'text-secondary' : 'text-white/80 hover:text-white'
                    }`}
                    style={{ fontFamily: 'var(--font-poppins)', fontSize: navFontSize }}
                  >
                    {item.label}
                  </motion.span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </motion.nav>

          {/* Contact Email Pill */}
          <motion.a
            href="mailto:hello@designer.com"
            style={{ 
              fontFamily: 'var(--font-poppins)',
              paddingTop: emailPaddingY,
              paddingBottom: emailPaddingY,
              paddingLeft: emailPaddingX,
              paddingRight: emailPaddingX,
            }}
            className="flex items-center gap-2 bg-secondary text-purple-dark rounded-full transition-all hover:bg-secondary/90"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-4 h-4" />
            <motion.span style={{ fontSize: emailFontSize }}>dylan.nathanael001@gmail.com</motion.span>
          </motion.a>
        </motion.div>
      </motion.header>

      {/* Mobile Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 lg:hidden"
      >
        <div className="bg-[#2D1B4E] mx-3 mt-3 rounded-full px-4 py-3 flex items-center justify-between border border-primary/20 shadow-lg">
          {/* Logo */}
          <motion.button
            onClick={() => handleNavClick('home')}
            className="text-white text-sm"
            style={{ fontFamily: 'var(--font-bungee)' }}
            whileTap={{ scale: 0.95 }}
          >
            DYLAN
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2"
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-[#2D1B4E] mx-3 mt-2 rounded-3xl border border-primary/20 shadow-xl overflow-hidden"
          >
            <nav className="flex flex-col p-4 space-y-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left px-4 py-3 rounded-xl transition-colors ${
                      isActive ? 'bg-secondary text-purple-dark' : 'text-white/80 hover:bg-primary/20'
                    }`}
                    style={{ fontFamily: 'var(--font-poppins)' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.button>
                );
              })}
              
              {/* Mobile Contact */}
              <motion.a
                href="mailto:hello@designer.com"
                className="flex items-center justify-center gap-2 bg-secondary text-purple-dark px-4 py-3 rounded-xl mt-2"
                style={{ fontFamily: 'var(--font-poppins)' }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@designer.com</span>
              </motion.a>
            </nav>
          </motion.div>
        )}
      </motion.header>
    </>
  );
}
