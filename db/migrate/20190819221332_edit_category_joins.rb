class EditCategoryJoins < ActiveRecord::Migration[5.2]
  def change
    remove_column :category_joins, :videoId
    add_column :category_joins, :videoId, :integer, null: false
  end
end
