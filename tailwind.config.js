/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
	],
	theme: {
		extend: {},
		fontFamily: {
			sans: ['Geist Sans', 'sans-serif'],
			mono: ['Geist Mono', 'monospace'],
		},
	},
	plugins: [],
}
