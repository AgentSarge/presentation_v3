# Astro + React + Tailwind CSS - Vercel-Inspired Starter

A modern, viewport-optimized web development starter template featuring Astro, React, TypeScript, and Tailwind CSS with a **pure black Vercel-inspired dark theme** and **fixed viewport layout system** (no scrolling).

## 🚀 Current Status & Features

### 🎨 **Pure Black Vercel-Inspired Theme**
- **Pure black background** (#000000) - no gradients or overlays
- **High contrast typography** - White text on black background
- **Geist font family** from Google Fonts (primary) + Geist Mono for code
- **Subtle glow effects** and smooth micro-interactions
- **Syntax highlighting** with pink/blue/green accent colors

### 📐 **Fixed Viewport Layout System**
- **No scrolling** - All content fits within 100vh
- **Smart content constraints** - Like "margins on paper"
- **Responsive padding** - Scales automatically with screen size
- **Three layout modes**: `constrained`, `wide`, `full`
- **Eight max-width options**: `sm` to `4xl` plus `full`

### ⚡ **Tech Stack**
- **Astro v5.9.4** - Modern static site generator with island architecture
- **React 19** - Component-based UI with TypeScript support
- **Tailwind CSS v4** - Utility-first CSS with custom theme integration
- **TypeScript** - Full type safety throughout
- **Geist & Inter Fonts** - Modern typography system
- **Vite** - Lightning-fast build tool

## 🏗️ Project Structure

```
/
├── public/
├── src/
│   ├── components/
│   │   ├── Welcome.tsx          # Main welcome component
│   │   └── ThemeToggle.tsx      # Theme switching component
│   ├── layouts/
│   │   └── Layout.astro         # Base layout component
│   ├── pages/
│   │   └── index.astro          # Main page
│   └── styles/
│       └── global.css           # Global styles with theme variables
├── astro.config.mjs             # Astro configuration
├── tailwind.config.mjs          # Tailwind CSS configuration
└── tsconfig.json                # TypeScript configuration
```

## 🎨 Theme System

### CSS Custom Properties
The global theme uses CSS custom properties for consistent theming:

- **Colors**: Primary, secondary, accent colors with variants
- **Backgrounds**: Multiple background levels for layering
- **Text**: Primary, secondary, tertiary text colors
- **Spacing**: Consistent spacing scale
- **Typography**: Font families and sizing
- **Shadows**: Elevation system
- **Borders**: Border colors and radius values
- **Transitions**: Animation timing

### Dark Mode Support
- Automatic detection of system preference
- Manual toggle with localStorage persistence
- Smooth transitions between themes
- All components automatically adapt

### Tailwind Integration
Custom Tailwind config extends the default theme with:
- CSS variable-based colors
- Custom spacing scale
- Border radius system
- Box shadow utilities
- Transition durations

## 🛠️ Development

### Prerequisites
- Node.js (v18 or higher)
- npm, yarn, or pnpm

### Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run astro` - Run Astro CLI commands

## 🧩 Components

### Welcome Component (`src/components/Welcome.tsx`)
- Hero section with animated gradient text
- Feature cards showcasing the tech stack
- Interactive counter demonstrating React state
- Technology badges
- Fully responsive design

### ThemeToggle Component (`src/components/ThemeToggle.tsx`)
- Fixed position theme toggle button
- Automatic system preference detection
- LocalStorage persistence
- Smooth theme transitions

### Layout Component (`src/layouts/Layout.astro`)
- Base HTML structure
- Global styles import
- SEO-friendly meta tags
- Responsive viewport settings

## 🎯 Customization

### Adding New Colors
1. Add CSS custom properties to `src/styles/global.css`
2. Extend Tailwind config in `tailwind.config.mjs`
3. Use in components with Tailwind classes

### Creating New Components
1. Create component file in `src/components/`
2. Import and use in Astro pages with `client:load` directive
3. Follow TypeScript best practices

### Modifying the Theme
- Edit CSS variables in `:root` and dark mode sections
- Update Tailwind config to match
- Components will automatically use new values

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 🤝 Contributing

This is a starter template - feel free to fork and customize for your needs!

## 📄 License

MIT License - feel free to use this starter for any project.

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
