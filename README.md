# Abil P Raju - Full-Stack Developer Portfolio

A stunning, modern, and responsive portfolio website showcasing the work and expertise of Abil P Raju, an AWS Certified Full-Stack Developer. Built with React, Tailwind CSS, and Framer Motion. Features a dark/light mode toggle, smooth animations, and professional design elements.

## ✨ Features

- **Modern Design**: Clean, minimal, and professional UI with glassmorphism effects
- **Dark/Light Mode**: Toggle between themes with persistent user preference
- **Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion animations and micro-interactions
- **Interactive Sections**:
  - Hero section with animated typing effect
  - About section with animated cards and stats
  - Skills section with interactive icons and progress bars
  - Projects showcase with modal popups and filters
  - Experience timeline with smooth transitions
  - Contact form with floating labels
- **Performance Optimized**: Fast loading and smooth scrolling

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fullstack-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## 🛠️ Tech Stack

- **React** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Heroicons** - Icon library
- **React Intersection Observer** - Scroll-triggered animations

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.js       # Navigation bar with theme toggle
│   ├── HeroSection.js      # Hero section with animated text
│   ├── AboutSection.js     # About section with bio and stats
│   ├── SkillsSection.js    # Skills showcase with animations
│   ├── ProjectsSection.js  # Projects grid with modals
│   ├── ExperienceSection.js # Timeline of experience
│   ├── ContactSection.js   # Contact form and info
│   └── Footer.js          # Footer with links
├── contexts/
│   └── ThemeContext.js    # Dark/light mode context
├── App.js                 # Main app component
├── index.js              # App entry point
└── index.css             # Global styles and Tailwind imports
```

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

1. **src/components/HeroSection.js** - Name, titles, and description
2. **src/components/AboutSection.js** - Bio, achievements, and stats
3. **src/components/SkillsSection.js** - Your skills and proficiency levels
4. **src/components/ProjectsSection.js** - Your projects and details
5. **src/components/ExperienceSection.js** - Work experience and education
6. **src/components/ContactSection.js** - Contact information and social links
7. **public/index.html** - Meta tags and title

### Styling

- Colors can be customized in `tailwind.config.js`
- Global styles are in `src/index.css`
- Component-specific styles use Tailwind classes

### Images

Replace placeholder images in the projects section with your actual project screenshots.

## 📱 Responsive Design

The portfolio is built with a mobile-first approach and includes:

- Responsive navigation with mobile hamburger menu
- Fluid grid layouts that adapt to different screen sizes
- Touch-friendly interactive elements
- Optimized images and performance for mobile devices

## 🌙 Dark Mode

The portfolio includes a comprehensive dark mode implementation:

- System preference detection
- Manual toggle with smooth transitions
- Persistent user preference storage
- Consistent theming across all components

## 📧 Contact Form

The contact form includes:

- Form validation
- Floating label animations
- Loading states
- Success/error feedback
- Responsive design

**Note**: The form currently uses a mock submission. To make it functional, integrate with your preferred form handling service (e.g., Formspree, Netlify Forms, or a custom backend).

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Deploy automatically with each push

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d build"`
3. Run: `npm run deploy`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Support

If you have any questions or need help with customization, feel free to reach out!

---

**Built with ❤️ using React and modern web technologies**

