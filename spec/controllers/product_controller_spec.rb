require 'rails_helper'

RSpec.describe ProductsController, type: :controller do
  describe "new product" do
    let(:product) { create(:product) }
    it "should create a new product" do
      expect(product).to be_valid
    end
  end
end
