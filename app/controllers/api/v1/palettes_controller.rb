class Api::V1::PalettesController < ApplicationController
  protect_from_forgery with: :null_session
  skip_before_action :verify_authenticity_token

  def index
    @palettes = ColorPalette.all
    render json: @palettes
  end

  def search
    similar_name = "%#{palette_params[:palette_name]}%"
    @palettes = ColorPalette.where('lower(name) LIKE ?', similar_name.downcase).limit(15)
    render json: @palettes
  end

  def new
    user = User.find_by(handle: user_params[:handle])
    @uploaded_palette = ColorPalette.create(
      user_id: user.id,
      designer: user.handle,
      name: palette_params[:_json][0],
      hex_1: palette_params[:_json][1],
      hex_2: palette_params[:_json][2],
      hex_3: palette_params[:_json][3],
      hex_4: palette_params[:_json][4],
      hex_5: palette_params[:_json][5]
    )
    @user_palettes = UserPalette.create(user_id: user.id, color_palette_id: @uploaded_palette.id)
    render json: @user_palettes
  end

  def create
    user = User.find_by(handle: user_params[:handle])
    if (
      user.color_palettes.count < 8 &&
      !UserPalette.exists?(user_id: user.id, color_palette_id: palette_params[:palette_id])
    )
      @user_palette = UserPalette.create(user_id: user.id, color_palette_id: palette_params[:palette_id])
    else
      flash[:error] = "Only eight color palettes allowed!"
    end
    render json: @user_palette
  end

  def user_show
    user = User.find_by(handle: user_params[:handle])
    @user_palettes = user.color_palettes
    render json: @user_palettes
  end

  def user_add
    user = User.find_by(handle: user_params[:handle])
    @user_palettes = UserPalette.create(user_id: user.id, color_palette_id: palette_params[:palette_id])
    render json: @user_palettes
  end

  def current_user_palette
    if palette_params[:palette_id] != "null"
      @current_user_palette = ColorPalette.find(palette_params[:palette_id])
      render json: @current_user_palette
    end
  end

  def destroy_user_palette
    user = User.find_by(handle: user_params[:handle])
    user_palette = UserPalette.find_by(color_palette_id: palette_params[:palette_id], user_id: user.id)
    UserPalette.destroy(user_palette.id)
    if user.user_palettes.empty?
      current_user_product = Product.find_by(user_id: user.id, product_name: user.current_product_name)
      current_user_product.update(active_color_palette: nil)
    end
  end

  private

  def user_params
    params.permit(:handle)
  end

  def palette_params
    params.permit(:palette_id, :palette_name, :_json => [])
  end

end
