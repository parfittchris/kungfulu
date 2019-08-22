class EditCatTable < ActiveRecord::Migration[5.2]
  def change
    add_column :categories, :video_type, :string
  end
end
