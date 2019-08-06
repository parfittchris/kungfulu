class Add < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :type, :string
    add_column :shows, :type, :string
  end
end
