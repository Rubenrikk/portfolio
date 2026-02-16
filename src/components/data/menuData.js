const baseMenuItems = [
	{ link: '#', content: 'Home', icon: 'lucide:home' },
	{ link: '#about', content: 'Over mij', icon: 'octicon:person-24' },
	{ link: '#portfolio', content: 'Portfolio', icon: 'carbon:portfolio' }
];

export const mainMenu = baseMenuItems.map((item) => ({ ...item }));

export const menuBlog = baseMenuItems.map((item) => ({
	...item,
	link: item.link === '#' ? '/' : `/${item.link}`
}));

export const menu404 = baseMenuItems.map((item) => ({
	...item,
	link: item.link === '#' ? '/' : `/${item.link}`
}));
