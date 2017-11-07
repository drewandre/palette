class Api::V1::ApiSettingsController < ApplicationController
  def show
    user_id = User.find_by(handle: params[:handle])
    product_id = Product.find_by(user: user_id)
    @product_api_settings = ApiSetting.find_by(product_id: product_id)
    render json: @product_api_settings
  end
end
