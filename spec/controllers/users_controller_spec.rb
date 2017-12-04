require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  describe "create user" do
    context "new user from sign up screen" do
      let(:user) { create(:user) }
      it "returns and saves a new user" do
        expect(response.status).to eq(200)
        expect(user).to be_valid
      end
    end
  end

  describe "new user" do
    context "new user from sign up screen" do
      let(:user) { build(:user) }
      it "makes a new user" do
        expect(response.status).to eq(200)
        expect(user).to be_valid
      end
    end
  end

end
