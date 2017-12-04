FactoryGirl.define do
  factory :effect do
    id { EffectSetting.first || association(:effect_setting) }
    product_id { Product.first || association(:product) }
    parameter_1 10
    parameter_2 20
    parameter_3 -30
    parameter_4 50
    parameter_5 -50
  end
end
