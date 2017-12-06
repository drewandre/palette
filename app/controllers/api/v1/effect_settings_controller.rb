class Api::V1::EffectSettingsController < ApplicationController
  protect_from_forgery with: :null_session
  
  def index
    user = User.find_by(handle: params[:handle])
    @product_effect_settings = user.products.find_by(product_name: params[:product_name]).effect_settings
    render json: @product_effect_settings
  end

  def show
    user = User.find_by(handle: params[:handle])
    effect_settings = user.products.find_by(product_name: params[:product_name]).effect_settings
    @product_effect_settings = effect_settings.find_by(effect_name: params[:effect_name].capitalize)
    render json: @product_effect_settings
  end

  def update
    user = User.find_by(handle: params[:handle])
    effect_settings = user.products.find_by(product_name: params[:product_name]).effect_settings
    @product_effect_settings = effect_settings.find_by(effect_name: params[:effect_name].capitalize)
    @product_effect_settings.update(effect_settings_params)
    render json: @product_effect_settings
  end

  private

  def effect_settings_params
    params.require(:formPayload).permit(:parameter_1, :parameter_2, :parameter_3, :parameter_4, :parameter_5)
  end

end
