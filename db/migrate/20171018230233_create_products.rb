class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.belongs_to :user

      t.string :product_name, null: false

      t.integer :master_brightness, null: false, default: 255, limit: 1
      t.boolean :energy_saver, null: false, default: false

      t.string :active_effect, null: false, default: 1
      t.string :active_color_palette, null: false, default: 0
      t.string :active_api

      t.datetime :turn_on
      t.datetime :turn_off
      t.boolean :disable_on_weekend, null: false, default: false
      t.boolean :on, null: false, default: true

      t.timestamps null: false
    end
  end
end
