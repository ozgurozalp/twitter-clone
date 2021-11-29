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
				fullName='Daisy_1907'
				userName='@1907Daisy'
				picture='https://pbs.twimg.com/profile_images/1398284013547229184/u-sxfXgX_normal.jpg'
			/>
			<SuggestionItem
				fullName='Murat Ongun'
				userName='@Mrt_Ongun'
				picture='https://pbs.twimg.com/profile_images/1162356929022373888/P8vJqsrU_normal.jpg'
				verified={true}
			/>
			<div className={styles.footer}>
				<span>Show more</span>
			</div>
		</div>
	);
}
