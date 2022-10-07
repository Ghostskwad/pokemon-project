class PokemonSpritesController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    # POST /pokemon_sprites
    def create
        @pokemon_sprite = PokemonSprite.new(pokemon_sprite_params)
        @pokemon_sprite.save!
        render json: @pokemon_sprite, status: :created
    end

    private

    # Only allow a list of trusted parameters through.
    def pokemon_sprite_params
      params.permit(:pokemon_id, :sprite_id)
    end


    # Error handling callback methods
    def render_unprocessable_entity_response(invalid)
      render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end
end
