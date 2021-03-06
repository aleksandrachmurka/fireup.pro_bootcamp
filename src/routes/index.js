import MoviesList from '../components/MoviesList';
import MovieDetails from '../components/MovieDetails';
import BookingsList from '../components/BookingsList';
import FavoritesList from '../components/FavoritesList';

export default {
	routes: [
		{
			id: 1,
			path: '/movies',
			component: MoviesList,
			// exact true - bieże path dosłownie
			exact: true,
		},
		{
			id: 2,
			path: '/movies/:id',
			component: MovieDetails,
			exact: true,
		},
		{
			id: 3,
			path: '/bookings/:id',
			component: BookingsList,
			exact: true,
		},
		{
			id: 3,
			path: '/favorites',
			component: FavoritesList,
			exact: true,
		}

	],

	redirect: [
		{
			id: 1,
			from: '/',
			to: '/movies',
			exact: true,
		},
		{
			id: 2,
			from: '/redirect',
			to: '/movies',
			exact: true,
		}
	]
}