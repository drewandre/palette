class ScheduleSetting < ApplicationRecord
  belongs_to :saved_setting
  
  validates_presence_of :disable_on_weekend
end
