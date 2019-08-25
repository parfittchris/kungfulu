class Category < ApplicationRecord
    validates :name, presence: true

    has_many :category_joins,
    foreign_key: :categoryId,
    class_name: :CategoryJoin

end
