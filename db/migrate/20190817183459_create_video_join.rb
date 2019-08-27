class CreateVideoJoin < ActiveRecord::Migration[5.2]
  def change
    create_table :video_joins do |t|
      t.integer :video_i, null: false
      t.string :video_type, null:false
      t.timestamps
    end
  end
end
