require 'rails_helper'

RSpec.describe Product, type: :model do
  it { should belong_to(:user) }
  it { should have_many(:api_settings) }
  it { should have_many(:effect_settings) }

  it { should have_valid(:master_brightness).when(255) }
  it { should_not have_valid(:master_brightness).when(nil, '') }

  it { should have_valid(:active_effect).when(1) }
  it { should_not have_valid(:active_effect).when(nil, '') }

  it { should have_valid(:product_name).when("name") }
  it { should_not have_valid(:product_name).when(nil, '') }
end
