class Movie < ApplicationRecord
    validates :title, :year, :rating, :description, :video_url, presence: true
    validates :title, uniqueness: true

    has_one_attached :video
end