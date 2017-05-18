class CreatePhotos < ActiveRecord::Migration[5.0]
  def change
    create_table :photos do |t|
      t.string :url, null: false
      t.string :title, null: false
      t.text :description
      t.integer :user_id, null: false, index: true
      t.timestamps
    end
  end
end
