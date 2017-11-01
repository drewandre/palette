class Api::V1::UsersController < ApplicationController
  def index
    render json: User.all
  end
  def show
    @user = User.find_by(handle: params[:handle])
    render json: @user
  end
end
