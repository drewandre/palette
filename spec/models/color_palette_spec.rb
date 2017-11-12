require 'rails_helper'

RSpec.describe ColorPalette, type: :model do
  it { should have_many(:user_palettes) }
  it { should have_many(:users) }
end
