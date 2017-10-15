class Api::V1::SettingsController < ApplicationController
  def index
    render json: Setting.all
  end
end
