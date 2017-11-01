class Api::V1::ApiSettingsController < ApplicationController
  def show
    product_id = Product.find_by(product_name: params[:product_name])
    @product_api_settings = ApiSetting.find_by(product_id: product_id)
    render json: @product_api_settings
  end
end
