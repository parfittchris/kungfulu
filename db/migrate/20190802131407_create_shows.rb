class CreateShows < ActiveRecord::Migration[5.1]
  def change
    create_table :shows do |t|
      t.string :title, null: false
      t.integer :year, null: false
      t.integer :rating, null: false
      t.text :description, null: false
      t.string :video_url, null: false
      t.timestamps
    end
    add_index :shows, :title, unique: true
  end
end
