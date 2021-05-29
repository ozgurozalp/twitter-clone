module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			xl: '1265px',
		},
		extend: {
			colors: {
				twitter: {
					dark: '#15202B',
					primary: '#1da1f2',
					secondary: 'rgb(25,39,52)',
					search: 'rgb(37, 51, 65)',
					borderColor: '#38444d',
					white: '#fff',
					'menu-hover': 'rgba(29, 161, 242, 0.1)',
					'btn-hover': '#1a91da',
					'text-muted': 'rgb(136, 153, 166)',
					'trend-hover': '#ffffff08',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
