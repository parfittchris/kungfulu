class Show < ApplicationRecord
    validates :title, :year, :rating, :description, presence: true
    validates :title, uniqueness: true

    has_many :seasons,
    foreign_key: :show_id,
    class_name: :Season

    
end