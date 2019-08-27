class RenameJoins < ActiveRecord::Migration[5.2]
  def change
    rename_column :category_joins, :categoryIds, :categoryId
  end
end
