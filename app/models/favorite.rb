# == Schema Information
#
# Table name: favorites
#
#  id            :bigint           not null, primary key
#  user_id       :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  likeable_type :string
#  likeable_id   :bigint
#

class Favorite < ApplicationRecord

    belongs_to :likeable, polymorphic: true
    
    belongs_to :users,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

end
