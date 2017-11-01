class Api::V1::PalettesController < ApplicationController
  def index
    @user_palettes = ColorPalette.all
    render json: @user_palettes
  end

  def show
    @palette = ColorPalette.find_by(id: params[:palette_id])
    render json: @palette
  end

  def user_show
    user = User.find_by(handle: params[:handle])
    @user_palettes = ColorPalette.where(user_id: user.id)
    render json: @user_palettes
  end

end
