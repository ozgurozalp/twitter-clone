import styles from './index.module.css';
import Sidebar from '../Sidebar';

export default function Timeline() {
	return (
		<section className={styles.timeline}>
			<main className='border-r border-l border-twitter-borderColor'>TimeLine</main>
			<Sidebar />
		</section>
	);
}
