@shows.each do |show|
    json.set! show.id do
    json.extract! show, :id, :title, :year, :rating, :description, :video_url, :seasons
    end
end
