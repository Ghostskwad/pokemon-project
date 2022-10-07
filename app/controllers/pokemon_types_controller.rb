class PokemonTypesController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    # POST /pokemon_types
    def create
        @pokemon_type = PokemonType.new(pokemon_id: params[:pokemon_id], type_id: Type.find_by(name: params[:name]).id)
        @pokemon_type.save!
        render json: @pokemon_type, status: :created
    end

    private

    # Error handling callback methods
    def render_unprocessable_entity_response(invalid)
      render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end
end
