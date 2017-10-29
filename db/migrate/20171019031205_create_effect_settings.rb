class CreateEffectSettings < ActiveRecord::Migration[5.1]
  def change
    create_table :effect_settings do |t|
      t.belongs_to :product

      t.integer :active_effect, null: false, default: 0
      t.integer :parameter_1, null: false, default: 0, limit: 1
      t.integer :parameter_2, null: false, default: 0, limit: 1
      t.integer :parameter_3, null: false, default: 0, limit: 1
      t.integer :parameter_4, null: false, default: 0, limit: 1
      t.integer :parameter_5, null: false, default: 0, limit: 1

      t.timestamps null: false
    end
  end
end
