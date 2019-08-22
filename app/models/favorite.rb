class Favorite < ApplicationRecord
    validates :user_id, :video_id, :video_type, presence: true

    belongs_to :likeable, polymorphic: true
    
    belongs_to :users,
    foreign_key: :user_id,
    class_name: :User

    # belongs_to :movies,
    # foreign_key: :video_id,
    # class_name: :Movie

    # belongs_to :shows,
    # foreign_key: :video_id,
    # class_name: :Show

end