class Movie < ApplicationRecord
    validates :title, :year, :rating, :description, presence: true
    validates :title, uniqueness: true

    has_one_attached :video
    has_one_attached :image


    def self.find_by_title(title)
        movie = Movie.find_by(title: title)
        return nil unless movie
    end
end