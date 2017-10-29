class Api::V1::EffectSettingsController < ApplicationController
  def show
    product_id = Product.find_by(product_name: params[:product_name])
    @product_effect_settings = EffectSetting.find_by(product_id: product_id)
    render json: @product_effect_settings
  end
end
