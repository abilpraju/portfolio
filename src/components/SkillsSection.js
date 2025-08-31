import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'React.js', level: 95, icon: '⚛️', color: 'from-blue-500 to-cyan-500' },
        { name: 'JavaScript', level: 93, icon: '🟨', color: 'from-yellow-500 to-orange-500' },
        { name: 'Redux', level: 88, icon: '🔄', color: 'from-purple-500 to-indigo-500' },
        { name: 'jQuery', level: 85, icon: '📜', color: 'from-blue-600 to-teal-600' },
        { name: 'HTML', level: 95, icon: '🌐', color: 'from-orange-500 to-red-500' },
        { name: 'CSS', level: 90, icon: '🎨', color: 'from-blue-500 to-purple-500' },
      ]
    },
    backend: {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Python', level: 92, icon: '🐍', color: 'from-yellow-500 to-orange-500' },
        { name: 'Flask', level: 90, icon: '🌶️', color: 'from-gray-700 to-gray-500' },
        { name: 'Express.js', level: 88, icon: '🚂', color: 'from-green-600 to-lime-600' },
        { name: 'PostgreSQL', level: 85, icon: '🐘', color: 'from-blue-700 to-indigo-700' },
        { name: 'NoSQL', level: 82, icon: '🍃', color: 'from-green-700 to-teal-700' },
        { name: 'WebSocket', level: 80, icon: '🔗', color: 'from-pink-600 to-purple-600' },
      ]
    },
    tools: {
      title: 'Tools & DevOps',
      icon: '🛠️',
      skills: [
        { name: 'Git', level: 95, icon: '📝', color: 'from-orange-600 to-red-600' },
        { name: 'Docker', level: 90, icon: '🐳', color: 'from-blue-600 to-cyan-600' },
        { name: 'CI/CD', level: 92, icon: '🔄', color: 'from-green-600 to-teal-600' },
        { name: 'Nginx', level: 85, icon: '🌐', color: 'from-gray-800 to-black' },
        { name: 'Microservices', level: 88, icon: '🔧', color: 'from-purple-500 to-indigo-500' },
        { name: 'API Integration', level: 90, icon: '🔗', color: 'from-red-600 to-pink-600' },
      ]
    },
    cloud: {
      title: 'Cloud & AWS',
      icon: '☁️',
      skills: [
        { name: 'AWS', level: 95, icon: '☁️', color: 'from-yellow-500 to-orange-500' },
        { name: 'EC2', level: 90, icon: '🖥️', color: 'from-blue-500 to-indigo-500' },
        { name: 'S3', level: 88, icon: '🗄️', color: 'from-green-500 to-teal-500' },
        { name: 'CloudFront', level: 85, icon: '🌐', color: 'from-purple-500 to-pink-500' },
        { name: 'Route53', level: 82, icon: '🗺️', color: 'from-red-500 to-orange-500' },
        { name: 'Elastic IP', level: 80, icon: '🔌', color: 'from-cyan-500 to-blue-500' },
      ]
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.3,
      },
    }),
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
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
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(skillCategories).map(([key, category]) => (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-gradient-to-r from-primary-500 to-purple-600 text-white shadow-lg'
                  : 'glass text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-black/30'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center space-x-2">
                <span className="text-lg">{category.icon}</span>
                <span>{category.title}</span>
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="glass-card group hover:scale-105 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <motion.div
                    className="text-2xl"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    {skill.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4 overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                  variants={progressVariants}
                  custom={skill.level}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/30 rounded-full"
                    animate={{
                      x: [-100, 100],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut",
                    }}
                    style={{ width: '30px' }}
                  />
                </motion.div>
              </div>

              {/* Skill Level Indicator */}
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>Beginner</span>
                <span>Expert</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Always Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Technology never stops evolving, and neither do I. I'm constantly exploring new frameworks, 
              tools, and methodologies to stay at the forefront of web development. Currently focusing on 
              advanced microservices architecture, Kubernetes orchestration, and enhancing my AWS cloud expertise.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

