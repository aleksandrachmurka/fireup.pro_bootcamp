import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';
import { connect } from 'react-redux';
import { addToFavorites } from '../../actions/addToFavorites.js';
import { removeFromFavorites } from '../../actions/removeFromFavorites.js';
import styles from './Movie.module.scss';
import RunningTime from '../RunningTime';

const Movie = ({id, title, image, releaseDate, duration, description, availableSeats, favorites, addMovie, removeMovie}) => {
	return (
		<div className={styles.container}>
			<div styles={styles.movieDetails}>
				<div className={styles.backgroundImage} style={{backgroundImage: `url(${image})`}} />
				<div className={styles.text}>
					<h3>
						{title}
					</h3>
					<h5>Premiera: {formatDate(releaseDate)}</h5>
					<RunningTime  duration={duration}/>
					<p> {description} </p>
				</div>
			</div>
			<NavLink to={`/favorites`}>
				{ favorites.includes(id) === false ?
							<button className={styles.button} onClick={()=> addMovie(id)}>Dodaj do ulubionych</button>
							:
					<button className={styles.button} onClick={()=> removeMovie(id)}>Usuń z ulubionych</button>
				}
			</NavLink>
			<NavLink to={`/movies/${id}`}>
            	<button className={styles.button}>Oglądam!</button>
        	</NavLink>
		</div>
	)
}

Movie.defaultProps = {
	title: 'Bez tytułu',
	image: 'Brak obrazka',
	releaseDate: 'Brak daty',
	description: 'Brak opisu',
};

Movie.proptypes = {
	title: PropTypes.string,
	image: PropTypes.string,
	releaseDate: PropTypes.number,
	description: PropTypes.string,
}

const mapStateToProps = store => ({
	favorites: store.favorites.favorites,
});

export default connect(mapStateToProps, { addMovie: addToFavorites, removeMovie: removeFromFavorites })(Movie);