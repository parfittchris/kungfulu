class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.integer :user_id, null: false
      t.integer :video_id, null: false
      t.string :video_type, null:false
      t.timestamps
    end
  end
end
