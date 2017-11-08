class CreateColorPalettes < ActiveRecord::Migration[5.1]
  def change
    create_table :color_palettes do |t|
      t.belongs_to :user
      t.string :designer, null: false
      t.string :name, null: false
      t.string :hex_1, null: false
      t.string :hex_2
      t.string :hex_3
      t.string :hex_4
      t.string :hex_5
      t.integer :percentage_hex_1, null: false, default: 100, limit: 1
      t.integer :percentage_hex_2, default: 100, limit: 1
      t.integer :percentage_hex_3, default: 100, limit: 1
      t.integer :percentage_hex_4, default: 100, limit: 1
      t.integer :percentage_hex_5, default: 100, limit: 1

      t.timestamps null: false
    end
  end
end
