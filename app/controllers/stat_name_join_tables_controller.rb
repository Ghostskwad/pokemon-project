class StatNameJoinTablesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    # POST /stat_name_join_tables
    def create
        @stat_name_join_table = StatNameJoinTable.new(stat_id: params[:stat_id], stat_name_id: StatName.find_by(name: params[:name]).id)
        @stat_name_join_table.save!
        render json: @stat_name_join_table, status: :created
    end

    private

    # Error handling callback methods
    def render_unprocessable_entity_response(invalid)
      render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end
end
