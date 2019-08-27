# == Schema Information
#
# Table name: category_joins
#
#  id            :bigint           not null, primary key
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  categoryId    :integer          not null
#  joinable_type :string
#  joinable_id   :bigint
#

class CategoryJoin < ApplicationRecord

    belongs_to :joinable, polymorphic: true 

    belongs_to :categories,
    foreign_key: :categoryId,
    class_name: :Category

end
