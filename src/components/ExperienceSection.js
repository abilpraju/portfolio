import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  AcademicCapIcon,
  BriefcaseIcon,
} from '@heroicons/react/24/outline';

const ExperienceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const workExperiences = [
    {
      id: 1,
      company: 'Aot-technologies',
      position: 'Software Engineer',
      duration: 'May 2021 - Present',
      achievements: [
        'Implemented micro-frontend architecture for formsflow.ai v2 release',
        'Established robust CI/CD processes for testing and publishing packages',
        'Successfully released NPM package with customized Form.io components',
        'Implemented multi-tenancy support enhancing scalability and security',
        'Integrated SSO with formsflow.ai and enhanced security with Keycloak',
        'Developed custom Camunda-Workato connector for workflow automation'
      ],
      technologies: ['React.js', 'Python', 'Flask', 'AWS', 'Docker', 'Microservices']
    }
  ];

  const education = [
    {
      id: 1,
      degree: 'Bachelor of Computer Applications',
      institution: 'MG University',
      duration: 'Jun 2018 - Apr 2021',
      description: [
        'Completed BCA with focus on software development, web technologies, and database management.',
        'Strong foundation in programming and system design with CGPA: 7.8/10.0'
      ],
      technologies: ['Programming Fundamentals', 'Web Development', 'Database Management', 'Software Engineering']
    }
  ];

  const certifications = [
    {
      id: 1,
      degree: 'AWS Certified Developer – Associate',
      institution: 'Amazon Web Services',
      duration: 'Valid until Feb 2028',
      description: [
        'Demonstrated expertise in developing and maintaining applications on the AWS platform.',
        'Expertise in serverless application development and cloud-native architecture'
      ],
      technologies: ['AWS', 'Cloud Computing', 'Serverless', 'DevOps']
    },
    {
      id: 2,
      degree: 'Container Platform Application Deployment',
      institution: 'Red Hat',
      duration: 'Issued Sep 2022',
      description: [
        'Specialized certification in container platform technologies and application deployment strategies.',
        'Expertise in OpenShift platform management and container orchestration'
      ],
      technologies: ['Containers', 'OpenShift', 'Kubernetes', 'DevOps']
    },
    {
      id: 3,
      degree: 'IBM AI Engineering Professional Certificate',
      institution: 'Coursera (IBM)',
      duration: 'Completed 2024',
      description: [
        'Comprehensive AI engineering program covering machine learning, deep learning, and AI model deployment.',
        'Hands-on experience with TensorFlow, PyTorch, and cloud-based AI services for building scalable AI solutions'
      ],
      technologies: ['AI Engineering', 'Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch', 'Cloud AI']
    }
  ];


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
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            My professional journey
          </p>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-3 mb-8">
              <BriefcaseIcon className="w-6 h-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Work Experience</h3>
            </div>

            {/* Timeline for Work Experience */}
            <div className="relative">
              <div className="absolute left-6 top-0 w-0.5 h-full bg-gray-300 dark:bg-gray-600"></div>
              
              {workExperiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                  className="relative mb-8"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                  
                  {/* Content Card */}
                  <div className="ml-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {experience.position}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {experience.company}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {experience.duration}
                    </p>
                    
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-gray-600 dark:text-gray-300 text-sm flex items-start">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-3 mb-8">
              <AcademicCapIcon className="w-6 h-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Education</h3>
            </div>

            {/* Timeline for Education */}
            <div className="relative">
              <div className="absolute left-6 top-0 w-0.5 h-full bg-gray-300 dark:bg-gray-600"></div>
              
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  className="relative mb-8"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                  
                  {/* Content Card */}
                  <div className="ml-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {edu.duration}
                    </p>
                    
                    <div className="space-y-2">
                      {edu.description.map((desc, descIndex) => (
                        <p key={descIndex} className="text-gray-600 dark:text-gray-300 text-sm">
                          {desc}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="flex items-center space-x-3 mb-8">
            <AcademicCapIcon className="w-6 h-6 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Certifications</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700"
              >
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {cert.degree}
                </h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {cert.institution}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {cert.duration}
                </p>
                
                <div className="space-y-2">
                  {cert.description.map((desc, descIndex) => (
                    <p key={descIndex} className="text-gray-600 dark:text-gray-300 text-sm">
                      {desc}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

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

