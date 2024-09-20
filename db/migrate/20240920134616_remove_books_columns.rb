class RemoveBooksColumns < ActiveRecord::Migration[7.1]
  def change
    remove_column :books, :author_name, :string
    remove_column :books, :id_amazon, :string
    remove_column :books, :subject, :string
  end
end
