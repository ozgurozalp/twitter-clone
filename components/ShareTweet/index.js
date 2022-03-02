import { Emoji, Gif, Media, Poll, Schedule } from '../Icons';
import UserPicture from '../UserPicture';
import Button, { IconButton } from '../Button';
import styles from './index.module.css';

export default function ShareTweet() {
	return (
		<>
			<div className={styles.container}>
				<UserPicture
					src='https://pbs.twimg.com/profile_images/1491909406006685703/3fL0jRYy_normal.jpg'
					alt='Özgür ÖZALP'
					className={styles.picture}
				/>
				<section className={styles.tweet}>
					<div>
						<textarea placeholder="What's happening?" />
					</div>
					<div>
						<IconButton className={styles.icon} icon={<Media />} />
						<IconButton className={styles.icon} icon={<Gif />} />
						<IconButton className={styles.icon} icon={<Poll />} />
						<IconButton className={styles.icon} icon={<Emoji />} />
						<IconButton className={styles.icon} icon={<Schedule />} />
						<Button className={styles.tweetBtn} disabled>
							Tweet
						</Button>
					</div>
				</section>
			</div>
			<div className={styles.space} />
		</>
	);
}
