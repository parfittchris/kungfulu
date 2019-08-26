export const findMovies = () => (
    $.ajax({
        method: 'GET',
        url: '/api/movies',
    })
);

export const findMovie = (id) => (
    $.ajax({
        method: 'GET',
        url: `api/movies/${id}`,
    })
);

export const findTitle = (title) => (
    $.ajax({
        method: 'GET',
        url: `api/movies/search/${title}`,
    })
);

export const findGenre = (genre) => (
    $.ajax({
        method: 'GET',
        url: `api/movies/search/${genre}`,
    })
);

export const favMovie = (userId, movie) => (
    $.ajax({
        method: 'POST',
        url: `api/favorites`,
        data: {
            primary_key: 1,
            user_id: userId,
            likeable: movie,
        }
    })
)

export const removeFavMovie = (favoriteId, userId, movieId) => (
    $.ajax({
        method: 'DELETE',
        url: `api/favorites/${favoriteId}`,
        data: {
            user_id: userId,
            video_id: movieId,
            video_type: 'movie'
        }
    })
);