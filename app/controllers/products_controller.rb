class ProductsController < ApplicationController

  # before_action :authenticate_user!, only: [:edit, :update]
  # before_action :prevent_duplicate_sign_in, only: [:create, :new]

  def new
    @product = Product.new
  end

  def create
    @product = Product.new(product_params)
    @product.update(
      user_id: current_user.id,
      product_name: @product.product_name.downcase,
      active_color_palette: ColorPalette.first.id,
      active_api: "real-time-stock-data",
      active_effect: Effect.first.effect_name,
      turn_on: Time.new,
      turn_off: Time.new
    )
    if @product.save
      effect_names = ["Radiate", "Rainbow", "Splatter", "Flex", "Ambient", "Twinkle"];
      effect_names.length.times do |index|
        EffectSetting.create(
          product_id: @product.id,
          effect_name: effect_names[index],
          parameter_1: rand(-30...30),
          parameter_2: rand(-30...30),
          parameter_3: rand(-30...30),
          parameter_4: rand(-30...30),
          parameter_5: rand(-30...30)
        )
      end
      current_user.update(current_product_name: @product.product_name)
      UserPalette.create(user_id: current_user.id, color_palette_id: @product.active_color_palette)
      flash[:success] = "Registration successful."
      redirect_to root_path
    else
      flash.now[:alert] = "There was a problem with your registration."
      render :new
    end
  end

  def product_params
    params.require(:product).permit(:product_name)
  end

end
