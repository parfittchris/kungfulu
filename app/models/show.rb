class Show < ApplicationRecord
    validates :title, :year, :rating, :description, :video_url, presence: true
    validates :title, uniqueness: true

    has_one_attached :video

    has_many :seasons,
    foreign_key: :show_id,
    class_name: :Season

    
end