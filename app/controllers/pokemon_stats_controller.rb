class PokemonStatsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    # POST /pokemon_stats
    def create
        @pokemon_stat = PokemonStat.new(pokemon_stat_params)
        @pokemon_stat.save!
        render json: @pokemon_stat, status: :created
    end

    private

    # Only allow a list of trusted parameters through.
    def pokemon_stat_params
      params.permit(:pokemon_id, :stat_id)
    end


    # Error handling callback methods
    def render_unprocessable_entity_response(invalid)
      render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end
end
