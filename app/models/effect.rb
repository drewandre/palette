class Effect < ApplicationRecord
  validates_presence_of :effect_name, :parameter_1_name, :parameter_2_name, :parameter_3_name, :parameter_4_name, :parameter_5_name
end
