import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightBlog from "starlight-blog";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightBlog()],
      title: "TeaDocs",
      social: {
        github: "https://github.com/philipstubbs13/tea-docs",
        linkedin: "https://www.linkedin.com/in/philipjstubbs/",
        threads: "https://www.threads.net/@philipstubbs13",
        twitter: "https://twitter.com/iamPhilStubbs",
        youtube: "https://www.youtube.com/channel/UCgUxeMdOxRnMIkJZrWYP0wQ",
      },
      sidebar: [
        {
          label: "Welcome",
          items: [
            { label: "About me", link: "/welcome" },
            { label: "Experience", link: "/experience" },
            { label: "Ask me anything", link: "/contact" },
          ],
        },
        {
          label: "Blog",
          items: [{ label: "Posts", link: "/blog" }],
        },
        {
          label: "Technical Writing",
          items: [{ label: "Samples", link: "/technical-writing" }],
        },
        {
          label: "Notes",
          items: [
            { label: "React Compiler", link: "/notes/react-compiler" },
            { label: "React 19 Changes", link: "/notes/react-19-changes" },
            {
              label: "JavaScript 2024 Features",
              link: "/notes/javascript-2024-features",
            },
            {
              label: "Web UX Design for High Converting Websites",
              link: "/notes/web-ux-design-for-high-converting-websites",
            },
            {
              label: "Guide for Launching Your Next Big Idea",
              link: "/notes/guide-for-launching-your-next-big-idea",
            },
            {
              label: "Figma for Developers, v2",
              link: "/notes/figma-for-developers-v2",
            },
            {
              label: "Design Systems with Storybook, v2",
              link: "/notes/design-systems-with-storybook-v2",
            },
            {
              label: "Machine Learning in JavaScript",
              link: "/notes/machine-learning-in-javascript",
            },
            {
              label: "Complete Intro to Computer Science",
              link: "/notes/complete-intro-to-computer-science",
            },
            {
              label: "Client-Side GraphQL with React, v2",
              link: "/notes/client-side-graphql-with-react",
            },
            {
              label: "Server Side GraphQL in Next.js",
              link: "/notes/server-side-graphql-nextjs",
            },
            {
              label: "Headless CMS with Next.js",
              link: "/notes/headless-cms-with-nextjs",
            },
            {
              label: "Intermediatee Next.js",
              link: "/notes/intermediate-nextjs",
            },
            { label: "Prisma", link: "/notes/prisma" },
            {
              label: "Front-End System Design",
              link: "/notes/frontend-system-design",
            },
            {
              label: "Backend Architectures",
              link: "/notes/backend-architectures",
            },
            {
              label: "Professional JS",
              link: "/notes/professional-js-features",
            },
            {
              label: "Last Algorithms Course You'll Need",
              link: "/notes/last-algorithms-course-youll-need",
            },
            {
              label: "JavaScript Design Patterns for Web Apps",
              link: "/notes/javascript-design-patterns-for-web-apps",
            },
            {
              label: "Intro to Containers",
              link: "/notes/intro-to-containers",
            },
            {
              label: "PHP Fundamentals",
              link: "/notes/php-fundamentals",
            },
            {
              label: "Web Security",
              link: "/notes/web-security",
            },
            {
              label: "Java Fundamentals",
              link: "/notes/java-fundamentals",
            },
            {
              label: "Progressive Web Apps",
              link: "/notes/progressive-web-apps",
            },
            {
              label: "Software Developer Success",
              link: "/notes/software-developer-success",
            },
            {
              label: "React Native",
              link: "/notes/react-native",
            },
            {
              label: "Node.js",
              link: "/notes/nodejs",
            },
            {
              label: "Intro to SQLite",
              link: "/notes/intro-to-sqlite",
            },
            {
              label: "Intro to Databases",
              link: "/notes/intro-to-databases",
            },
            {
              label: "Intro to Linux and the Command Line",
              link: "/notes/intro-to-linux-and-the-command-line",
            },
            {
              label: "Developer Productivity",
              link: "/notes/developer-productivity",
            },
            {
              label: "Testing Fundamentals",
              link: "/notes/testing-fundamentals",
            },
            {
              label: "Web Peformance Fundamentals",
              link: "/notes/web-performance-fundamentals",
            },
            {
              label: "Next.js 15",
              link: "/notes/nextjs-15",
            },
            {
              label: "Intro to SQL",
              link: "/notes/intro-to-sql",
            },
            {
              label: "JavaScript and TypeScript monorepos",
              link: "/notes/js-ts-monorepos",
            },
            {
              label: "HTML Email Development",
              link: "/notes/html-email-development",
            },
            {
              label: "SVG Essentials and Animations",
              link: "/notes/svg-essentials-animations",
            },
            {
              label: "Rust Programming Language",
              link: "/notes/rust-programming-language",
            },
            {
              label: "Web Development Project: Personal Portfolio Website",
              link: "/notes/web-development-project-personal-portfolio",
            },
            {
              label: "Getting Started with JavaScript",
              link: "/notes/getting-started-with-javascript",
            },
            {
              label: "Getting a Software Engineering Job",
              link: "/notes/getting-a-software-engineering-job",
            },
            {
              label: "Intro to React",
              link: "/notes/intro-to-react",
            },
            {
              label: "Bare Metal JavaScript",
              link: "/notes/bare-metal-javascript",
            },
            {
              label: "JavaScript First Steps",
              link: "/notes/javascript-first-steps",
            },
            {
              label: "Engineering Management",
              link: "/notes/engineering-management",
            },
            {
              label: "Artificial Intelligence",
              link: "/notes/artificial-intelligence",
            },
            {
              label: "Forms",
              link: "/notes/forms",
            },
            {
              label: "Vue.js",
              link: "/notes/vuejs",
            },
            {
              label: "Intro to Web Development",
              link: "/notes/intro-to-web-development",
            },
            {
              label: "Vim Fundamentals",
              link: "/notes/vim-fundamentals",
            },

            {
              label: "Making TypeScript Stick",
              link: "/notes/making-typescript-stick",
            },
            {
              label: "Professional CSS",
              link: "/notes/professional-css",
            },
            {
              label: "Testing Web Apps With Cypress",
              link: "/notes/testing-web-apps-with-cypress",
            },
            {
              label: "Web Components",
              link: "/notes/web-components",
            },
            {
              label: "Production Grade Angular",
              link: "/notes/production-grade-angular",
            },
            {
              label: "Functional Javascript First Steps",
              link: "/notes/functional-javascript-first-steps",
            },
            {
              label: "Mastering Chrome Developer Tools",
              link: "/notes/mastering-chrome-developer-tools",
            },
            {
              label: "Website Accessibility",
              link: "/notes/web-accessibility",
            },
            {
              label: "Sorting Algorithms",
              link: "/notes/sorting-algorithms",
            },
            {
              label: "Next.js Fundamentals",
              link: "/notes/nextjs-fundamentals-v4",
            },
            {
              label: "Debugging React Apps",
              link: "/notes/debugging-react-apps",
            },
            {
              label: "Signals in React",
              link: "/notes/signals-in-react",
            },
            {
              label: "Intermediate React v6",
              link: "/notes/intermediate-react-v6",
            },
            {
              label: "Go for Professional Developers",
              link: "/notes/go-for-professional-developers",
            },
            {
              label: "Become a VS Code Power User",
              link: "/notes/become-vscode-power-user",
            },
            {
              label: "Fullstack TypeScript",
              link: "/notes/fullstack-typescript",
            },
          ],
        },
      ],
    }),
  ],
});
