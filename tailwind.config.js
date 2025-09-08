/** @type {import('tailwindcss').Config} */

export default {
	content: [
	  './index.html',
	  './src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
	  extend: {
		 fontFamily: {
			merriweather: ['"Merriweather"', 'serif'],
			lato: ['"Lato"', 'sans-serif'],
		 },
		 backdropBlur: {
			sm: '4px',
		 },
		 container: {
			center: true,
			padding: "1rem",
		 },
	  },
	},
	plugins: [require('@tailwindcss/typography')],
 }
 