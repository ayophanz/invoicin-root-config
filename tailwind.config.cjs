/* eslint-disable no-undef */
// const path = require('node:path');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
        "./index.html",
        "./src/**/*.{html,js,ts,jsx,tsx}",
    ],
	theme: {
		extend: {},
	},
	corePlugins: {
		preflight: true
	},
	plugins: [
		//
	],
};
