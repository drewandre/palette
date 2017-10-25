Rails.application.routes.draw do

  root 'static_pages#index'

  get "sign-in", to: "sessions#new", as: :sign_in
  get "sign-in", to: "sessions#new"
  post "sign-in", to: "sessions#create"
  delete "sign-out", to: "sessions#destroy"
  # get "sign-out", to: "sessions#destroy"
  get "sign-up", to: "users#new", as: :sign_up

  namespace :api do
    namespace :v1 do
      resources :settings, only: [:index]
    end
  end

  resources :settings, only: [:index, :show, :edit, :update]

  resources :account_confirmations, only: [:edit]
  resources :password_resets, only: [:create, :edit, :new, :update]
  resources :users, only: [:create, :edit, :update]
  # resources :sessions, only: [:destroy]

  # use_doorkeeper

end
