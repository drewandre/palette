class SessionsController < ApplicationController

  before_action :prevent_duplicate_sign_in, only: [:create, :new]

  def create
    if params[:session][:login].match(User::EMAIL_REGEXP)
      user = User.find_by(email: params[:session][:login].downcase)
    else
      user = User.find_by(handle: params[:session][:login])
    end
    if user && user.authenticate(params[:session][:password])
      if user.confirmed?
        flash[:success] = "Signed in as #{user.handle}."
        sign_in(user)
        params[:session][:remember_me] == "1" ? remember(user) : forget(user)
        redirect_to post_auth_path
      else
        flash.now[:alert] = "You need to confirm your email address before continuing."
        render :new
      end
    else
      flash.now[:alert] = "Invalid email/username & password combination."
      render :new
    end
  end

  def destroy
    sign_out
    flash[:success] = "Signed out."
    redirect_to root_url
  end

end
