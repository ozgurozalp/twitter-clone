import { useRouter } from 'next/router';
import Logo from '../Logo';
import { Explore, Home, Message, Notification, Bookmark, List, Profile, More } from '../Icons';
import Button from '../Button';
import styles from './index.module.css';
import UserBox from '../UserBox';
import Child from './Child';

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

export default function Navbar() {
	const router = useRouter();
	return (
		<aside className='px-3 pb-3 flex flex-col'>
			<section>
				<Logo />
				<nav className={styles.menu}>
					{menu.map(({ id, name, path, icon: Icon }) => (
						<Child key={id} active={router.pathname === path} icon={Icon} name={name} path={path} />
					))}
				</nav>
				<Button>Tweetle</Button>
			</section>
			<UserBox
				className='mt-auto'
				username='@ozqurozalp'
				fullName='Özgür 😋'
				picture='https://pbs.twimg.com/profile_images/1361975835935318017/Oh3W_2CV_normal.jpg'
			/>
		</aside>
	);
}
