class Product < ApplicationRecord
  belongs_to :user
  has_many :api_settings
  has_many :effect_settings

  validates_presence_of :master_brightness, :active_effect

end
