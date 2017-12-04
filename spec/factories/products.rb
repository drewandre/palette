FactoryGirl.define do
  factory :product do
    active_effect 1
    user { User.first || association(:user) }
    product_name "product name"
  end
end
