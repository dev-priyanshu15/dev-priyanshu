# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS
- 📝 TypeScript for type safety
- 📧 Contact form functionality
- 🚀 Fast loading with Vite
- 📄 Resume download option
- 📊 Project showcase with modal views
- 💼 Detailed sections for:
  - About
  - Experience
  - Education
  - Skills
  - Projects
  - Achievements
  - Contact

## Project Structure

```
├── public/
│   └── assets/
│       ├── profile.jpg
│       └── resume.pdf
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Contact/
│   │   └── [Component Files]
│   ├── types/
│   ├── utils/
│   └── [Root Files]
└── [Config Files]
```

## Technology Stack

- React
- TypeScript
- Tailwind CSS
- Vite
- ESLint
- PostCSS

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
```

## Building for Production

To create a production build:

```bash
npm run build
```

## Configuration Files

- `vite.config.ts` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `postcss.config.js` - PostCSS configuration
- `eslint.config.js` - ESLint configuration

## Contact Form Setup

To enable the contact form functionality, configure your email settings in `src/utils/emailConfig.ts`.

## Contributing

Feel free to submit issues and enhancement requests.

## License

MIT License
