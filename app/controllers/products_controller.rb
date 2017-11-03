class ProductsController < ApplicationController

  def new
    @product = Product.new
  end

  def create
    @product = Product.new(product_params)
    @product.user_id = current_user.id
    @product.product_name = @product.product_name.parameterize
    if @product.save
      current_user.current_product_name = @product.product_name
      current_user.save
      p "Registration successful."
      flash[:success] = "Registration successful."
      redirect_to root_path
    else
      p "There was a problem with your registration."
      flash.now[:alert] = "There was a problem with your registration."
      render :new
    end
  end

  def product_params
    params.require(:product).permit(:product_name)
  end

end
