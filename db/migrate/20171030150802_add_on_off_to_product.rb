class AddOnOffToProduct < ActiveRecord::Migration[5.1]
  def change
    add_column :products, :on, :boolean, null: false, default: true
  end
end
