class ColorPalette < ApplicationRecord
  HEX_REGEXP = /#([\da-f]{2})([\da-f]{2})([\da-f]{2})/i

  has_many :user_palettes
  has_many :users, through: :user_palettes
  validates_presence_of :hex_1
  validates_format_of :hex_1, :hex_2, :hex_3, :hex_4, :hex_5, with: HEX_REGEXP
  validates_length_of :hex_1, :hex_2, :hex_3, :hex_4, :hex_5, :is => 7
  validates_inclusion_of :percentage_hex_1, :percentage_hex_2, :percentage_hex_3, :percentage_hex_4, :percentage_hex_5, :in => 0..100
end
