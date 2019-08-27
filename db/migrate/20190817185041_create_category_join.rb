class CreateCategoryJoin < ActiveRecord::Migration[5.2]
  def change
    create_table :category_joins do |t|
      t.string :videoId, null: false
      t.string :categoryId, null: false
      t.timestamps
    end
  end
end
