class Create < ActiveRecord::Migration[5.2]
  def change
    create_table :categoryJoins do |t|
      t.integer :video_id, null: false
      t.text :category_ids, array: true, default: [], null: false
      t.timestamps
    end
  end
end
