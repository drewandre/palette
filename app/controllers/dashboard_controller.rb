class DashboardController < ApplicationController
  before_action :authenticate_user!, only: [:edit, :update]
  def index
    authenticate_user!
  end
end
