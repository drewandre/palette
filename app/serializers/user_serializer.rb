class UserSerializer < ActiveModel::Serializer
  attributes :id, :admin, :email, :handle, :first_name, :last_name, :current_product_name, :updated_at
end
