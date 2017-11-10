require_relative './palettes'

p "Deleting #{User.count} users"
p "Deleting #{ColorPalette.count} color palettes"
p "Deleting #{Product.count} products"
# p "Deleting #{ApiSetting.count} api settings"
p "Deleting #{EffectSetting.count} effect settings"
p "Deleting #{Effect.count} effects"
p "Deleting #{UserPalette.count} effects"

User.destroy_all
ColorPalette.destroy_all
Product.destroy_all
ApiSetting.destroy_all
EffectSetting.destroy_all
Effect.destroy_all
UserPalette.destroy_all

NUM_USERS = rand(25..50)
NUM_PALETTES = rand(30..60)
USERS_WITH_EXTRA_PALETTES = (NUM_PALETTES * 0.90).round
USERS_WITH_EXTRA_PRODUCTS = (NUM_USERS * 0.25).round
TOTAL_PRODUCT_COUNT = NUM_USERS + USERS_WITH_EXTRA_PRODUCTS
TOTAL_PALETTE_COUNT = NUM_PALETTES + USERS_WITH_EXTRA_PALETTES*2

locations = ['Family Room', 'Lobby', 'Foyer', 'Work', 'Palette'];
effect_names = ["Radiate", "Rainbow", "Splatter", "Flex", "Ambient", "Twinkle"]
effect_parameters = [
  ['Density', "Scale", "Speed", "x", "y"],
  ['Width', "Height", "Scale", "x", "y"],
  ['Magnitude', "Direction", "Speed", "Position", 'Entropy']
]

NUM_USERS.times do
  index = rand(0...4)
  User.create(
    email: Faker::Internet.unique.email,
    avatar_url: Faker::Avatar.image,
    first_name: Faker::Name.unique.first_name,
    last_name: Faker::Name.unique.last_name,
    handle: Faker::Lorem.unique.characters(10),
    password: Faker::Lorem.unique.characters(10),
    current_product_name: locations[index].parameterize
  )
end

effect_names.length.times do |index|
  name_set = rand(0...2)
  Effect.create(
    effect_name: effect_names[index],
    parameter_1_name: effect_parameters[name_set][0],
    parameter_2_name: effect_parameters[name_set][1],
    parameter_3_name: effect_parameters[name_set][2],
    parameter_4_name: effect_parameters[name_set][3],
    parameter_5_name: effect_parameters[name_set][4]
  )
end

# every user will have a color palette to start
a = User.pluck(:id).to_a.shuffle
NUM_USERS.times do
  user_id = a.pop
  random_palette = rand(0...PALETTES.length)
  ColorPalette.create(
    user_id: user_id,
    designer: User.find(user_id).handle,
    name: "#{Faker::Coffee.blend_name}",
    hex_1: PALETTES[random_palette][0],
    hex_2: PALETTES[random_palette][1],
    hex_3: PALETTES[random_palette][2]
  )
end

# 90% of users will create more than two color palette
USERS_WITH_EXTRA_PALETTES.times do
  user = rand((User.pluck(:id).first)..(User.pluck(:id).last))
  random_palette = rand(0...PALETTES.length)
  ColorPalette.create(
    user_id: user,
    designer: User.find(user).handle,
    name: "#{Faker::Coffee.blend_name}",
    hex_1: PALETTES[random_palette][0],
    hex_2: PALETTES[random_palette][1],
    hex_3: PALETTES[random_palette][2],
    hex_4: PALETTES[random_palette][3]
  )
  random_palette = rand(0...PALETTES.length)
  ColorPalette.create(
    user_id: user,
    designer: User.find(user).handle,
    name: "#{Faker::Coffee.blend_name}",
    hex_1: PALETTES[random_palette][0],
    hex_2: PALETTES[random_palette][1],
    hex_3: PALETTES[random_palette][2],
    hex_4: PALETTES[random_palette][3],
    hex_5: PALETTES[random_palette][4]
  )
end

a = ColorPalette.pluck(:id).to_a.shuffle
TOTAL_PALETTE_COUNT.times do
  palette = rand((ColorPalette.pluck(:id).first)...(ColorPalette.pluck(:id).last))
  user = rand((User.pluck(:id).first)...(User.pluck(:id).last))
  UserPalette.create(
    user_id: user,
    color_palette_id: palette
  )
end

# every user will have a product, every product has a user
a = User.pluck(:id).to_a.shuffle
NUM_USERS.times do
  current_user_id = a.pop
  Product.create(
    user_id: current_user_id,
    product_name: User.find_by(id: current_user_id).current_product_name,
    active_color_palette: rand((ColorPalette.pluck(:id).first)..(ColorPalette.pluck(:id).last)),
    active_effect: effect_names[rand(0..(effect_names.length))],
    on: [true, false][rand(0...1)]
  )
end

# 25% of users will own more than one product
USERS_WITH_EXTRA_PRODUCTS.times do
  index = rand(0...4)
  Product.create(
    user_id: rand((User.pluck(:id).first)..(User.pluck(:id).last)),
    product_name: locations[index].parameterize,
    active_color_palette: rand((ColorPalette.pluck(:id).first)..(ColorPalette.pluck(:id).last)),
    on: [true, false][rand(0...1)]
  )
end

a = Product.pluck(:id).to_a.shuffle
TOTAL_PRODUCT_COUNT.times do
  ApiSetting.create(
    product_id: a.pop,
    api_1_url: "https://api.github.com/",
    api_endpoint_1: "api_endpoint_one"
  )
end

a = Product.pluck(:id).to_a.shuffle
TOTAL_PRODUCT_COUNT.times do
  product_id = a.pop
  effect_names.length.times do |index|
    EffectSetting.create(
      product_id: product_id,
      effect_name: effect_names[index],
      parameter_1: rand(-30...30),
      parameter_2: rand(-30...30),
      parameter_3: rand(-30...30),
      parameter_4: rand(-30...30),
      parameter_5: rand(-30...30)
    )
  end
end

p "-------------------"
p "Created #{User.count} total users"
p "Created #{Product.count} products, #{USERS_WITH_EXTRA_PRODUCTS} users with more than one product"
p "Created #{UserPalette.count} UserPalettes (user/color palette connections)"
p "Created #{Effect.count} effects"
p "Created #{EffectSetting.count} effect settings"
p "Created #{ColorPalette.count} color palettes, #{USERS_WITH_EXTRA_PALETTES*2} users with more than one palette"
