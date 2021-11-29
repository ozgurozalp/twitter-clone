import styles from './index.module.css';
import { IconButton } from '../Button';
import { Ellipsis } from '../Icons';
export default function TrendItem({ name, type, count }) {
	return (
		<div className={styles.item}>
			<div className={styles.details}>
				<span className={styles.type}>{type}</span>
				<span className={styles.name}>{name}</span>
				{count && <span className={styles.count}>{count} Tweets</span>}
			</div>
			<IconButton className={styles.button} icon={<Ellipsis className={styles.icon} />} />
		</div>
	);
}
