class Api::FavoritesController < ApplicationController

   def create

    @favorite = Favorite.new(favorite_params)
    if Favorite.find_by(
        user_id: @favorite.user_id,
        likeable_id: @favorite.video_id,
        likeable_type: @favorite.video_type
        )

      render json: 'Already favorited', status: 422
    else 
      @favorite.save
    end
  end

  def destroy
    favorite = Favorite.find_by(
        user_id: params[:user_id], 
        likeable_id: params[:video_id], 
        likeable_type: params[:video_type]
        )

    if favorite 
        favorite.destroy
    else 
        render json: 'Movie is not a favorite'
    end
  end
  private

  def favorite_params
    params.permit(:user_id, :video_id, :video_type)
  end
end
