# == Schema Information
#
# Table name: episodes
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  number      :integer          not null
#  description :text             not null
#  season_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Episode < ApplicationRecord
    validates :title, :number, :season_id, presence: true

    has_one_attached :photo
    
    belongs_to :seasons,
    foreign_key: :season_id,
    class_name: :Season


end
