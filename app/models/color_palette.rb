class ColorPalette < ApplicationRecord
  has_many :user_palettes
  has_many :users, through: :user_palettes
  validates_presence_of :hex_1

  # def convert_color_percentages_to_css_widths
  #
  # end
end
