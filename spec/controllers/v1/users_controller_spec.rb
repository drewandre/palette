require 'rails_helper'
require_relative './shared_examples/respond_to_missing'

RSpec.describe Api::V1::UsersController, type: :controller do
  describe "GET #index" do
    it "should return a list of all users and the current user" do
      get :index
      data = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(data.keys[0]).to eq("index")
      expect(data.keys[1]).to eq("current_user")
    end
  end
end
