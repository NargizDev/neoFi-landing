# NeoFi Landing

**NeoFi Landing** is a modern, scalable landing page for a Web3/DeFi platform, built to showcase decentralized finance solutions, blockchain technology, and digital asset management. The project demonstrates advanced frontend architecture, clean code practices, and a focus on reusable, isolated UI components.

## Project Purpose

This project is designed as a portfolio-ready, production-level landing page for a fictional DeFi platform. It highlights best practices in frontend development, including feature-sliced design, TypeScript, React, and TailwindCSS. The codebase is structured for scalability, maintainability, and ease of testing, making it an excellent reference for recruiters and teams seeking high-quality frontend engineering.

## Key Features

- **Modern Web3/DeFi UI**: Hero section, features, blockchain technology highlights, statistics, testimonials, FAQ, and call-to-action.
- **Feature-Sliced Design (FSD)**: Clear separation of concerns with layers like `app`, `entities`, `features`, `widgets`, `pages`, and `shared`.
- **Reusable Components**: All UI elements are isolated, testable, and documented via Storybook.
- **TypeScript & React**: Type-safe, robust, and scalable codebase.
- **TailwindCSS**: Utility-first styling with custom theming.
- **Authentication Mock**: Example login and registration flows with context-based auth.
- **Storybook Integration**: Visual documentation and isolated component development.
- **Testing**: Ready for unit and integration tests with Vitest and Testing Library.

## Tech Stack

- **React** (with hooks)
- **TypeScript**
- **Vite** (for fast development and builds)
- **TailwindCSS** (custom theme)
- **Storybook** (UI documentation)
- **Vitest** (testing)
- **Feature-Sliced Design** (FSD architecture)

## Project Structure

```
src/
  app/         # Global providers and routing
  entities/    # Business entities (e.g., Blockchain, FAQ, Feature, Testimonial)
  features/    # User-focused features (e.g., FAQ toggle, subscribe form)
  layouts/     # Page layouts (Header, Footer, MainLayout)
  pages/       # Application pages (HomePage, Auth pages)
  shared/      # Shared UI components, assets, hooks, utils, configs
  widgets/     # Large sections composed of entities/features (HeroSection, FAQSection, etc.)
  types/       # Global TypeScript types
```

## Getting Started

### Prerequisites

- **Node.js** (v18+ recommended)
- **npm** or **yarn**

### Installation

```bash
git clone https://github.com/your-username/neofi-landing.git
cd neofi-landing
npm install
# or
yarn install
```

### Running the Project

#### Development

```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:5173](http://localhost:5173) to view the app.

#### Storybook (Component Development & Docs)

```bash
npm run storybook
# or
yarn storybook
```
Open [http://localhost:6006](http://localhost:6006) to view Storybook.

#### Testing

```bash
npm run test
# or
yarn test
```

## Main Scripts

| Command             | Description                                 |
|---------------------|---------------------------------------------|
| `npm run dev`       | Start Vite dev server with mock API         |
| `npm run build`     | Build the project for production            |
| `npm run test`      | Run all tests (`*.test.tsx`)                |
| `npm run storybook` | Launch Storybook for UI development         |
| `npm run lint`      | Run ESLint for code quality                 |

## Component Documentation

- All UI components are documented and can be previewed in isolation via Storybook.
- Stories are located next to components or in `src/stories/`.

## Architectural Principles

- **Layered FSD**: Each layer depends only on lower layers (`shared` → `entities` → `features` → `widgets` → `pages`).
- **Short Import Aliases**: Use aliases like `@/shared/ui/Button` for clean imports.
- **Reusable & Testable**: Components are independent and easy to test.
- **Global Providers**: All global providers (theme, query, auth) are in `app/providers`.

## Demo Content

- **Hero Section**: "Revolutionizing Web3 Finance"
- **Features**: Scalability, Decentralization, Connectivity
- **Blockchain Section**: Security, Connectivity, Decentralization
- **Statistics**: Example user/transaction/country stats
- **Testimonials**: User feedback carousel
- **FAQ**: Common questions about blockchain and DeFi
- **CTA**: Call to action for sign-up

## Why This Project?

- **Recruiter-Friendly**: Clean, modern codebase with real-world architecture.
- **Showcases Best Practices**: Demonstrates advanced frontend patterns and tooling.
- **Ready for Extension**: Easily adaptable for real DeFi/Web3 products.

---

**Feel free to explore, run, and extend this project! If you have any questions, please contact me via [my email - nargiz1.ismayilova@gmail.com or [LinkedIn](https://www.linkedin.com/in/nargiz-dev/)].**

---        
