import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'master',
		repo: 'https://github.com/Ziucay/ziucay.github.io.git', // Update to point to your repository
		user: {
			name: 'Azat Bariev', // update to use your name
			email: 'justlumajustmail@gmail.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
