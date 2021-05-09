import styles from './index.module.css';
import Link from 'next/link';

export default function Child({ path, name, icon: Icon, active = false }) {
	return (
		<Link href={path}>
			<a className={styles.item}>
				<div className={`${styles.link} ${active ? styles.active : ''}`}>
					<div className={styles.iconContainer}>
						<Icon active={active ? active : undefined} className={styles.icon} />
					</div>
					<span className='mr-4 text-xl'>{name}</span>
				</div>
			</a>
		</Link>
	);
}
