class Api::V1::ProductsController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    user_id = User.find_by(handle: user_params[:handle])
    @user_products = Product.where(user: user_id)
    render json: @user_products
  end

  def show
    user = User.find_by(handle: user_params[:handle])
    @user_product = Product.find_by(product_name: product_params[:product_name], user_id: user.id)
    render json: @user_product
  end

  def update
    user = User.find_by(handle: user_params[:handle])
    @user_product = Product.find_by(product_name: product_params[:product_name], user_id: user.id)
    @user_product.update(product_params)
    render json: @user_product
  end

  private

  def user_params
    params.permit(:handle)
  end

  def product_params
    params.permit(:product_name, :active_api, :active_color_palette, :active_effect, :master_brightness, :on)
  end

end
