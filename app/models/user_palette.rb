class UserPalette < ApplicationRecord
  belongs_to :user
  belongs_to :color_palette

  
end
