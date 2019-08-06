class AddImageUrl < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :image_url, :string
    add_column :shows, :image_url, :string
  end
end
