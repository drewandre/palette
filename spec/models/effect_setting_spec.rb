require 'rails_helper'

RSpec.describe EffectSetting, type: :model do
  describe "Associations" do
    it { should belong_to(:product) }
  end
end
