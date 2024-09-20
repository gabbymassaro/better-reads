class CreateAuthors < ActiveRecord::Migration[7.1]
  def change
    create_table :authors do |t|
      t.references :book
      t.timestamps
    end
  end
end
