class Api::V1::ProductsController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    user_id = User.find_by(handle: params[:handle])
    @user_products = Product.where(user: user_id)
    render json: @user_products
  end

  def show
    user = User.find_by(handle: params[:handle])
    @user_product = Product.find_by(product_name: params[:product_name], user_id: user.id)
    render json: @user_product
  end

  def update
    user = User.find_by(handle: params[:handle])
    @user_product = Product.find_by(product_name: params[:product_name], user_id: user.id)
    @user_product.update(product_settings_params)
    render json: @user_product
  end

  private

  def product_settings_params
    params.permit(:active_api, :active_color_palette, :active_effect, :master_brightness, :on)
  end

end
