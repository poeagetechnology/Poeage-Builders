# Poeage Builders – Corporate Construction Website

This repository contains the frontend source code for the official website of **Poeage Builders**, a corporate construction and engineering company.

The website presents company services, projects, expertise, and provides contact and business enquiry functionality.

This document explains:
- What the project does
- How to run it locally
- How to deploy it to production
- How new developers can contribute

---

## 📌 Project Overview

**Poeage Builders Website** is a modern, responsive corporate website built with React and Tailwind CSS.

Main goals of the project:

- Showcase company profile and services  
- Present corporate projects and expertise  
- Provide a professional online presence  
- Ensure fast performance and responsive design  
- Support long-term maintainability  

---

## 🚀 Key Features

- Responsive design for mobile, tablet, and desktop  
- Animated hero slider using Framer Motion  
- Multi-page routing using React Router  
- Modern UI with Tailwind CSS  
- Optimized production build  
- Clean component-based architecture  

---

## 🛠️ Technology Stack

- **Framework:** React  
- **Styling:** Tailwind CSS  
- **Animations:** Framer Motion  
- **Routing:** React Router DOM  
- **Icons:** React Icons  
- **Build Tool:** Vite or Create React App  

---

## 📂 Project Structure

src/
├── Components/
│ ├── Header.jsx
│ ├── Footer.jsx
│ └── Home.jsx
├── Assets/
│ └── Images, logos, icons
├── App.jsx
├── main.jsx



---

## 🧑‍💻 Local Development Setup

Follow these steps to run the project on your local machine.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/poeage-builders.git
cd poeage-builders

2. Install dependencies
npm install

3. Start development server

If using Vite:

npm run dev


If using Create React App:

npm start


Open in browser:

http://localhost:5173   (Vite)
http://localhost:3000   (CRA)

🏗️ Production Build

To create a production-ready build:

npm run build


This generates an optimized static build in:

dist/ (Vite)

build/ (Create React App)

Always run this before deployment.

🌐 Deployment Instructions
Option 1: Deploy to Vercel (Recommended)

Push your code to GitHub

Go to https://vercel.com

Import your GitHub repository

Set:

Build Command: npm run build

Output Directory: dist or build

Click Deploy

Option 2: Deploy to Netlify

Go to https://netlify.com

Create a new site from GitHub

Set:

Build Command: npm run build

Publish Directory: dist or build

Option 3: Manual Deployment (Shared Hosting / VPS)

Run:

npm run build


Upload the contents of dist/ or build/ to your server's public directory.

🧪 Code Quality & Linting

Before deploying, always check:

npm run lint
npm run build


Ensure:

No ESLint errors

No build warnings

No runtime errors

🤝 Contribution Guidelines

This project follows a controlled contribution process to maintain code quality.

Who Can Contribute?

Internal developers

Approved external contributors

UI/UX designers working with the team

All changes must go through review before merging.

Development Workflow

Fork the repository

Create a new branch from main

git checkout -b feature/your-feature-name


Make your changes

Run checks:

npm run lint
npm run build


Commit your changes with a clear message:

git commit -m "feat: improve hero slider animation"


Push your branch:

git push origin feature/your-feature-name


Open a Pull Request (PR)

Code Standards

Use functional React components

Follow existing folder and file structure

Use Tailwind utility classes consistently

Avoid unnecessary inline styles

Keep components small and reusable

No direct commits to main branch

What Not To Do

Do not commit dist/ or build/ folders

Do not remove existing features without approval

Do not introduce breaking changes without discussion

Do not push secrets or API keys

📝 Commit Message Guidelines

Use clear and consistent messages:

feat: add testimonials section

fix: resolve slider autoplay bug

refactor: clean header layout

📄 License

This project is proprietary and owned by Poeage Builders.

Unauthorized commercial use, redistribution, or resale is not permitted without written permission.

📞 Contact

For technical or business queries:

Email: info@poeagebuilders.com

Website: https://poeagebuilders.com

