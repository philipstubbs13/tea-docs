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
			],
		}),
	],
});
