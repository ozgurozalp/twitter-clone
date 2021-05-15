import { Popular } from '../Icons';
import { IconButton } from '../Button';
import ShareTweet from '../ShareTweet';

import styles from './index.module.css';
import Space from '../Space';
import Tweets from '../Tweets';

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
					<Space className='bg-twitter-secondary' />
					<Tweets />
				</main>
			</div>
		</section>
	);
}
