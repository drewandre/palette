class SettingsController < ApplicationController
  def index
    @setting = Setting.first
  end

  def show
    set_setting
  end

  def edit
    set_setting
  end

  def update
    set_setting
    if @setting.update(new_setting_params)
      flash[:notice] = "Setting updated!"
      redirect_to root_path
    else
      flash[:alert] = "Failed to update setting"
      render :edit
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_setting
      @setting = Setting.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def new_setting_params
      params.require(:setting).permit(:hue, :saturation, :brightness, :master_brightness, :color_palette, :effect)
    end

end
