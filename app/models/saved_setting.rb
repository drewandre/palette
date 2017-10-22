class SavedSetting < ApplicationRecord
  belongs_to :product
  has_many :color_palette_settings
  has_many :api_settings
  has_many :effect_settings

  validates_presence_of :master_brightness, :energy_saver, :active_effect, :active_color_palette

end
