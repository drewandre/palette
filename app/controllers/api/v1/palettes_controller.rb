class Api::V1::PalettesController < ApplicationController
  def index
    @user_palettes = ColorPalette.all
    render json: @user_palettes
  end

  def search
    similar_name = "%#{params[:palette_name]}%"
    @palettes = ColorPalette.where("name LIKE ?", similar_name).limit(6)
    render json: @palettes
  end

  def user_show
    user = User.find_by(handle: params[:handle])
    @user_palettes = ColorPalette.where(user_id: user.id)
    render json: @user_palettes
  end

  def current_user_palette
    @current_user_palette = ColorPalette.find(params[:id])
    render json: @current_user_palette
  end

end
