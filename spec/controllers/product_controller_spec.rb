require 'rails_helper'

RSpec.describe ProductsController, type: :controller do
  describe "Methods" do
    it "should create a new product" do
      product = Product.new()
      expect(product).to be_present
    end

    it "should raise an error" do
      expect{raise StandardError}.to raise_error(StandardError)
    end
  end
end
