class RenameType < ActiveRecord::Migration[5.2]
  def change
    rename_column :movies, :type, :video_type
    rename_column :shows, :type, :video_type
  end
end
