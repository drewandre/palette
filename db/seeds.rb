User.destroy_all
Product.destroy_all
SavedSetting.destroy_all
ColorPaletteSetting.destroy_all
ScheduleSetting.destroy_all
ApiSetting.destroy_all
EffectSetting.destroy_all

drew = User.create(email: "drewjamesandre@gmail.com", first_name: "Drew", last_name: "Andre", handle: "drewandre", password: "password")
luigi = User.create(email: "luigi@gmail.com", first_name: "Luigi", last_name: "Lake", handle: "luigilake", password: "password")
emily = User.create(email: "emily@gmail.com", first_name: "Emily", last_name: "Schron", handle: "emilyschron", password: "password")

drew_photon = Product.create(user: drew)
luigi_photon = Product.create(user: luigi)
emily_photon = Product.create(user: emily)

drew_photon_settings = SavedSetting.create(product: drew_photon)
luigi_photon_settings = SavedSetting.create(product: luigi_photon)
emily_photon_settings = SavedSetting.create(product: emily_photon)

drew_photon_settings_color_palette = ColorPaletteSetting.create(saved_setting: drew_photon_settings, hex_1: "hex_one_drew", active_color_palette: 1)
luigi_photon_settings_color_palette = ColorPaletteSetting.create(saved_setting: luigi_photon_settings, hex_1: "hex_one_luigi", active_color_palette: 1)
emily_photon_settings_color_palette = ColorPaletteSetting.create(saved_setting: emily_photon_settings, hex_1: "hex_one_emily", active_color_palette: 1)

drew_photon_settings_schedule = ScheduleSetting.create(saved_setting: drew_photon_settings)
luigi_photon_settings_schedule = ScheduleSetting.create(saved_setting: luigi_photon_settings)
emily_photon_settings_schedule = ScheduleSetting.create(saved_setting: emily_photon_settings)

drew_photon_settings_api = ApiSetting.create(saved_setting: drew_photon_settings, api_1_url: "https://api.github.com/", api_endpoint_1: "api_endpoint_one")
luigi_photon_settings_api = ApiSetting.create(saved_setting: luigi_photon_settings, api_1_url: "https://api.github.com/", api_endpoint_1: "api_endpoint_one")
emily_photon_settings_api = ApiSetting.create(saved_setting: emily_photon_settings, api_1_url: "https://api.github.com/", api_endpoint_1: "api_endpoint_one")

drew_photon_settings_effect = EffectSetting.create(saved_setting: drew_photon_settings)
luigi_photon_settings_effect = EffectSetting.create(saved_setting: luigi_photon_settings)
emily_photon_settings_effect = EffectSetting.create(saved_setting: emily_photon_settings)

p "Created #{User.count} users"
p "Created #{Product.count} products"
p "Created #{SavedSetting.count} saved settings"
p "Created #{ColorPaletteSetting.count} color palette settings"
p "Created #{ScheduleSetting.count} schedule settings"
p "Created #{ApiSetting.count} api settings"
p "Created #{EffectSetting.count} effect settings"
