/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    	extend: {
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
    			text: 'var(--text)',
    			background: 'var(--background)',
    			'background-alt': 'var(--background-alt)',
    			primary: 'var(--primary)',
    			'primary-hover': 'var(--primary-hover)',
    			secondary: 'var(--secondary)',
    			'secondary-hover': 'var(--secondary-hover)',
    			accent: 'var(--accent)',
    			sidebar: {
    				DEFAULT: 'hsl(var(--sidebar-background))',
    				foreground: 'hsl(var(--sidebar-foreground))',
    				primary: 'hsl(var(--sidebar-primary))',
    				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
    				accent: 'hsl(var(--sidebar-accent))',
    				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
    				border: 'hsl(var(--sidebar-border))',
    				ring: 'hsl(var(--sidebar-ring))'
    			}
    		},
    		height: {
    			'50vh': '50vh'
    		}
    	},
    	screens: {
    		sm: '640px',
    		md: '768px',
    		lg: '1024px',
    		xl: '1280px',
    		'2xl': '1536px',
    		'2xl-max': {
    			max: '1535px'
    		},
    		'xl-max': {
    			max: '1279px'
    		},
    		'lg-max': {
    			max: '1023px'
    		},
    		'md-max': {
    			max: '767px'
    		},
    		'sm-max': {
    			max: '639px'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
}
