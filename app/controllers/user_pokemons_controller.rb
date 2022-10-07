class UserPokemonsController < ApplicationController
    def create
        @user_pokemon = UserPokemon.new(user_pokemon_params)
        @user_pokemon.save!
        render json: @user_pokemon, status: :created
    end

    private

    # Only allow a list of trusted parameters through.
    def user_pokemon_params
      params.permit(:user_id, :pokemon_id)
    end


    # Error handling callback methods
    def render_unprocessable_entity_response(invalid)
      render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end
end
