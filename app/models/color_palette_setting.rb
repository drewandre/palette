class ColorPaletteSetting < ApplicationRecord
  belongs_to :saved_setting

  validates_presence_of :hex_1, :active_color_palette
end
