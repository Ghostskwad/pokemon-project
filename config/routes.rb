Rails.application.routes.draw do
  resources :user_pokemons, only: :create
  resources :pokemons
  resources :pokemon_types, only: :create
  resources :types
  resources :pokemon_sprites, only: :create
  resources :sprites, only: %i[create destroy]
  resources :stat_name_join_tables, only: :create
  resources :stat_names
  resources :pokemon_stats, only: :create
  resources :stats, only: %i[create update destroy]
  resources :nicknames, only: %i[create update]
  
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/me", to: "users#show"
  post "/signup", to: "users#create"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
