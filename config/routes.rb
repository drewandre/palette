Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, param: :handle, only: [:index, :show]

      get "users/:handle", to: "user#show"
      get "users/:handle/products", to: "products#index"
      get "users/:handle/products/:product_name", to: "products#show"
      post "users/:handle/products/:product_name", to: "products#update"

      get "users/:handle/products/:product_name/api_settings", to: "api_settings#show"
      get "users/:handle/products/:product_name/effect_settings", to: "effect_settings#show"
      post "users/:handle/products/:product_name/effect_settings", to: "effect_settings#update"

      get "users/:handle/palettes", to: "palettes#user_show"

      get "/palettes", to: "palettes#index"
      get "/palettes/:palette_name", to: "palettes#show"

      get "/effects", to: "effects#index"
      get "/effects/:id", to: "effects#show"

    end
  end
  root 'static_pages#index'
end
