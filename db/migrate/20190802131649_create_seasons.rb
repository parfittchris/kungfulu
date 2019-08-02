class CreateSeasons < ActiveRecord::Migration[5.1]
  def change
    create_table :seasons do |t|
      t.integer :number, null: false
      t.integer :show_id, null: false
      t.timestamps
    end
  end
end
