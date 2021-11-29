import styles from './index.module.css';
import UserPicture from '../UserPicture';
import Button, { OutlinedButton } from '../Button';
import { Verified } from '../Icons';
export default function SuggestionItem({ fullName, userName, picture, verified = false }) {
	return (
		<div className={styles.item}>
			<div className={styles.user}>
				<UserPicture className={styles.picture} src={picture} alt={fullName} />
				<div className={styles.details}>
					<div className={styles.name}>
						<span>{fullName}</span>
						{verified && <Verified className={styles.verified} />}
					</div>
					<div className={styles.username}>{userName}</div>
				</div>
			</div>
			<div className={styles.action}>
				<OutlinedButton>Follow</OutlinedButton>
			</div>
		</div>
	);
}
