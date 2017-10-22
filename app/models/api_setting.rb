class ApiSetting < ApplicationRecord
  belongs_to :saved_setting

  validates_presence_of :api_1_url, :api_endpoint_1
end
