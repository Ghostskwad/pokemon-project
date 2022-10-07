class StatsController < ApplicationController
before_action :set_stat, only: %i[update destroy]
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  
  
 # POST /stats
 def create
   @stat = Stat.new(base_stat: params[:base_stat])
   @stat.save!
   render json: @stat, status: :created
 end

 # PATCH/PUT /stats/1
 def update
   @stat.update!(base_stat: params[:base_stat])
   render json: @stat, status: :accepted
 end

 # DELETE /stats/1
 def destroy
   @stat.destroy!
   head :no_content
 end

 private

   # Use callbacks to share common setup or constraints between actions.
   def set_stat
     @stat = Stat.find(params[:id])
   end

   # Error handling callback methods
   def render_unprocessable_entity_response(invalid)
     render json: { errors: invalid.record.errors }, status: :unprocessable_entity
   end

   def render_not_found_response
     render json: { error: "Stat not found" }, status: :not_found
   end
end
