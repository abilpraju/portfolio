import React from 'react';
import { motion } from 'framer-motion';
import { HeartIcon } from '@heroicons/react/24/solid';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
      ]
    },
    {
      title: 'Connect',
      links: [
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/abil-p-raju-471765211/', external: true },
        { name: 'GitHub', href: 'https://github.com/abilpraju-aot', external: true },
        { name: 'AWS Certification', href: 'https://www.credly.com/badges/88c0973b-1958-4737-91d9-82277390495f/linked_in_profile', external: true },
        { name: 'Email', href: 'mailto:abilraju97@gmail.com', external: true },
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Web Development', href: '#contact' },
        { name: 'UI/UX Design', href: '#contact' },
        { name: 'Consulting', href: '#contact' },
        { name: 'Code Review', href: '#contact' },
      ]
    }
  ];

  const scrollToSection = (sectionId) => {
    if (sectionId.startsWith('#')) {
      const element = document.getElementById(sectionId.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Abil P Raju
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Full-Stack Developer passionate about creating exceptional digital experiences 
                with modern technologies and creative solutions.
              </p>
              <motion.button
                onClick={scrollToTop}
                className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors"
                whileHover={{ y: -2 }}
              >
                <span>Back to top</span>
                <motion.div
                  animate={{ y: [-2, 2, -2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ↑
                </motion.div>
              </motion.button>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-white">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <motion.a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary-400 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        {link.name}
                      </motion.a>
                    ) : (
                      <motion.button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-400 hover:text-primary-400 transition-colors text-left"
                        whileHover={{ x: 5 }}
                      >
                        {link.name}
                      </motion.button>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-gray-400"
            >
              <span>© {currentYear} Abil P Raju. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <HeartIcon className="w-4 h-4 text-red-500" />
              </motion.div>
              <span>and React</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6 text-sm text-gray-400"
            >
              <motion.a
                href="#privacy"
                className="hover:text-primary-400 transition-colors"
                whileHover={{ y: -2 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#terms"
                className="hover:text-primary-400 transition-colors"
                whileHover={{ y: -2 }}
              >
                Terms of Service
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl z-40 flex items-center justify-center"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ↑
        </motion.div>
      </motion.button>
    </footer>
  );
};

export default Footer;

