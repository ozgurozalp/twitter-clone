import styles from './index.module.css';
import SuggestionItem from './SuggestionItem';
export default function FollowSuggestions() {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<span>Who to follow</span>
			</div>
			<SuggestionItem
				fullName='İREM SAK'
				userName='@1iremsakk'
				picture='https://pbs.twimg.com/profile_images/1340768393465638914/hRrwCQch_normal.jpg'
			/>
			<SuggestionItem
				fullName='İREM SAK'
				userName='@1iremsakk'
				picture='https://pbs.twimg.com/profile_images/1340768393465638914/hRrwCQch_normal.jpg'
			/>
			<SuggestionItem
				fullName='İREM SAK'
				userName='@1iremsakk'
				picture='https://pbs.twimg.com/profile_images/1340768393465638914/hRrwCQch_normal.jpg'
			/>
			<div className={styles.footer}>
				<span>Show more</span>
			</div>
		</div>
	);
}
