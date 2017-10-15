Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :settings, only: [:index]
    end
  end

  resources :settings, only: [:index, :show, :edit, :update]

  root 'static_pages#index'
  # root 'settings#index'

end
