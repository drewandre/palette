require 'rails_helper'

RSpec.describe SessionsController, type: :controller do
  describe "#create" do

    context "registered user, no remember" do
      let(:user) { create(:user) }
      it "returns the serialized user" do
        post :create, params: { session: { login: user.email, password: user.password, remember_me: "0" } }

        expect(response.status).to eq(302)
        expect(response.cookies["remember_token"]).to be_nil
      end
    end

    context "registered user, remember" do
      let(:user) { create(:user) }
      it "returns nothing" do
        post :create, params: { session: { login: user.email, password: user.password, remember_me: "1" } }

        expect(response.status).to eq(302)
        expect(response.cookies["remember_token"]).to_not be_nil
        expect(cookies.signed["user_id"]).to eq(user.id)
      end
    end
  end
end
