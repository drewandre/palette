class Api::V1::ApiSettingsController < ApplicationController
  protect_from_forgery with: :null_session

  def show
    user = User.find_by(handle: api_settings_params)
    product_id = Product.find_by(user: user)
    @product_api_settings = ApiSetting.find_by(product_id: product_id)
    render json: @product_api_settings
  end

  private

  def api_settings_params
    params.permit(:handle)
  end

end
