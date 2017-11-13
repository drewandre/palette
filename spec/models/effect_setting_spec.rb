require 'rails_helper'

RSpec.describe EffectSetting, type: :model do
  it { should belong_to(:product) }
end
