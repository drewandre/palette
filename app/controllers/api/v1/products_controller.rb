class Api::V1::ProductsController < ApplicationController
  def index
    user_id = User.find_by(handle: params[:handle])
    @user_products = Product.where(user: user_id)
    render json: @user_products
  end

  def show
    user_id = User.find_by(handle: params[:handle])
    @user_products = Product.find_by(product_name: params[:product_name])
    render json: @user_products
  end
end
