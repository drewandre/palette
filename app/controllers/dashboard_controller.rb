class DashboardController < ApplicationController
  before_action :authenticate_user!, only: [:edit, :update]
  before_action :authenticate_user_product!

  def index
    authenticate_user!
    authenticate_user_product!
  end
end
