# == Schema Information
#
# Table name: category_joins
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  categoryId :integer          not null
#  videoId    :integer          not null
#

class CategoryJoin < ApplicationRecord
    # validates :videoId, :categoryId, presence: true

    belongs_to :movies,
    foreign_key: :videoId,
    class_name: :Movie

    belongs_to :shows,
    foreign_key: :videoId,
    class_name: :Show

    belongs_to :categories,
    foreign_key: :categoryId,
    class_name: :Category

end
