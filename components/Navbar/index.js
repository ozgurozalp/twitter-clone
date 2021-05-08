import Link from 'next/link';
import { Explore, Home, Message, Notification, Bookmark, List, Profile, More } from '../Icons';

import styles from './index.module.css';

const menu = [
	{
		id: 1,
		name: 'Anasayfa',
		path: '/',
		icon: Home,
	},
	{
		id: 2,
		name: 'Keşfet',
		path: '/explore',
		icon: Explore,
	},
	{
		id: 3,
		name: 'Bildirimler',
		path: '/notifications',
		icon: Notification,
	},
	{
		id: 4,
		name: 'Mesajlar',
		path: '/messages',
		icon: Message,
	},
	{
		id: 5,
		name: 'Yer İşaretleri',
		path: '/bookmarks',
		icon: Bookmark,
	},
	{
		id: 6,
		name: 'Listeler',
		path: '/lists',
		icon: List,
	},
	{
		id: 7,
		name: 'Profil',
		path: '/me',
		icon: Profile,
	},
	{
		id: 8,
		name: 'Daha fazla',
		path: '/more',
		icon: More,
	},
];
// Todo bitir burayı
export default function Navbar() {
	return (
		<aside className='px-3'>
			<nav className={styles.menu}>
				{menu.map(({ id, name, path, icon: Icon }) => (
					<Link key={id} href={path}>
						<a className={styles.item}>
							<div>
								{Icon && (
									<div className={styles.icon}>
										<Icon />
									</div>
								)}
								<span className='mr-4'>{name}</span>
							</div>
						</a>
					</Link>
				))}
			</nav>
		</aside>
	);
}
