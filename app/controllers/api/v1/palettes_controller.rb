class Api::V1::PalettesController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    @palettes = ColorPalette.all
    render json: @palettes
  end

  def search
    similar_name = "%#{params[:palette_name]}%"
    # if(similar_name == "%user:%") {
    #   @palettes = ColorPalette.where('lower(name) LIKE ?', similar_name.downcase).limit(15)
    # }
    @palettes = ColorPalette.where('lower(name) LIKE ?', similar_name.downcase).limit(15)
    render json: @palettes
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
