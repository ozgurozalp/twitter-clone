import styles from './index.module.css';

export default function Container({ children }) {
	return <section className={styles.wrapper}>{children}</section>;
}
