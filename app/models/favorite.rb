class Favorite < ApplicationRecord

    belongs_to :likeable, polymorphic: true
    
    belongs_to :users,
    foreign_key: :user_id,
    class_name: :User

end