require 'rails_helper'
require_relative './shared_examples/respond_to_missing'

RSpec.describe Api::V1::EffectsController, type: :controller do
  describe "GET #index" do
    it "should return a list of all effects" do
      get :index
      data = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
    end
  end

  describe "GET #show" do
    it "should return a single effect" do
      get :show
      data = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      # expect(data.size).to eq(1)
    end
  end
end
