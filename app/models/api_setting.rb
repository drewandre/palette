class ApiSetting < ApplicationRecord
  belongs_to :product

  validates_presence_of :api_1_url, :api_endpoint_1
end
