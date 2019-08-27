@shows.each do |showItem|
    json.set! showItem.id do
    json.extract! showItem, :id, :title, :year, :rating, :description, :categories
        if (showItem.video.attached?)
            json.video_url url_for(showItem.video)
        end

        if (showItem.image.attached?)
            json.image_url url_for(showItem.image)
        end
    end
end
