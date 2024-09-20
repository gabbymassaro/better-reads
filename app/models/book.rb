class Book < ApplicationRecord
  has_many :authors, dependent: :destroy
  has_many :amazon_ids, dependent: :destroy
  has_many :subjects, dependent: :destroy

end