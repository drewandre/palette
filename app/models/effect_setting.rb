class EffectSetting < ApplicationRecord
  belongs_to :product

  validates_presence_of :active_effect
end
