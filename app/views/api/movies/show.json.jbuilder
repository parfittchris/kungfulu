json.set! @movie.id do
    json.extract! @movie, :id, :title, :year, :rating, :description,

    if (movie.video.attached?)
            json.video_url url_for(@movie.video)
    end
end