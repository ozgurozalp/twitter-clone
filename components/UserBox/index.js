import { Ellipsis } from '../Icons';
import UserPicture from '../UserPicture';

import styles from './index.module.css';

export default function UserBox({ className = '', fullName, username, picture }) {
	return (
		<div className={`${styles.box} ${className}`}>
			<UserPicture src={picture} alt={fullName} />
			<div className={styles.info}>
				<span className={styles.name}>{fullName}</span>
				<span className={styles.username}>{username}</span>
			</div>
			<Ellipsis className={styles.dots} />
		</div>
	);
}
