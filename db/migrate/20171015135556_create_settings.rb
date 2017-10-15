class CreateSettings < ActiveRecord::Migration[5.1]
  def change
    create_table :settings do |t|
      t.integer :hue, null: false, :limit => 3, :default => 0
      t.integer :saturation, null: false, :limit => 3, :default => 255
      t.integer :brightness, null: false, :limit => 3, :default => 255
      t.integer :master_brightness, null: false, :limit => 3, :default => 255
      t.integer :color_palette, null: false, :default => 1
      t.integer :effect, null: false, :default => 1

      t.timestamps null: false
    end
  end
end
