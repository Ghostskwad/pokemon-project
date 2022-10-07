class SpritesController < ApplicationController
before_action :set_sprite, only: :destroy
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    
    
  # POST /sprites
   def create
       @sprite = Sprite.new(sprite_params)
       @sprite.save!
       render json: @sprite, status: :created
   end
    
  # DELETE /sprites/1
   def destroy
       @sprite.destroy!
       head :no_content
   end
    
   private
    
    # Use callbacks to share common setup or constraints between actions.
    def set_sprite
    @sprite = Sprite.find(params[:id])
    end
    
    # Only allow a list of trusted parameters through.
    def sprite_params
    params.permit(:front_default, :back_default, :official_artwork)
    end
    
    
    # Error handling callback methods
    def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end
    
    def render_not_found_response
    render json: { error: "Sprite not found" }, status: :not_found
    end
end
