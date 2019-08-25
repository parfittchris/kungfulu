class Api::FavoritesController < ApplicationController

   def create
    debugger
    @favorite = Favorite.new(user_id: params[:user_id], likeable: favorite_params)
    debugger
    @favorite.save
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
    params.require(:likeable).permit(:user_id, :title, :year, :rating, :description)
  end
end
