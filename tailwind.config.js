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
					dark: '#16212c',
					primary: '#1da1f2',
					borderColor: '#38444d',
					white: '#fff',
					'menu-hover': 'rgba(29, 161, 242, 0.1)',
					'btn-hover': '#1a91da',
					'text-muted': 'rgb(136, 153, 166)',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
