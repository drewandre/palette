class CreateHueSystems < ActiveRecord::Migration[5.1]
  def change
    create_table :hue_systems do |t|

      t.timestamps
    end
  end
end
