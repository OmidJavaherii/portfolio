# Omid Javaheri - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, featuring smooth animations, and PWA capabilities.

## 🌟 Features

- **Modern Tech Stack**
  - Next.js 15 with App Router
  - TypeScript for type safety
  - Tailwind CSS for styling
  - Lucide React for beautiful icons

- **Responsive Design**
  - Desktop-first approach
  - Fully responsive layout
  - Optimized for all screen sizes
  - Safe area support for modern devices

- **User Experience**
  - Smooth scroll animations
  - Loading states
  - Custom 404 page
  - Scroll to top button

- **Performance**
  - Optimized images
  - Efficient animations
  - Fast page loads
  - SEO optimized

- **PWA Support**
  - Installable on desktop and mobile
  - Offline capabilities
  - Custom icons for various platforms
  - iOS-specific optimizations

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/omidjavaherii/portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Built With

- [Next.js](https://nextjs.org/) - React framework for production
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

## 📱 PWA Installation

### Desktop
- Click the install button in the browser's address bar
- Or use the "Install" button in the app

### Mobile
- iOS: Use the "Add to Home Screen" option in the share menu
- Android: Click "Add to Home Screen" in the browser menu

## 🎨 Customization

### Colors
The theme colors can be customized in `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    DEFAULT: '#046D8B',
    dark: '#035A73',
  },
  // ... other colors
}
```

### Content
- Update personal information in `src/data/personal.ts`
- Modify projects in `src/data/projects.ts`
- Edit experience in `src/data/experience.ts`

## 📦 Project Structure

```
portfolio/
├── public/
│   ├── icons/          # PWA icons
│   └── images/         # Static images
├── src/
│   ├── app/           # Next.js app router
│   ├── components/    # React components
│   ├── data/         # Content data
│   ├── hooks/        # Custom hooks
│   └── styles/       # Global styles
└── package.json
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier



## 🤝 Contact


Project Link: [https://github.com/omidjavaherii/portfolio](https://github.com/omidjavaherii/portfolio)
