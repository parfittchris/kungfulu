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