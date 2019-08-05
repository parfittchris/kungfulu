class DeleteVideoUrl < ActiveRecord::Migration[5.2]
  def change
    remove_column :shows, :video_url
    remove_column :movies, :video_url
  end
end
