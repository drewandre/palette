class ColorPalette < ApplicationRecord
  belongs_to :user

  validates_presence_of :hex_1
end
