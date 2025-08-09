import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				pixel: ['"Press Start 2P"', 'monospace'],
				mono: ['Monaco', 'Consolas', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				pixel: {
					bg: 'hsl(var(--pixel-bg))',
					surface: 'hsl(var(--pixel-surface))',
					grid: 'hsl(var(--pixel-grid))',
					green: 'hsl(var(--pixel-green))',
					blue: 'hsl(var(--pixel-blue))',
					cyan: 'hsl(var(--neon-cyan))'
				},
				blood: {
					red: 'hsl(var(--blood-red))',
					dark: 'hsl(var(--blood-red-dark))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'pixel-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 5px hsl(var(--blood-red) / 0.5)' 
					},
					'50%': { 
						boxShadow: '0 0 20px hsl(var(--blood-red) / 0.8), 0 0 30px hsl(var(--blood-red) / 0.4)' 
					}
				},
				'float-subtle': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-8px)' }
				},
				'grid-move': {
					'0%': { transform: 'translate(0, 0)' },
					'100%': { transform: 'translate(20px, 20px)' }
				},
				'pixel-fade': {
					'0%': { opacity: '0', transform: 'scale(0.8)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pixel-glow': 'pixel-glow 2s ease-in-out infinite',
				'float': 'float-subtle 3s ease-in-out infinite',
				'grid-move': 'grid-move 10s linear infinite',
				'pixel-fade': 'pixel-fade 0.5s ease-out'
			},
			boxShadow: {
				'pixel': '0 4px 12px hsl(0 0% 0% / 0.8)',
				'blood': '0 0 20px hsl(var(--blood-red) / 0.5)',
				'green': '0 0 20px hsl(var(--pixel-green) / 0.5)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
