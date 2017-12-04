class EffectSetting < ApplicationRecord
  belongs_to :product

  validates_inclusion_of :parameter_1, :parameter_2, :parameter_3, :parameter_4, :parameter_5, :in => -50..50
end
