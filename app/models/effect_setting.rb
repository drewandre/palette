class EffectSetting < ApplicationRecord
  belongs_to :product

  validates_inclusion_of :effect_parameter_1, :effect_parameter_2, :effect_parameter_3, :effect_parameter_4, :effect_parameter_5, :in => -50..50
end
