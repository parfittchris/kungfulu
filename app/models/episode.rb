class Episode < ApplicationRecord
    validates :title, :number, :season_id, presence: true

    has_one_attached :photo
    
    belongs_to :seasons,
    foreign_key: :season_id,
    class_name: :Season


end