class EditCatJoinColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :category_joins, :categoryId
    add_column :category_joins, :categoryIds, :text, array: true, default: [], null: false
  end
end
