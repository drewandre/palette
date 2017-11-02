class UsersController < ApplicationController

  # prepend_before_action :check_captcha, only: :create
  before_action :authenticate_user!, only: [:edit, :update]
  before_action :prevent_duplicate_sign_in, only: [:create, :new]

  def create
    @user = User.new(user_params)
    if @user.save
      # @user.send_confirmation_email
      flash[:success] = "Registration successful."
      # redirect_to root_path
      sign_in(@user)
      redirect_to sign_up_products_url
    else
      flash.now[:alert] = "There was a problem with your registration."
      render :new
    end
  end

  def edit
    @user = User.find_by(handle: params[:id])
    authorize_user(@user)
  end

  def new
    @user = User.new
  end

  def update
    @user = User.find_by(handle: params[:id])
    authorize_user(@user)
    if @user.authenticate(params[:user][:password])
      @user.assign_attributes(update_params)
      if @user.changed.include?("email") && @user.valid?
        @user.confirmed_at = nil
        @user.send(:generate_confirmation_digest)
        @reconfirm = true
        sign_out
      end
      if @user.save
        if @reconfirm
          @user.send_confirmation_email
          flash[:success] = "Update successful. Please confirm your email to re-activate your account."
        else
          flash[:success] = "Update successful."
        end
        redirect_to root_path
      else
        flash.now[:alert] = "There was a problem with your update."
        render :edit
      end
    else
      flash.now[:alert] = "There was a problem with your update."
      render :edit
    end
  end

  protected

  def authorize_user(user)
    unless user == current_user
      flash[:alert] = "You are not authorized for this record."
      redirect_to root_path
    end
  end

  # def check_captcha
  #   unless verify_recaptcha
  #     self.resource = resource_class.new sign_up_params
  #     respond_with_navigational(resource) { render :new }
  #   end
  # end

  def update_params
    params.require(:user).permit(:email, :first_name, :last_name)
  end

  def user_params
    params.require(:user).permit(:handle, :email, :first_name, :last_name, :password, :password_confirmation)
  end

end
