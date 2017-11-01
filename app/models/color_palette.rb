class ColorPalette < ApplicationRecord
  belongs_to :user
  validates_presence_of :hex_1

  def convert_color_percentages_to_css_widths
    
  end
end
