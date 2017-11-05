class Api::V1::PalettesController < ApplicationController
  def index
    @user_palettes = ColorPalette.all
    render json: @user_palettes
  end

  def search
    similar_name = "%#{params[:palette_name]}%"
    @palettes = ColorPalette.where("name LIKE ?", similar_name).limit(8)
    render json: @palettes
  end

  def user_show
    user = User.find_by(handle: params[:handle])
    @user_palettes = ColorPalette.where(user_id: user.id)
    render json: @user_palettes
  end

end
