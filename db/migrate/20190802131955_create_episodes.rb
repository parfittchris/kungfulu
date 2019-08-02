class CreateEpisodes < ActiveRecord::Migration[5.1]
  def change
    create_table :episodes do |t|
      t.string :title, null: false
      t.integer :number, null: false
      t.text :description, null: false
      t.integer :season_id, null: false
      t.timestamps
    end
  end
end
