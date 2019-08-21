json.set! @show.id do
    json.extract! @show, :id, :title, :year, :rating, :description

    if (@show.video.attached?)
        json.video_url url_for(@show.video)
    end

    if (@show.image.attached?)
            json.image_url url_for(@show.image)
    end
end