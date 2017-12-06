class Api::V1::EffectsController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    @effects = Effect.all
    render json: @effects
  end

  def show
    @effect = Effect.find_by(effect_name: params[:effect_name])
    render json: @effect
  end

end
