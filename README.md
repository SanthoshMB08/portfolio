# Santhosh M - Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Software Developer.

## 🚀 Live Demo

[View Portfolio](https://santhoshmb08.vercel.app)

## 📋 Overview

This portfolio website is built with React and Vite, featuring a clean and professional design that highlights my journey as a software developer. The site includes sections for my profile, about me, work/projects, and contact information.

## 🛠️ Technologies Used

### Frontend
- **React 19** - Modern JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **CSS3** - Custom styling with responsive design
- **ESLint** - Code linting and formatting

### CI/CD & Deployment
- **GitHub Actions** - Automated CI/CD pipeline
- **Vercel** - Hosting and deployment platform
- **Node.js 20** - Runtime environment

### Key Features
- Single Page Application (SPA) with smooth scrolling navigation
- Fully responsive design for all devices
- Modern UI with hover effects and animations
- Downloadable resume functionality
- Project showcase with GitHub links
- Contact information and social media links
- Automated deployment on code changes

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── resume.pdf          # Resume file for download
│   └── vite.svg           # Vite logo
├── src/
│   ├── assets/            # Images and icons
│   │   ├── profile.jpg    # Profile picture
│   │   ├── github.png     # GitHub icon
│   │   ├── linkedin.png   # LinkedIn icon
│   │   ├── leetcode.png   # LeetCode icon
│   │   └── Resume.pdf     # Resume source file
│   ├── components/        # React components
│   │   ├── Profile.jsx    # Hero/Profile section
│   │   ├── About.jsx      # About me section
│   │   ├── Work.jsx       # Projects showcase
│   │   └── Contact.jsx    # Contact information
│   ├── styles/           # CSS files
│   │   ├── Profile.css    # Profile section styles
│   │   ├── About.css      # About section styles
│   │   ├── Work.css       # Work section styles
│   │   └── Contact.css    # Contact section styles
│   ├── index.css         # Global styles
│   ├── main.jsx          # Application entry point
│   └── App.jsx           # Main App component
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md            # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your resume**
   - Place your resume PDF file in the `public/` folder
   - Name it `resume.pdf`
   - Update the download link in `src/Profile.jsx` if needed

4. **Update personal information**
   - Edit `src/Profile.jsx` with your details
   - Update `src/About.jsx` with your background
   - Modify `src/Work.jsx` with your projects
   - Update `src/Contact.jsx` with your contact info

5. **Update images**
   - Replace `src/assets/profile.jpg` with your photo
   - Update social media icons if needed

### Development

```bash
npm run dev
```

This will start the development server at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Code Linting

```bash
npm run lint
```

## 🔄 CI/CD Pipeline

This project uses GitHub Actions for continuous integration and deployment:

### Automated Workflow
- **Trigger**: Automatic deployment on pushes to the `main` branch
- **Build Process**: 
  - Installs dependencies
  - Runs linting checks
  - Builds the production bundle
- **Deployment**: Automatically deploys to Vercel

### Required GitHub Secrets
To enable automatic deployment, you need to configure the following secret in your GitHub repository:

1. **VERCEL_TOKEN**: Your Vercel authentication token
   - Go to [Vercel Dashboard](https://vercel.com/dashboard) → Settings → Tokens
   - Generate a new token
   - Add it to your GitHub repository: Settings → Secrets and variables → Actions → New repository secret
   - Name: `VERCEL_TOKEN`
   - Value: Your Vercel token

### Workflow File
The CI/CD configuration is located in `.github/workflows/ci-cd.yml`

### Deployment Status
[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com)

## 🎨 Customization

### Colors
The portfolio uses a warm color scheme:
- Background: `#fbf7cc` (Light yellow)
- Accent: `#f4ee7b` (Golden yellow)
- Text: `#333` (Dark gray)

### Fonts
- System fonts for optimal performance
- Font sizes use viewport units (vw) for responsiveness

### Responsive Design
- Desktop: Full layout with side-by-side elements
- Mobile: Stacked layout with adjusted font sizes

## 📱 Features

### Navigation
- Smooth scrolling between sections
- Active section highlighting
- Mobile-friendly navigation

### Profile Section
- Hero layout with photo and introduction
- Downloadable resume button
- Responsive design

### About Section
- Professional background
- Education and experience
- Technical skills showcase

### Work Section
- Project grid layout
- GitHub links for each project
- Hover effects and animations

### Contact Section
- Social media links
- Email contact
- Professional presentation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Santhosh M**
- Email: santhoshmb08@gmail.com
- LinkedIn: https://www.linkedin.com/in/santhosh-m-86724035a/
- GitHub: https://github.com/SanthoshMB08

---

⭐ **Star this repo** if you found it helpful!
