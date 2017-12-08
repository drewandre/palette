require 'rails_helper'
require_relative './shared_examples/respond_to_missing'

RSpec.describe Api::V1::PalettesController, type: :controller do
  let!(:user) { FactoryGirl.create(:user) }
  let!(:color_palette) { FactoryGirl.create(:color_palette) }
  let!(:searchable_palette) { FactoryGirl.create(:color_palette, name: "strawberry", user_id: user.id) }
  let!(:palette_to_delete) { FactoryGirl.create(:color_palette) }

  describe "GET #index" do
    it "should return a list of all color palettes" do
      get :index
      data = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(data.keys[0]).to eq("palettes")
      expect(data["palettes"].length).to eq 3
    end
  end

  describe "GET #search" do
    it "should return information for a single, searched palette" do
      get :search, :params => {:palette_name => searchable_palette.name[0..5]}
      data = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(data["palettes"].length).to eq 1
    end
  end

  describe "POST #new" do
    it "should return a new custom palette from the vibrant.js algorithm" do
      post :new, :params => {
        :handle => user.handle,
        :_json => [
          color_palette.name,
          color_palette.hex_1,
          color_palette.hex_2,
          color_palette.hex_3,
          color_palette.hex_4,
          color_palette.hex_5
        ]
      }
      data = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(data["id"]).not_to eq (nil)
      expect(data["user_id"]).to eq user.id
    end
  end

  describe "POST #create" do
    it "should return information for a single, searched palette" do
      post :create, :params => {
        :handle => user.handle,
        :palette_id => color_palette.id
      }
      data = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(data["id"]).not_to eq (nil)
    end
  end

  # describe "GET #user_show" do
  #   it "should return a list of a user's saved color palettes" do
  #     get :user_show, :params => { :handle => user.handle }
  #     data = JSON.parse(response.body)
  #     expect(response.status).to eq 200
  #     expect(response.content_type).to eq("application/json")
  #     expect(data["palettes"].length).to eq 1
  #   end
  # end

  describe "GET #current_user_palette" do
    it "should return a list of a user's saved color palettes" do
      get :current_user_palette, :params => { :palette_id => color_palette.id }
      data = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(data["id"]).to eq (color_palette.id)
    end
  end

  # describe "DESTROY #destroy_user_palette" do
  #   it "should delete a user's saved color palette" do
  #     delete :destroy_user_palette, :params => { :handle => user.handle, :palette_id => palette_to_delete.id }
  #     data = JSON.parse(response.body)
  #     expect(response.status).to eq 200
  #     expect(response.content_type).to eq("application/json")
  #     expect{ delete :destroy, :id => palette_to_delete.id }.to change(ColorPalette, :count).by(-1)
  #   end
  # end

end
