p "Deleting #{User.count} users"
p "Deleting #{ColorPalette.count} color palettes"
p "Deleting #{Product.count} products"
p "Deleting #{ApiSetting.count} api settings"
p "Deleting #{EffectSetting.count} effect settings"
p "Deleting #{Effect.count} effects"


User.destroy_all
ColorPalette.destroy_all
Product.destroy_all
ApiSetting.destroy_all
EffectSetting.destroy_all
Effect.destroy_all

NUM_USERS = rand(50..75)
NUM_PALETTES = rand(30..60)
USERS_WITH_EXTRA_PALETTES = (NUM_PALETTES * 0.90).round
USERS_WITH_EXTRA_PRODUCTS = (NUM_USERS * 0.25).round
TOTAL_PRODUCT_COUNT = NUM_USERS + USERS_WITH_EXTRA_PRODUCTS

locations = ['Family Room', 'Lobby', 'Foyer', 'Work', 'Palette'];
effect_names = ['Radiate', "Rainbow", "Splatter", "Flex", "Ambient", "Twinkle"]
effect_parameters = [
  ['Density', "Scale", "Speed", "x", "y"],
  ['Width', "Height", "Scale", "x", "y"],
  ['Magnitude', "Direction", "Speed", "Position", 'Entropy']
]

NUM_USERS.times do
  index = rand(0..4)
  User.create(
    email: Faker::Internet.unique.email,
    first_name: Faker::Name.unique.first_name,
    last_name: Faker::Name.unique.last_name,
    handle: Faker::Lorem.unique.characters(10),
    password: Faker::Lorem.unique.characters(10),
    current_product_name: locations[index].parameterize
  )
end

index = 0
effect_names.length.times do
  name_set = rand(0..2)
  Effect.create(
    effect_name: effect_names[index],
    parameter_1_name: effect_parameters[name_set][0],
    parameter_2_name: effect_parameters[name_set][1],
    parameter_3_name: effect_parameters[name_set][2],
    parameter_4_name: effect_parameters[name_set][3],
    parameter_5_name: effect_parameters[name_set][4]
  )
  index = index + 1
end

# every user will have a color palette to start
a = User.pluck(:id).to_a.shuffle
NUM_PALETTES.times do
  ColorPalette.create(
    user_id: a.pop,
    name: "#{Faker::LordOfTheRings.location.parameterize}",
    hex_1: "#{Faker::Color.hex_color}",
    hex_2: "#{Faker::Color.hex_color}",
    hex_3: "#{Faker::Color.hex_color}"
  )
end

# 90% of users will create more than two color palette
USERS_WITH_EXTRA_PALETTES.times do
  user = rand((User.pluck(:id).first)..(User.pluck(:id).last))
  ColorPalette.create(
    user_id: user,
    name: "#{Faker::LordOfTheRings.location.parameterize}",
    hex_1: "#{Faker::Color.hex_color}",
    hex_2: "#{Faker::Color.hex_color}",
    hex_3: "#{Faker::Color.hex_color}"
  )
  ColorPalette.create(
    user_id: user,
    name: "#{Faker::LordOfTheRings.location.parameterize}",
    hex_1: "#{Faker::Color.hex_color}",
    hex_2: "#{Faker::Color.hex_color}",
    hex_3: "#{Faker::Color.hex_color}"
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
    on: [true, false][rand(0..1)]
  )
end

# 25% of users will own more than one product
USERS_WITH_EXTRA_PRODUCTS.times do
  index = rand(0..4)
  Product.create(
    user_id: rand((User.pluck(:id).first)..(User.pluck(:id).last)),
    product_name: locations[index].parameterize,
    active_color_palette: rand(NUM_PALETTES),
    on: [true, false][rand(0..1)]
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
  EffectSetting.create(
    product_id: a.pop,
    parameter_1: 0,
    parameter_2: 0,
    parameter_3: 0,
    parameter_4: 0,
    parameter_5: 0
  )
end

p "-------------------"
p "Created #{User.count} total users"
p "Created #{TOTAL_PRODUCT_COUNT} products, #{USERS_WITH_EXTRA_PRODUCTS} users with more than one product"
p "Created #{ApiSetting.count} api settings"
p "Created #{Effect.count} effects"
p "Created #{EffectSetting.count} effect settings"
p "Created #{ColorPalette.count} color palettes, #{USERS_WITH_EXTRA_PALETTES*2} users with more than one palette"
