class CreateBooks < ActiveRecord::Migration[7.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author_name
      t.integer :cover_i
      t.integer :first_publish_year
      t.string :key
      t.string :id_amazon
      t.string :subject
      t.float :ratings_average

      t.timestamps
    end
  end
end
