import { Logo as TwitterLogo } from '../Icons';
import { IconButton } from '../Button';
import Link from 'next/link';

import styles from './index.module.css';

export default function Logo() {
	return (
		<Link href='/'>
			<a className={styles.link}>
				<IconButton icon={<TwitterLogo className={styles.logo} />} />
			</a>
		</Link>
	);
}
