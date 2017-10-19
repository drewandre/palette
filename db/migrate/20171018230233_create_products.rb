class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.belongs_to :user, null: false
      
      t.timestamps null: false
    end
  end
end
