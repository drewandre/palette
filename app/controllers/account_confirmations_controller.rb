class AccountConfirmationsController < ApplicationController

  def edit
    user = User.find_by(email: params[:email])
    if user && user.confirmed_at.nil? && user.authenticated?(:confirmation, params[:id])
      user.confirm!
      flash[:success] = "Your email address is confirmed. Thank you."
    else
      flash[:alert] = "There was a problem confirming your email."
    end
    redirect_to root_path
  end

end
