class Api::V1::UsersController < ApplicationController

  def index
    render json: { index: User.all, current_user: current_user }
  end

  def show
    @user = User.find_by(handle: params[:handle])
    render json: @user
  end

  # def show_current_user
  #   binding.pry
  #   @user = User.where(id: current_user.id)
  #   render json: @user
  # end

end
