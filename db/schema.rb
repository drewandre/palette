# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171022155628) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "api_settings", force: :cascade do |t|
    t.bigint "product_id"
    t.string "api_1_url"
    t.string "api_endpoint_1"
    t.string "api_endpoint_2"
    t.string "api_endpoint_3"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["product_id"], name: "index_api_settings_on_product_id"
  end

  create_table "color_palettes", force: :cascade do |t|
    t.bigint "user_id"
    t.string "hex_1", null: false
    t.string "hex_2"
    t.string "hex_3"
    t.string "hex_4"
    t.integer "percentage_hex_1", default: 100, null: false
    t.integer "percentage_hex_2", default: 100
    t.integer "percentage_hex_3", default: 100
    t.integer "percentage_hex_4", default: 100
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_color_palettes_on_user_id"
  end

  create_table "effect_settings", force: :cascade do |t|
    t.bigint "product_id"
    t.integer "active_effect", default: 0, null: false
    t.integer "speed", default: 50, null: false
    t.integer "scale", default: 50, null: false
    t.integer "density", default: 50, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["product_id"], name: "index_effect_settings_on_product_id"
  end

  create_table "products", force: :cascade do |t|
    t.bigint "user_id"
    t.integer "master_brightness", default: 255, null: false
    t.boolean "energy_saver", default: false, null: false
    t.string "active_effect", default: "1", null: false
    t.string "active_color_palette", default: "0", null: false
    t.string "active_api"
    t.datetime "turn_on"
    t.datetime "turn_off"
    t.boolean "disable_on_weekend", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_products_on_user_id"
  end

  create_table "users", id: :serial, force: :cascade do |t|
    t.boolean "admin", default: false
    t.string "confirmation_digest"
    t.datetime "confirmed_at"
    t.string "email", null: false
    t.string "first_name", null: false
    t.string "handle", null: false
    t.string "last_name", null: false
    t.string "password_digest"
    t.string "password_reset_digest"
    t.datetime "password_reset_sent_at"
    t.string "remember_digest"
    t.string "universally_unique_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["handle"], name: "index_users_on_handle", unique: true
    t.index ["universally_unique_id"], name: "index_users_on_universally_unique_id", unique: true
  end

end
