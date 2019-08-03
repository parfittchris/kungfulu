export const findShows = () => (
    $.ajax({
        method: 'GET',
        url: '/api/shows',
    })
);

export const findShow = (id) => (
    $.ajax({
        method: 'GET',
        url: `api/shows/${id}`,
    })
);