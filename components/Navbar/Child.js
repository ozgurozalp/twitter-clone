import Link from 'next/link';
import { IconButton } from '../Button';

import styles from './index.module.css';

export default function Child({ path, name, icon: Icon, active = undefined }) {
	return (
		<Link href={path}>
			<a className={`${styles.item} ${active ? styles.active : ''}`}>
				<IconButton className={styles.link} icon={<Icon className={styles.icon} active={active} />}>
					{name}
				</IconButton>
			</a>
		</Link>
	);
}
