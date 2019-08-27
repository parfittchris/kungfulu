# == Schema Information
#
# Table name: movies
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

class Movie < ApplicationRecord
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

    def self.find_by_title(title)
        movie = Movie.find_by(title: title)
        return nil unless movie
    end
end
