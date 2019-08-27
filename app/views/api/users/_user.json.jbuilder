
json.extract! user, :id, :email

json.favorites do 
    json.array! user.favorites do |favorite|
        json.id favorite.likeable
    end
end
