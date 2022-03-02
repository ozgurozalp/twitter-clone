import { useRouter } from 'next/router';

import Button from '../Button';
import UserBox from '../UserBox';
import Logo from '../Logo';
import NavbarItem from './NavbarItem';

import { Explore, Home, Message, Notification, Bookmark, List, Profile, More } from '../Icons';

import styles from './index.module.css';

const menu = [
	{
		id: 1,
		name: 'Home',
		path: '/',
		icon: Home,
	},
	{
		id: 2,
		name: 'Explore',
		path: '/explore',
		icon: Explore,
	},
	{
		id: 3,
		name: 'Notifications',
		path: '/notifications',
		icon: Notification,
	},
	{
		id: 4,
		name: 'Messages',
		path: '/messages',
		icon: Message,
	},
	{
		id: 5,
		name: 'Bookmarks',
		path: '/bookmarks',
		icon: Bookmark,
	},
	{
		id: 6,
		name: 'Lists',
		path: '/lists',
		icon: List,
	},
	{
		id: 7,
		name: 'Profile',
		path: '/me',
		icon: Profile,
	},
	{
		id: 8,
		name: 'More',
		path: '/more',
		icon: More,
	},
];

export default function Navbar() {
	const router = useRouter();
	return (
		<aside className={styles.container}>
			<section>
				<div>
					<Logo />
					<nav className={styles.menu}>
						{menu.map(({ id, name, path, icon: Icon }) => (
							<NavbarItem key={id} active={router.pathname === path} icon={Icon} name={name} path={path} />
						))}
					</nav>
					<Button big>Tweet</Button>
				</div>
				<UserBox
					username='@ozqurozalp'
					fullName='Özgür 😋'
					picture='https://pbs.twimg.com/profile_images/1491909406006685703/3fL0jRYy_normal.jpg'
				/>
			</section>
		</aside>
	);
}
