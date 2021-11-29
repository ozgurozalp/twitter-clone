import styles from './index.module.css';
import SearchForm from '../SearchForm';
import Trends from '../Trends';
import FollowSuggestions from '../FollowSuggestions';
import Footer from '../Footer';

export default function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<SearchForm />
			<Trends />
			<FollowSuggestions />
			<Footer />
		</aside>
	);
}
