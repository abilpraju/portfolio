import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  XMarkIcon,
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  EyeIcon,
  CalendarIcon,
  TagIcon,
} from '@heroicons/react/24/outline';

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Formsflow.ai Platform',
      category: 'fullstack',
      description: 'Open-source platform for creating forms and workflows with multi-tenancy support',
      longDescription: 'A comprehensive low-code platform for building forms and workflows, serving thousands of users globally. Implemented micro-frontend architecture, CI/CD pipelines, multi-tenancy support, and SSO integration. Enhanced security with Keycloak configurations and developed custom connectors for workflow automation.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tech: ['React.js', 'Python', 'Flask', 'Microservices', 'Docker', 'AWS'],
      liveUrl: 'https://formsflow.ai',
      githubUrl: 'https://github.com/AOT-Technologies/forms-flow-ai',
      date: '2021-Present',
      featured: true,
    },
    {
      id: 2,
      title: 'Houseboat Booking Platform',
      category: 'fullstack',
      description: 'Feature-rich houseboat booking platform with admin and user management',
      longDescription: 'A comprehensive booking platform built with ASP.NET and MySQL, featuring dual user roles. Admin users can manage houseboat listings and booking records, while general users can browse, book, and manage their reservations. Implemented secure authentication, input validation, session management, and optimized database queries for enhanced performance.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tech: ['ASP.NET', 'MySQL', 'JavaScript', 'HTML/CSS', 'Bootstrap'],
      liveUrl: '#',
      githubUrl: '#',
      date: '2021',
      featured: true,
    },
    {
      id: 3,
      title: 'Custom Form.io Components Package',
      category: 'frontend',
      description: 'NPM package with customized Form.io components and themes',
      longDescription: 'Developed and published a custom NPM package featuring enhanced Form.io components with advanced theming capabilities. Implemented CI/CD pipeline for automated testing and deployment to AWS CloudFront with S3. The package provides reusable components with customizable themes to meet specific branding requirements, improving user experience and development efficiency.',
      image: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tech: ['React.js', 'Form.io', 'NPM', 'AWS CloudFront', 'S3', 'CI/CD'],
      liveUrl: '#',
      githubUrl: '#',
      date: '2022',
      featured: false,
    },
    {
      id: 4,
      title: 'Camunda-Workato Integration Connector',
      category: 'backend',
      description: 'Custom connector for seamless workflow automation between platforms',
      longDescription: 'Developed a custom connector in Camunda Modeler to integrate with Workato, enabling seamless workflow automation across external applications. This integration allows for automated data flow and process orchestration between different enterprise systems, significantly improving operational efficiency and reducing manual intervention.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tech: ['Camunda', 'Workato', 'Java', 'REST APIs', 'Microservices'],
      liveUrl: '#',
      githubUrl: '#',
      date: '2022',
      featured: false,
    },

  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
      id="projects"
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
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-primary-500 to-purple-600 text-white shadow-lg'
                  : 'glass text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-black/30'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                className="glass-card group overflow-hidden cursor-pointer"
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center space-x-2">
                      <EyeIcon className="w-5 h-5 text-white" />
                      <span className="text-white text-sm font-medium">View Details</span>
                    </div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-primary-500 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {project.date}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold gradient-text">
                  {selectedProject.title}
                </h2>
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <XMarkIcon className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Project Image */}
              <div className="mb-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 sm:h-80 object-cover rounded-lg"
                />
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                      About This Project
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="glass p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <CalendarIcon className="w-5 h-5 text-primary-500" />
                      <span className="font-medium text-gray-800 dark:text-white">Year</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{selectedProject.date}</p>
                  </div>

                  <div className="glass p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <TagIcon className="w-5 h-5 text-primary-500" />
                      <span className="font-medium text-gray-800 dark:text-white">Category</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 capitalize">
                      {selectedProject.category}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <motion.a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                      <span>View Live</span>
                    </motion.a>

                    <motion.a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 w-full px-4 py-3 glass border border-primary-400/30 text-gray-800 dark:text-white rounded-lg font-medium hover:bg-primary-400/10 transition-all duration-300"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <CodeBracketIcon className="w-5 h-5" />
                      <span>View Code</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;

