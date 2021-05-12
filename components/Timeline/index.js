import Sidebar from '../Sidebar';
import { Home, Popular } from '../Icons';
import Button, { IconButton } from '../Button';

import styles from './index.module.css';

export default function Timeline() {
	return (
		<section className={`${styles.timeline}`}>
			<main className='border-r border-l border-twitter-borderColor text-twitter-white text-2xl'>
				<header className={styles.header}>
					<h3 className={styles.pageTitle}>
						<span>Anasayfa</span>
					</h3>
					<IconButton icon={<Popular className='w-[22.5px] h-[22.5px] text-twitter-primary' />} />
				</header>
			</main>
		</section>
	);
}
