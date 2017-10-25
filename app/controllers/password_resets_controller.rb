class PasswordResetsController < ApplicationController

  def create
    if params[:password_reset][:email].match(User::EMAIL_REGEXP)
      user = User.find_by(email:params[:password_reset][:email])
      if user.present?
        user.generate_reset_digest
        user.send_password_reset_email
      end
      flash[:success] = "An email has been sent with instructions on how to reset your password."
      redirect_to root_url
    else
      flash[:alert] = "There was a problem resetting your password. Please try again."
      render :new
    end
  end

  def edit
    @user = User.find_by(email: params[:email])
    unless (@user.present? && @user.confirmed? && @user.authenticated?(:password_reset, params[:id]))
      redirect_to root_url
    end
  end

  def update
    @user = User.find_by(email: params[:email])
    if !(@user.present? && @user.confirmed? && @user.authenticated?(:password_reset, params[:id]))
      redirect_to root_url
    elsif @user.password_reset_expired?
      flash[:alert] = "Password reset has expired."
      redirect_to new_password_reset_url
    elsif params[:user][:password].empty?
      @user.errors.add(:password, "can't be empty")
      render :edit
    elsif @user.update_attributes(user_params)
      flash[:success] = "Your password has been successfully reset."
      redirect_to sign_in_path
    else
      render :edit
    end
  end

  protected

  def user_params
    params.require(:user).permit(:password, :password_confirmation)
  end

end
