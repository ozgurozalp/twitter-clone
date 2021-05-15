import Head from 'next/head';

import Navbar from '../components/Navbar';
import Container from '../components/Container';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Twitter Clone | Özgür ÖZALP</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<Container>
				<Navbar />
				<Component {...pageProps} />
			</Container>
		</>
	);
}

export default MyApp;
