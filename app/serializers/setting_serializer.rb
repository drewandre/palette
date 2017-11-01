class SettingSerializer < ActiveModel::Serializer
  attributes :id, :hue, :saturation, :brightness, :master_brightness, :color_palette, :effect
end
