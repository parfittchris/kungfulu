class CategoryJoin < ApplicationRecord

    belongs_to :joinable, polymorphic: true 

    belongs_to :categories,
    foreign_key: :categoryId,
    class_name: :Category

end
