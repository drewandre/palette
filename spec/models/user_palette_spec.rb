require 'rails_helper'

RSpec.describe UserPalette, type: :model do
  describe "Associations" do
    it { should belong_to(:user) }
    it { should belong_to(:color_palette) }
  end
end
