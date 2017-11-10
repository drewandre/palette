class ColorPalette < ApplicationRecord
  has_many :user_palettes
  has_many :users, through: :user_palettes
  validates_presence_of :hex_1

end
