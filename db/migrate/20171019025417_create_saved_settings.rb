class CreateSavedSettings < ActiveRecord::Migration[5.1]
  def change
    create_table :saved_settings do |t|
      t.belongs_to :product

      t.integer :master_brightness, null: false, default: 255
      t.boolean :energy_saver, null: false, default: false

      t.string :active_effect, null: false, default: 1
      t.string :active_color_palette, null: false, default: 1
      t.string :active_api
      
      t.datetime :turn_on
      t.datetime :turn_off
      t.boolean :disable_on_weekend, null: false, default: false

      t.timestamps null: false
    end
  end
end
