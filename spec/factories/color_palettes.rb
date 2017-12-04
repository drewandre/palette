FactoryGirl.define do
  factory :color_palette do
    id { ColorPalette.first || association(:color_palette) }
    user_id { User.first || association(:user) }
    designer { User.first || association(:user) }
    name "watermelon"
    hex_1 '#DEDEDE'
    hex_2 '#ffffff'
    hex_3 '#C8DFF8'
    hex_4 '#74AA55'
    hex_5 '#FEDEB0'
    percentage_hex_1 23
    percentage_hex_2 100
    percentage_hex_3 0
    percentage_hex_4 50
    percentage_hex_5 1
  end
end
