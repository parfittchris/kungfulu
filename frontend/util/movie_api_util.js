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
