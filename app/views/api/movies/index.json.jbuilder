@movies.each do |movie|
    json.set! movie.id do
    json.extract! movie, :id, :title, :year, :rating, :description, :video_url
    end
end
