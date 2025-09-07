import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  CodeBracketIcon, 
  LightBulbIcon, 
  RocketLaunchIcon,
  HeartIcon,
  UserIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: '4+', label: 'Years Experience' },
    { number: '15+', label: 'Technologies' },
    { number: '1', label: 'AWS Certifications' },
    { number: '100%', label: 'Project Success' },
  ];

  const values = [
    {
      icon: CodeBracketIcon,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code that stands the test of time.',
    },
    {
      icon: LightBulbIcon,
      title: 'Innovation',
      description: 'Constantly exploring new technologies and creative solutions to complex problems.',
    },
    {
      icon: RocketLaunchIcon,
      title: 'Performance',
      description: 'Optimizing applications for speed, accessibility, and exceptional user experience.',
    },
    {
      icon: HeartIcon,
      title: 'Passion',
      description: 'Genuinely passionate about technology and its power to make a positive impact.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate developer with a love for creating exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Bio Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <UserIcon className="w-8 h-8 text-primary-500" />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Get to know me
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate Full-Stack Developer with over 4 years of experience at Aot-technologies, 
                specializing in enterprise-level applications and open-source contributions. Currently working 
                on formsflow.ai, an innovative platform for creating forms and workflows that serves thousands of users.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                My expertise spans across modern web technologies including React.js, Python, Flask, and AWS cloud services. 
                Currently learning Angular and OpenShift while expanding my knowledge in Python development. I'm particularly 
                passionate about microservices architecture, CI/CD implementation, and creating scalable solutions that enhance 
                user experience and business efficiency.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <AcademicCapIcon className="w-8 h-8 text-primary-500" />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Education & Growth
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Bachelor of Computer Applications graduate from MG University with a CGPA of 7.8. 
                AWS Certified Developer with additional certifications in Red Hat Container Platform 
                and Oracle Cloud Infrastructure. Continuously expanding expertise through hands-on 
                enterprise projects and open-source contributions.
              </p>
            </motion.div>

            {/* Download CV Button */}
            {/* <motion.div variants={itemVariants}>
              <motion.a
                href="https://drive.google.com/file/d/1Y422lTQttBTo1-O52t-z3GlPwXwJMvfo/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Download Resume</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </motion.a>
            </motion.div> */}
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card text-center group hover:scale-105 transition-transform duration-300"
                whileHover={{ y: -5 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="text-3xl sm:text-4xl font-bold gradient-text mb-2"
                >
                  {stat.number}
                </motion.div>
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card text-center group hover:scale-105 transition-all duration-300"
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <value.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

