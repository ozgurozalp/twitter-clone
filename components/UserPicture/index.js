import styles from './index.module.css';
export default function UserPicture({ className = '', src, alt }) {
	return (
		<div className={`${styles.img} ${className}`}>
			<img src={src} alt={alt} />
		</div>
	);
}
