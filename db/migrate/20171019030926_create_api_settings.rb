class CreateApiSettings < ActiveRecord::Migration[5.1]
  def change
    create_table :api_settings do |t|
      t.belongs_to :saved_setting

      t.string :api_1_url
      t.string :api_endpoint_1
      t.string :api_endpoint_2
      t.string :api_endpoint_3

      t.timestamps null: false
    end
  end
end
