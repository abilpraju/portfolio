import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  BuildingOfficeIcon,
  CalendarDaysIcon,
  MapPinIcon,
  CheckIcon,
  AcademicCapIcon,
  BriefcaseIcon,
} from '@heroicons/react/24/outline';

const ExperienceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      id: 1,
      type: 'work',
      company: 'Aot-technologies',
      position: 'Software Engineer',
      location: 'Trivandrum, Kerala',
      duration: 'May 2021 - Present',
      description: 'Leading development of formsflow.ai, an open-source platform for creating forms and workflows. Contributing to both frontend and backend development while implementing enterprise-level features.',
      achievements: [
        'Implemented micro-frontend architecture for formsflow.ai v2 release',
        'Established robust CI/CD processes for testing and publishing packages',
        'Successfully released NPM package with customized Form.io components',
        'Implemented multi-tenancy support enhancing scalability and security',
        'Integrated SSO with formsflow.ai and enhanced security with Keycloak',
        'Developed custom Camunda-Workato connector for workflow automation'
      ],
      technologies: ['React.js', 'Python', 'Flask', 'AWS', 'Docker', 'Microservices'],
      icon: BriefcaseIcon,
      color: 'from-blue-500 to-cyan-500'
    },

    {
      id: 3,
      type: 'education',
      company: 'MG University',
      position: 'Bachelor of Computer Applications',
      location: 'Santhigiri College, Kerala',
      duration: 'Jun 2018 - Apr 2021',
      description: 'Completed BCA with focus on software development, web technologies, and database management. Strong foundation in programming and system design.',
      achievements: [
        'CGPA: 7.8/10.0 - Strong academic performance',
        'Specialized in web development and database technologies',
        'Completed major project on web application development',
        'Active participation in technical workshops and seminars'
      ],
      technologies: ['Programming Fundamentals', 'Web Development', 'Database Management', 'Software Engineering'],
      icon: AcademicCapIcon,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      type: 'certification',
      company: 'Amazon Web Services',
      position: 'AWS Certified Developer – Associate',
      location: 'Online',
      duration: 'Valid until Feb 2028',
      description: 'Demonstrated expertise in developing and maintaining applications on the AWS platform, including deployment and debugging cloud-based applications.',
      achievements: [
        'Validated skills in AWS core services and best practices',
        'Expertise in serverless application development',
        'Proficiency in AWS security and deployment strategies',
        'Understanding of cloud-native application architecture'
      ],
      technologies: ['AWS', 'Cloud Computing', 'Serverless', 'DevOps'],
      icon: AcademicCapIcon,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 5,
      type: 'certification',
      company: 'Red Hat',
      position: 'Container Platform Application Deployment',
      location: 'Online',
      duration: 'Issued Sep 2022',
      description: 'Specialized certification in container platform technologies and application deployment strategies using Red Hat OpenShift.',
      achievements: [
        'Expertise in containerization and orchestration',
        'Proficiency in OpenShift platform management',
        'Skills in container deployment and scaling',
        'Understanding of DevOps and CI/CD in container environments'
      ],
      technologies: ['Containers', 'OpenShift', 'Kubernetes', 'DevOps'],
      icon: AcademicCapIcon,
      color: 'from-red-500 to-pink-500'
    }
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: '100%',
      transition: {
        duration: 2,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Experience & Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 w-0.5 bg-gray-300 dark:bg-gray-600 transform md:-translate-x-1/2">
            <motion.div
              variants={lineVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="w-full bg-gradient-to-b from-primary-500 to-purple-600 rounded-full"
            />
          </div>

          {/* Timeline Items */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-12"
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Timeline Icon */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 transform md:-translate-x-1/2 z-10">
                  <motion.div
                    className={`w-full h-full bg-gradient-to-r ${experience.color} rounded-full flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <experience.icon className="w-4 h-4 text-white" />
                  </motion.div>
                </div>

                {/* Content Card */}
                <motion.div
                  className={`glass-card w-full md:w-5/12 ${
                    index % 2 === 0 ? 'ml-16 md:ml-0 md:mr-auto' : 'ml-16 md:ml-auto md:mr-0'
                  }`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Card Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                        {experience.position}
                      </h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        experience.type === 'work' 
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                          : experience.type === 'education'
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                          : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                      }`}>
                        {experience.type === 'work' ? 'Work' : experience.type === 'education' ? 'Education' : 'Certification'}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 mb-2">
                      <BuildingOfficeIcon className="w-4 h-4" />
                      <span className="font-medium">{experience.company}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <CalendarDaysIcon className="w-4 h-4" />
                        <span>{experience.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPinIcon className="w-4 h-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.3 + achievementIndex * 0.1 }}
                          className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-300"
                        >
                          <CheckIcon className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Ready for New Challenges
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm always excited to take on new projects and collaborate with amazing teams. 
              Let's build something incredible together!
            </p>
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;

