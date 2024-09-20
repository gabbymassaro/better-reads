class CreateAmazonIds < ActiveRecord::Migration[7.1]
  def change
    create_table :amazon_ids do |t|
      t.references :book
      t.timestamps
    end
  end
end
