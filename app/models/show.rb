class Show < ApplicationRecord
    validates :title, :year, :rating, :description, presence: true
    validates :title, uniqueness: true

    has_one_attached :video
    has_one_attached :image

    has_many :seasons,
    foreign_key: :show_id,
    class_name: :Season

    
end