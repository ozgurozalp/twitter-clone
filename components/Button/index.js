import styles from './index.module.css';
export default function Button({ className = '', children, ...props }) {
	return (
		<button className={`${styles.btn} ${className}`} {...props}>
			<span>{children}</span>
		</button>
	);
}
