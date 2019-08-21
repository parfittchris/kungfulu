# == Schema Information
#
# Table name: categories
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Category < ApplicationRecord
    validates :name, presence: true

    has_many :category_joins,
    foreign_key: :categoryId,
    class_name: :CategoryJoin


    belongs_to :genres, polymorphic: true
    # has_many :movies,
    # through: :category_joins,
    # source: :movies,
    # source_type: :movies

    # has_many :shows,
    # through: :category_joins,
    # source: :shows,
    # source_type: :shows
end
