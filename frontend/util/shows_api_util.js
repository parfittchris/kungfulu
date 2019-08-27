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


export const findTitle = (title) => (
    $.ajax({
        method: 'GET',
        url: `api/shows/search/${title}`,
    })
);

export const favShow = (userId, show) => (
    $.ajax({
        method: 'POST',
        url: `api/favorites`,
        data: {
            user_id: userId,
            likeable: show,
            type: 'Show'
        }
    })
)

export const removeFavShow = (favoriteId, userId, showId) => (
    $.ajax({
        method: 'DELETE',
        url: `api/favorites/${favoriteId}`,
        data: {
            user_id: userId,
            video_id: showId,
            video_type: 'Show'
        }
    })
);