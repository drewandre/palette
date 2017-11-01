class CreateEffects < ActiveRecord::Migration[5.1]
  def change
    create_table :effects do |t|
      t.string :effect_name, null: false
      t.string :parameter_1_name, null: false
      t.string :parameter_2_name, null: false
      t.string :parameter_3_name, null: false
      t.string :parameter_4_name, null: false
      t.string :parameter_5_name, null: false

      t.timestamps null: false
    end
  end
end
