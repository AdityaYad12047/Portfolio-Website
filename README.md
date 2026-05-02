<div align="center">

# 🚀 Aditya Yadav — Portfolio Website

### **AI & Machine Learning Engineer | Full Stack Developer**

A stunning, modern, dark-themed portfolio website built with React, TypeScript, and cutting-edge web technologies — featuring 3D WebGL particle effects, Framer Motion animations, and a premium glassmorphic design system.

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-F97316?style=for-the-badge&logo=netlify&logoColor=white)](https://adityacodes.netlify.app)
[![GitHub](https://img.shields.io/badge/GitHub-AdityaYad12047-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AdityaYad12047)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Aditya_Yadav-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/aditya-y-7644961aa/)

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=flat-square&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-0.164-000000?style=flat-square&logo=threedotjs&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.x-0055FF?style=flat-square&logo=framer&logoColor=white)

</div>

---

<div align="center">
  <img src="docs/screenshots/hero-section.png" alt="Portfolio Hero Section — Aditya Yadav" width="100%" />
</div>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎨 Design & UI
- **Dark-mode glassmorphic** design system
- **Coral-orange** `#F97316` accent branding
- **Responsive** — mobile-first, works on all devices
- **Custom cursor** with interactive tracking
- **Scroll progress** indicator
- **Ambient gradient orbs** for visual depth

</td>
<td width="50%">

### ⚡ Interactions & Animations
- **3D WebGL particle swarm** — ambient background
- **Framer Motion** slide-in, scale, stagger animations
- **Magnetic hover** effects on buttons & social links
- **3D tilt cards** on featured projects
- **Parallax text** on hero section
- **Text reveal** word-by-word animation

</td>
</tr>
</table>

---

## 📸 Screenshots

<div align="center">

### 🏠 Hero Section
> Cinematic name reveal with parallax text, magnetic social links, 3D particle swarm, and a grayscale-to-color profile photo on hover.

<img src="docs/screenshots/hero-section.png" alt="Hero Section" width="90%" />

---

### 👤 About & Intro
> Bold intro statement highlighting AI/ML expertise, with a "See my Work" CTA and glassmorphic card design.

<img src="docs/screenshots/about-intro.png" alt="About & Intro Section" width="90%" />

---

### 🎓 Education & Achievements
> Academic journey timeline (MCA AI/ML → BCA → Senior Secondary) alongside hackathon recognitions with trophy badges.

<img src="docs/screenshots/education-achievements.png" alt="Education & Achievements" width="90%" />

---

### 💼 Professional Experience
> Timeline-based experience cards with role details, company info, bullet-point highlights, and technology tags.

<img src="docs/screenshots/experience.png" alt="Experience Section" width="90%" />

---

### 🧠 Technical Skills
> Six-category skill grid covering Programming, Web, AI/ML, Databases, Cloud/DevOps, and Creative/GenAI tools.

<img src="docs/screenshots/skills.png" alt="Skills Section" width="90%" />

</div>

---

## 🏗️ Architecture

```
src/
├── components/
│   ├── Navbar.tsx              # Sticky nav with scroll-aware backdrop blur
│   ├── HeroSection.tsx         # Animated name reveal + parallax + profile
│   ├── AboutSection.tsx        # Education, achievements, intro card
│   ├── ExperienceSection.tsx   # Timeline with company details & tech tags
│   ├── SkillsSection.tsx       # 6-category skill grid (30+ skills)
│   ├── ProjectsSection.tsx     # Featured cards + "More Projects" table
│   ├── ServicesSection.tsx     # 6 numbered services with feature lists
│   ├── CertificationsSection.tsx # Badges + credential table
│   ├── ContactSection.tsx      # Working form (FormSubmit) + social links
│   ├── Footer.tsx              # Copyright + scroll-to-top
│   └── ui/
│       ├── InteractiveEffects.tsx  # Magnetic, TiltCard, TextReveal, Parallax
│       ├── WebcracySwarm.jsx      # 3D WebGL particle system (Three.js)
│       ├── CustomCursor.tsx       # Custom animated cursor
│       ├── ScrollProgress.tsx     # Top scroll progress bar
│       ├── motion-wrapper.tsx     # Framer Motion reusable wrappers
│       └── ... (shadcn/ui components)
├── pages/
│   ├── Index.tsx               # Main page — assembles all sections
│   └── NotFound.tsx            # 404 page
├── hooks/
│   └── use-toast.ts            # Toast notification hook
└── assets/
    └── profile-photo.jpg       # Profile photograph
```

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Frontend Framework** | React 18 + TypeScript |
| **Build Tool** | Vite 7 (SWC) |
| **Styling** | TailwindCSS 3.4 + custom CSS design tokens |
| **Animations** | Framer Motion 11 |
| **3D Graphics** | Three.js + React Three Fiber + Drei |
| **UI Components** | shadcn/ui + Radix Primitives |
| **Form Handling** | React Hook Form + Zod validation |
| **Contact Backend** | FormSubmit.co (zero-config email API) |
| **Icons** | Lucide React |
| **Routing** | React Router DOM v6 |
| **Testing** | Vitest + Testing Library |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9 (or bun)

### Installation

```bash
# Clone the repository
git clone https://github.com/AdityaYad12047/Portfolio-Website.git

# Navigate to the project
cd Portfolio-Website

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview the production build
npm run preview
```

### Run Tests

```bash
# Run tests once
npm test

# Run tests in watch mode
npm run test:watch
```

---

## 📂 Sections

| Section | Description |
|---|---|
| **🏠 Hero** | Animated name reveal, parallax text, magnetic social links, grayscale-to-color profile photo |
| **👤 About** | Intro statement, education timeline (MCA AI/ML @ UPES, BCA @ Galgotias), hackathon achievements |
| **💼 Experience** | Professional timeline — Cognifyz, British Airways, Freelance, Hamari Pahchan NGO |
| **🧠 Skills** | 6 categories, 30+ technologies — Python, React, TensorFlow, LangChain, AWS, Docker, etc. |
| **🔬 Projects** | 8 projects — DID Auth System, MedAI, AI Story Generator, Heart Rate Detection, and more |
| **⚙️ Services** | 6 offerings — AI/ML Solutions, GenAI Apps, Full Stack Dev, Analytics, APIs, Computer Vision |
| **📜 Certifications** | Stanford IoT, GCP ML APIs, GSSoC badges, Cybersecurity, and more |
| **📬 Contact** | Working contact form (FormSubmit), email, phone, availability status, GitHub & LinkedIn |

---

## 🎯 Featured Projects

<table>
<tr>
<td width="50%">

### 🔐 DID Authentication System
> Decentralized Identity with AI fraud detection using blockchain (Solidity), wallet-based auth, and Random Forest ML.

`Node.js` `Flask` `Solidity` `React` `Random Forest`

</td>
<td width="50%">

### 🏥 MedAI — Diagnostic Engine
> Multi-modal healthcare AI combining vitals, imaging, PDFs, and clinical text for ICU risk prediction.

`Python` `TensorFlow` `OpenCV` `NLP` `Flask`

</td>
</tr>
<tr>
<td width="50%">

### 🎬 AI Story Generator
> Automated AI video pipeline using GPT narratives, MidJourney visuals, and ElevenLabs voiceovers.

`GPT API` `MidJourney` `ElevenLabs` `Python`

</td>
<td width="50%">

### ❤️ Heart Rate & Emotion Detection
> Real-time biometric and emotion detection with TensorFlow, OpenCV, and GUI visualization.

`TensorFlow` `OpenCV` `Python` `Deep Learning`

</td>
</tr>
</table>

---

## 🌐 Deployment

This project is deployed on **Netlify** with continuous deployment from the `main` branch.

| Platform | Status |
|---|---|
| **Netlify** | [![Netlify Status](https://img.shields.io/badge/Netlify-Deployed-00C7B7?style=flat-square&logo=netlify&logoColor=white)](https://adityacodes.netlify.app) |

### Deploy Your Own

1. Fork this repository
2. Connect to [Netlify](https://netlify.com) / [Vercel](https://vercel.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy! 🎉

---

## 🎨 Design System

The portfolio uses a carefully crafted dark-mode design system:

```css
/* Core Color Palette */
--background:    #0a0a0a    /* Near-black background */
--foreground:    #fafafa    /* Light text */
--primary:       #F97316    /* Coral-orange accent */
--card:          #0a0a0a    /* Card backgrounds */
--muted:         #262626    /* Muted elements */
--border:        #262626    /* Subtle borders */
```

**Typography**: `font-display` for headings, system stack for body text  
**Spacing**: 8px grid system with generous `py-24` section padding  
**Borders**: 1px subtle borders with primary-glow hover states  
**Cards**: `.card-dark` glassmorphic containers with hover elevation

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

### Built with 🧡 by Aditya Yadav

**AI & Machine Learning Engineer | Full Stack Developer**

[![Email](https://img.shields.io/badge/Email-aditya.12047@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:aditya.12047@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-AdityaYad12047-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AdityaYad12047)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/aditya-y-7644961aa/)

⭐ **Star this repo if you found it useful!** ⭐

</div>
