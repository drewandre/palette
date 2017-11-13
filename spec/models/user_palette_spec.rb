require 'rails_helper'

RSpec.describe UserPalette, type: :model do
  it { should belong_to(:user) }
  it { should belong_to(:color_palette) }
end
