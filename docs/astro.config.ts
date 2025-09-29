// @ts-check
import { defineConfig } from 'astro/config'
import { vitePreprocess } from '@astrojs/svelte'
import starlight from '@astrojs/starlight'
import svelte from '@astrojs/svelte'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
	site: 'https://pbi.bearcu.id',
	base: '/', // /docs
	trailingSlash: 'ignore',
	integrations: [
		svelte({
			preprocess: vitePreprocess(),
		}),
		starlight({
			title: 'PBI Informatics',
			defaultLocale: 'id',
			sidebar: [
				{
					label: 'Panduan',
					autogenerate: { directory: 'panduan' },
				},
				{
					label: 'Tugas',
					autogenerate: { directory: 'tugas' },
				},
			],
			customCss: ['./src/styles/global.css'],
		}),
	],
	vite: {
		plugins: [tailwindcss()],
		server: {
			allowedHosts: ['.vn', 'ppc.bearcu.id', '.alfarouk.id'],
		},
	},
})
