# == Schema Information
#
# Table name: seasons
#
#  id         :bigint           not null, primary key
#  number     :integer          not null
#  show_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Season < ApplicationRecord
    validates :number, :show_id, presence: true

    has_many :episodes,
    foreign_key: :season_id,
    class_name: :Episode

    belongs_to :show,
    foreign_key: :show_id,
    class_name: :Show

end
