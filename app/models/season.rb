class Season < ApplicationRecord
    validates :number, :show_id, presence: true

    has_many :episodes,
    foreign_key: :season_id,
    class_name: :Episode

    belongs_to :show,
    foreign_key: :show_id,
    class_name: :Show

end