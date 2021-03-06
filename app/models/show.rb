# == Schema Information
#
# Table name: shows
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  year        :integer          not null
#  rating      :integer          not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  video_type  :string
#  image_url   :string
#


class Show < ApplicationRecord
    validates :title, :year, :rating, :description, presence: true
    validates :title, uniqueness: true

    has_one_attached :video
    has_one_attached :image
    
    has_many :category_joins, as: :joinable
    
    has_many :categories,
    through: :category_joins,
    source: :categories

    has_many :favorites, as: :likeable
    
    has_many :users,
    through: :favorites,
    source: :users


    # has_many :favorites
    # foreign_key: :video_id,
    # class_name: :Favorite

    
end
