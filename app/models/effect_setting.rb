class EffectSetting < ApplicationRecord
  belongs_to :saved_setting

  validates_presence_of :active_effect
end
