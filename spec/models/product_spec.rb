require 'rails_helper'

RSpec.describe Product, type: :model do

  describe "Associations" do
    it { should belong_to(:user) }
    it { should have_many(:api_settings) }
    it { should have_many(:effect_settings) }
  end

  describe "Validations" do
    it { should have_valid(:master_brightness).when(255) }
    it { should_not have_valid(:master_brightness).when(nil, '') }
    it { should have_valid(:active_effect).when(1) }
    it { should_not have_valid(:active_effect).when(nil, '') }
    it { should have_valid(:product_name).when("name") }
    it { should_not have_valid(:product_name).when(nil, '') }
  end

  describe "Methods" do
    it "should strip leading and trailing whitespaces from product names" do
      product = Product.new(user: User.first, active_effect: 1, product_name: "  product  ")
      expect(product.strip_product_name).to eq("product")
    end

    it "should parameterize product_names" do
      product = Product.new(user: User.first, active_effect: 1, product_name: "product name")
      expect(product.parameterize).to eq("product-name")
    end
  end

end
