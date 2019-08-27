class EditFavorites < ActiveRecord::Migration[5.2]
  def change
    change_table :favorites do |t|
      t.references :likeable, polymorphic: true
    end
    remove_column :favorites, :video_id
    remove_column :favorites, :video_type
  end
end
