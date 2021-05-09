import styles from './index.module.css';
import Sidebar from '../Sidebar';

export default function Timeline() {
	return (
		<section className={styles.timeline}>
			<main className='border-r border-l border-twitter-borderColor text-twitter-white text-2xl p-10'>TimeLine</main>
			<Sidebar />
		</section>
	);
}
