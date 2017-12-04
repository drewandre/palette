require 'rails_helper'

RSpec.describe ProductsController, type: :controller do
  describe "new product" do
    let(:product) { create(:product) }
    # it "should create a new product" do
    #   get :new
    #   expect(Product).to be_instance_of(Product)
    # end
  end
end
