class EditJoinable < ActiveRecord::Migration[5.2]
  def change
    change_table :category_joins do |t|
      t.references :joinable, polymorphic: true
    end
    remove_column :movies, :joinable_type
    remove_column :movies, :joinable_id
    remove_column :shows, :joinable_type
    remove_column :shows, :joinable_id
  end
end
