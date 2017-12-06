class Api::V1::UsersController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    render json: { index: User.all, current_user: current_user }
  end

  def show
    @user = User.find_by(handle: user_params[:handle])
    render json: @user
  end

  private

  def user_params
    params.permit(:handle)
  end

end
