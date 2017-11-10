class Api::V1::PalettesController < ApplicationController

  skip_before_action :verify_authenticity_token

  def index
    @palettes = ColorPalette.all
    render json: @palettes
  end

  def search
    similar_name = "%#{params[:palette_name]}%"
    @palettes = ColorPalette.where('lower(name) LIKE ?', similar_name.downcase).limit(15)
    render json: @palettes
  end

  def create
    user = User.find_by(handle: params[:handle])
    @uploaded_palette = ColorPalette.create(
      user_id: user.id,
      designer: params[:handle],
      name: params[:palette][:_json][0],
      hex_1: params[:palette][:_json][1],
      hex_2: params[:palette][:_json][2],
      hex_3: params[:palette][:_json][3],
      hex_4: params[:palette][:_json][4],
      hex_5: params[:palette][:_json][5]
    )
    @user_palettes = UserPalette.create(user_id: user.id, color_palette_id: @uploaded_palette.id)
    render json: @user_palettes
  end

  def user_show
    user = User.find_by(handle: params[:handle])
    @user_palettes = user.color_palettes
    render json: @user_palettes
  end

  def user_add
    user = User.find_by(handle: params[:handle])
    @user_palettes = UserPalette.create(user_id: user.id, color_palette_id: params[:palette_id])
    render json: @user_palettes
  end

  def current_user_palette
    palette_id = params[:id]
    @current_user_palette = ColorPalette.find(params[:id])
    render json: @current_user_palette
  end

end
