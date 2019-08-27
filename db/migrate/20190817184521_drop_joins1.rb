class DropJoins1 < ActiveRecord::Migration[5.2]
  def change
    drop_table :video_joins
    drop_table :categoryJoins
  end
end
