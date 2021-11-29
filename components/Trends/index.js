import styles from './index.module.css';
import { IconButton } from '../Button';
import TrendItem from './TrendItem';
import { Cog } from '../Icons';

export default function Trends() {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<span>Trends for you</span>
				<IconButton icon={<Cog />} />
			</div>
			<TrendItem name='#melekmosso' type='Trending in Turkey' />
			<TrendItem name='Tecavüzcü Pislik2' count='6,561' type='Trending in Turkey' />
			<TrendItem name='ŞokEdecek Detaylar' type='Trending in Turkey' />
			<TrendItem name='#YolunSonuGöründü' count='43.9K' type='Politics · Trending' />
			<TrendItem name='#sonders18haziran' count='17.1K' type='Trending in Turkey' />
			<div className={styles.footer}>
				<span>Show more</span>
			</div>
		</div>
	);
}
