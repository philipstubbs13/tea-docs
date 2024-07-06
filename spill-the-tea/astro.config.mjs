import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [starlightBlog()],
			title: 'TeaDocs',
			social: {
				github: 'https://github.com/philipstubbs13/tea-docs',
				linkedin: 'https://www.linkedin.com/in/philipjstubbs/',
				threads: 'https://www.threads.net/@philipstubbs13',
				twitter: 'https://twitter.com/iamPhilStubbs',
				youtube: 'https://www.youtube.com/channel/UCgUxeMdOxRnMIkJZrWYP0wQ',
			},
			sidebar: [
				{
					label: 'Welcome',
					items: [
						{ label: 'About me', link: '/welcome' },
						{ label: 'Experience', link: '/experience' },
						{ label: 'Ask me anything', link: '/contact' },
					],
				},
				{
					label: 'Blog',
					items: [
						{ label: 'Posts', link: '/blog' },
					],
				},
				{
					label: 'Technical Writing',
					items: [
						{ label: 'Samples', link: '/technical-writing' },
					],
				},
				{
					label: 'Notes',
					items: [
						{ label: 'React Compiler', link: '/notes/react-compiler' },
						{ label: 'React 19 Changes', link: '/notes/react-19-changes' },
						{ label: 'JavaScript 2024 Features', link: '/notes/javascript-2024-features' },
						{ label: 'Web UX Design for High Converting Websites', link: '/notes/web-ux-design-for-high-converting-websites' },
						{ label: 'Guide for Launching Your Next Big Idea', link: '/notes/guide-for-launching-your-next-big-idea' },
						{ label: 'Figma for Developers, v2', link: '/notes/figma-for-developers-v2' },
						{ label: 'Design Systems with Storybook, v2', link: '/notes/design-systems-with-storybook-v2' },
						{ label: 'Machine Learning in JavaScript', link: '/notes/machine-learning-in-javascript' },
						{ label: 'Complete Intro to Computer Science', link: '/notes/complete-intro-to-computer-science' },
						{ label: 'Client-Side GraphQL with React, v2', link: '/notes/client-side-graphql-with-react' },
						{ label: 'Server Side GraphQL in Next.js', link: '/notes/server-side-graphql-nextjs' },
					],
				},
			],
		}),
	],
});
