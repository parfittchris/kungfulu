class EditJoins < ActiveRecord::Migration[5.2]
  def change
    remove_column :category_joins, :categoryIds
    add_column :category_joins, :categoryIds, :integer, null:false
  end
end
