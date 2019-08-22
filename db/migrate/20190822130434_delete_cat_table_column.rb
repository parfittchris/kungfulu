class DeleteCatTableColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :categories, :video_type
    add_column :category_joins, :video_type, :string
  end
end
