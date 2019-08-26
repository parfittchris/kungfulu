class Favorite < ApplicationRecord

    belongs_to :likeable, polymorphic: true
    
    belongs_to :users,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

end