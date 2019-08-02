class Show < ApplicationRecord
    validates :title, :year, :rating, :description, :video_url, presence: true
    validates :title, uniqueness: true

    
end