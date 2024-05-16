import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'TeaDocs',
			social: {
				github: 'https://github.com/philipstubbs13/tea-docs',
			},
			sidebar: [
				{
					label: 'Welcome',
					items: [
						{ label: 'About me', link: '/welcome' },
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
