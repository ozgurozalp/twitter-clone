import styles from './index.module.css';
import { Ellipsis } from '../Icons';
export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div>Terms of Service</div>
			<div>Privacy Policy</div>
			<div>Cookie Policy</div>
			<div>Ads info</div>
			<div className={styles.more}>
				<span>More</span> <Ellipsis className={styles.icon} />
			</div>
			<div>© {new Date().getFullYear()} Twitter, Inc.</div>
		</footer>
	);
}
