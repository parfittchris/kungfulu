class AddJoinColumn < ActiveRecord::Migration[5.2]
  def change
    change_table :movies do |t|
      t.references :joinable, polymorphic: true
    end
    change_table :shows do |t|
      t.references :joinable, polymorphic: true
    end
  end
end
