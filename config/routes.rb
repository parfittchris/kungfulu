Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
   root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resources :movies, only: [:index, :show]
    resources :shows, only: [:index, :show]
    resources :episodes, only: [:index]
    resources :favorites, only: [:create, :destroy]
    resource :session, only: [:create, :destroy, :show]

    
    get '/movies/search/:title', to: 'movies#search'
    get '/shows/search/:title', to: 'shows#search'

  end
end
