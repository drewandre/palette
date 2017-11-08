class ProductsController < ApplicationController

  def new
    @product = Product.new
  end

  def create
    @product = Product.new(product_params)
    @product.user_id = current_user.id
    @product.product_name = @product.product_name.parameterize
    @product.active_color_palette = ColorPalette.first.id
    @product.active_effect = Effect.first.id
    if @product.save
      @effect_setting = EffectSetting.create(product_id: @product.id)
      @effect_setting.update(active_effect: Effect.first.id)
      # ApiSetting.create(product_id: @product.id)
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
