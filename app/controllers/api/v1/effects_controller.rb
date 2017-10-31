class Api::V1::EffectsController < ApplicationController
  def index
    @effects = Effect.all
    render json: @effects
  end

  def show
    @effect = Effect.find_by(id: params[:id])
    render json: @effect
  end
end
