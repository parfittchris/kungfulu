class RemoveJoinColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :category_joins, :videoId
    remove_column :category_joins, :video_type
  end
end
