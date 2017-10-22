class CreateEffectSettings < ActiveRecord::Migration[5.1]
  def change
    create_table :effect_settings do |t|
      t.belongs_to :product

      t.integer :active_effect, null: false, default: 0
      t.integer :speed, null: false, default: 50
      t.integer :scale, null: false, default: 50
      t.integer :density, null: false, default: 50

      t.timestamps null: false
    end
  end
end
