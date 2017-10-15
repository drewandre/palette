class Setting < ApplicationRecord

  validates_numericality_of :hue, :only_integer => true, :greater_than_or_equal_to => 0, :less_than_or_equal_to => 255
  validates_numericality_of :saturation, :only_integer => true, :greater_than_or_equal_to => 0, :less_than_or_equal_to => 255
  validates_numericality_of :brightness, :only_integer => true, :greater_than_or_equal_to => 0, :less_than_or_equal_to => 255
  validates_numericality_of :master_brightness, :only_integer => true, :greater_than_or_equal_to => 0, :less_than_or_equal_to => 255
  validates_numericality_of :color_palette, :only_integer => true, :greater_than_or_equal_to => 0
  validates_numericality_of :effect, :only_integer => true, :greater_than_or_equal_to => 0

  validates_presence_of :hue, :saturation, :brightness, :master_brightness, :color_palette, :effect

end
