p "Deleting #{User.count} users"
p "Deleting #{ColorPalette.count} color palettes"
p "Deleting #{Product.count} products"
p "Deleting #{ApiSetting.count} api settings"
p "Deleting #{EffectSetting.count} effect settings"

User.destroy_all
ColorPalette.destroy_all
Product.destroy_all
ApiSetting.destroy_all
EffectSetting.destroy_all

NUM_USERS = rand(50..75)
NUM_PALETTES = rand(30..60)
USERS_WITH_EXTRA_PALETTES = (NUM_PALETTES * 0.75).round
USERS_WITH_EXTRA_PRODUCTS = (NUM_USERS * 0.25).round
TOTAL_PRODUCT_COUNT = NUM_USERS + USERS_WITH_EXTRA_PRODUCTS

NUM_USERS.times do
  User.create(
    email: Faker::Internet.unique.email,
    first_name: Faker::Name.unique.first_name,
    last_name: Faker::Name.unique.last_name,
    handle: Faker::Lorem.unique.characters(10),
    password: Faker::Lorem.unique.characters(10)
  )
end

# every user will have a product, every product has a user
a = User.pluck(:id).to_a.shuffle
NUM_USERS.times do
  Product.create(
    user_id: a.pop,
    active_color_palette: rand(NUM_PALETTES)
  )
end

# 25% of users will own more than one product
USERS_WITH_EXTRA_PRODUCTS.times do
  Product.create(
    user_id: rand((User.pluck(:id).first)..(User.pluck(:id).last)),
    active_color_palette: rand(NUM_PALETTES)
  )
end

# every user will have a color palette to start
a = User.pluck(:id).to_a.shuffle
NUM_PALETTES.times do
  ColorPalette.create(
    user_id: a.pop,
    hex_1: "#{Faker::Color.hex_color}",
    hex_2: "#{Faker::Color.hex_color}",
    hex_3: "#{Faker::Color.hex_color}"
  )
end

# 75% of users will create more than one color palette
USERS_WITH_EXTRA_PALETTES.times do
  ColorPalette.create(
    user_id: rand((User.pluck(:id).first)..(User.pluck(:id).last)),
    hex_1: "#{Faker::Color.hex_color}",
    hex_2: "#{Faker::Color.hex_color}",
    hex_3: "#{Faker::Color.hex_color}"
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
    product_id: a.pop
  )
end

p "-------------------"
p "Created #{User.count} total users"
p "Created #{TOTAL_PRODUCT_COUNT} products, #{USERS_WITH_EXTRA_PRODUCTS} users with more than one product"
p "Created #{ApiSetting.count} api settings"
p "Created #{EffectSetting.count} effect settings"
p "Created #{ColorPalette.count} color palettes, #{USERS_WITH_EXTRA_PALETTES} users with more than one palette"
