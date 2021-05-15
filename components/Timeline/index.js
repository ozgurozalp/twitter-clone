import { Popular } from '../Icons';
import { IconButton } from '../Button';
import ShareTweet from '../ShareTweet';
import Space from '../Space';
import Tweets from '../Tweets';

import styles from './index.module.css';

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
					<Space className={styles.space} />
					<Tweets />
				</main>
			</div>
		</section>
	);
}
