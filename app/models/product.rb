class Product < ApplicationRecord
  belongs_to :user
  has_many :api_settings
  has_many :effect_settings

  before_save :strip_product_name

  validates_presence_of :master_brightness, :active_effect
  validates_presence_of :product_name, :message => "can't be blank"

  # def prevent_duplicate_product
  #   user = User.find(@user)
  #   if (user.products.exists?(['name LIKE ?', "%#{:product_name}%"]))
  #     return false
  #   end
  # end

  def strip_product_name
    self.product_name.strip!
  end

  def parameterize
    self.product_name.parameterize
  end

end
