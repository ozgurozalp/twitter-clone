import { Popular } from '../Icons';
import { IconButton } from '../Button';
import ShareTweet from '../ShareTweet';
import Tweets from '../Tweets';

import styles from './index.module.css';
import SearchForm from '../SearchForm';
import Sidebar from '../Sidebar';

export default function Timeline() {
	return (
		<section className={styles.container}>
			<div>
				<header className={styles.header}>
					<h3 className={styles.pageTitle}>Home</h3>
					<IconButton icon={<Popular className={styles.icon} />} />
				</header>
				<main className={styles.timeline}>
					<ShareTweet />
					<Tweets />
				</main>
			</div>
			<Sidebar />
		</section>
	);
}
