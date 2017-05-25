Rails.application.routes.draw do

  root "static_pages#root"



  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]
    get 'photos/home', to: 'photos#home'
    resources :photos, only: [:index, :create, :show, :update, :destroy]
    resources :follows, only: [:create, :destroy]

  end

end
