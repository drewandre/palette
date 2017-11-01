class Api::V1::EffectSettingsController < ApplicationController
  # before_action :skip_authenticity_token
  # skip_before_filter :verify_authenticity_token, only: [:create]
  protect_from_forgery with: :null_session

  def show
    product_id = Product.find_by(product_name: params[:product_name])
    @product_effect_settings = EffectSetting.find_by(product_id: product_id)
    render json: @product_effect_settings
  end

  def update
    product_id = Product.find_by(product_name: params[:product_name])
    @product_effect_settings = EffectSetting.find_by(product_id: product_id)
    @product_effect_settings.update(effect_settings_params)
    render json: @product_effect_settings
  end

  private

  def effect_settings_params
    params.require(:formPayload).permit(:parameter_1, :parameter_2, :parameter_3, :parameter_4, :parameter_5)
  end

end
