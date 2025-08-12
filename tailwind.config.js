/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
  	extend: {
  		fontFamily: {
  			generalsans: [
  				'General Sans',
  				'sans-serif'
  			]
  		},
  		colors: {
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			tertiary: '#F2F2F2',
  			'custom-green-light': '#bfbfbf',
  			'custom-green-dark': '#a6a6a6',
  			'black-100': '#8c8c8c',
  			'black-200': '#737373',
  			'black-300': '#595959',
  			'white-100': '#404040',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		backgroundImage: {
  			primary: 'radial-gradient(ellipse 600% 80% at bottom left, #0b090a, #ffffff 100%)',
			primary2:'radial-gradient(ellipse 600% 80% at top left, #0b090a, #ffffff 100%)'
  		},
  		boxShadow: {
  			card: '0px 35px 120px -15px #211e35'
  		},
  		screens: {
  			xs: '450px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};