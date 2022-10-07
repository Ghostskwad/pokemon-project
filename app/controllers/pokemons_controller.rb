class PokemonsController < ApplicationController
skip_before_action :authorize
before_action :set_pokemon, only: [:show, :update, :destroy]
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
      
      
        # GET /pokemons
        def index
        #   @user = User.find_by(id: session[:user_id])
          @pokemons = Pokemon.all
          render json: @pokemons, status: :ok 
        end
      
        # GET /pokemons/1
        def show
          render json: @pokemon, status: :ok 
        end
      
        # POST /pokemons
        def create
          @pokemon = Pokemon.create!(pokemon_params)
          render json: @pokemon, status: :created
        end
      
        # PATCH/PUT /pokemons/1
        def update
          @pokemon.update!(nickname: params[:nickname])
          render json: @pokemon, status: :accepted
        end
      
        # DELETE /pokemons/1
        def destroy
          @pokemon.destroy!
          head :no_content
          
        end
      
        private
      
          # Use callbacks to share common setup or constraints between actions.
          def set_pokemon
            @pokemon = Pokemon.find(params[:id])
          end
      
          # Only allow a list of trusted parameters through.
          def pokemon_params
            params.permit(:name, :game_index, :height, :weight, :base_experience, :flavor_text)
          end
      
      
          # Error handling callback methods
          def render_unprocessable_entity_response(invalid)
            render json: { errors: invalid.record.errors }, status: :unprocessable_entity
          end
      
          def render_not_found_response
            render json: { error: "pokemon not found" }, status: :not_found
          end
end
