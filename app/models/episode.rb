class Episode < ApplicationRecord
    validates :title, :number, :season_id, presence: true

end