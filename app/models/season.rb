class Season < ApplicationRecord
    validates :number, :show_id, presence: true
end