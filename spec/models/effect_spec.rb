require 'rails_helper'

RSpec.describe Effect, type: :model do
  it { should have_valid(:effect_name).when("effect name") }
  it { should_not have_valid(:effect_name).when(nil, '') }

  it { should have_valid(:parameter_1_name).when("width") }
  it { should_not have_valid(:parameter_1_name).when(nil, '') }

  it { should have_valid(:parameter_2_name).when("x") }
  it { should_not have_valid(:parameter_2_name).when(nil, '') }

  it { should have_valid(:parameter_3_name).when("y") }
  it { should_not have_valid(:parameter_3_name).when(nil, '') }

  it { should have_valid(:parameter_4_name).when("height") }
  it { should_not have_valid(:parameter_4_name).when(nil, '') }

  it { should have_valid(:parameter_5_name).when("density") }
  it { should_not have_valid(:parameter_5_name).when(nil, '') }


end
