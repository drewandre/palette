class Api::V1::PalettesController < ApplicationController
  def index
    @user_palettes = ColorPalette.all
    render json: @user_palettes
  end

  def show
    @palette = ColorPalette.find_by(name: params[:palette_name])
    render json: @palette
  end

  def user_show
    user_id = User.find_by(handle: params[:handle])
    @user_palettes = ColorPalette.where(user_id: user_id)
    render json: @user_palettes
  end

end
