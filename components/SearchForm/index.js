import styles from './index.module.css';
import { Search } from '../Icons';
export default function SearchForm() {
	return (
		<div className={styles.container}>
			<form>
				<div className={styles.icon}>
					<Search />
				</div>
				<div className={styles.input}>
					<input type='search' placeholder='Search Twitter' />
				</div>
			</form>
		</div>
	);
}
