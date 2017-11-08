class CreateUserPalettes < ActiveRecord::Migration[5.1]
  def change
    create_table :user_palettes do |t|
      t.belongs_to :user
      t.belongs_to :color_palette

      t.timestamps null: false
    end
  end
end
