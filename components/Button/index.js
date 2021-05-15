import styles from './index.module.css';

export default function Button({ className = '', icon = false, big = false, children, ...props }) {
	return (
		<button type='button' className={`${styles.btn} ${big ? styles.big : ''} ${className}`} {...props}>
			<span>{children}</span>
		</button>
	);
}

export function IconButton({ className = '', icon, children = null, ...props }) {
	return (
		<button className={`${styles.btnIcon} ${!children ? styles.onlyIcon : ''} ${className}`} {...props}>
			<span className={styles.icon}>{icon}</span>
			{children && <span className={styles.text}>{children}</span>}
		</button>
	);
}
