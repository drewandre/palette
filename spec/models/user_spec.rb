require 'rails_helper'

RSpec.describe User, type: :model do
  it { should have_many(:products) }
  it { should have_many(:user_palettes) }
  it { should have_many(:color_palettes) }
  it { should have_many(:api_settings) }
  it { should have_many(:effect_settings) }

  it { should have_valid(:email).when("something@example.com", "another@something.com") }
  it { should_not have_valid(:email).when(nil, "", "bad", ".com", "bad@com", "bad.com") }

  it { should have_valid(:first_name).when("Abby", "Jillian") }
  it { should_not have_valid(:first_name).when(nil, "") }

  it { should have_valid(:handle).when("ghostgrrl", "H0ltzm4nn") }
  it { should_not have_valid(:handle).when(nil, "", "xy", "---", "-badhandle", "badhandle_", "bad--handle") }

  it { should have_valid(:last_name).when("Yates", "Holtzmann") }
  it { should_not have_valid(:last_name).when(nil, "") }
end
