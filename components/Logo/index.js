import styles from './index.module.css';
import { Logo as TwitterLogo } from '../Icons';
export default function Logo() {
	return (
		<div className={styles.logo}>
			<TwitterLogo className='cursor-pointer' />
		</div>
	);
}
