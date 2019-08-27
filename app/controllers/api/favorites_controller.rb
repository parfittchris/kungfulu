class Api::FavoritesController < ApplicationController

   def create 
    @favorite = Favorite.new(id: Favorite.last.id + 1, user_id: params[:user_id], likeable_type: params[:type],likeable_id: params[:likeable][:id])
      if Favorite.all.find_by(user_id: params[:user_id], likeable_type: params[:type],likeable_id: params[:likeable][:id])
        render json: 'Video already favorited'
      else
        @favorite.save
      end
  end

  def destroy
    favorite = Favorite.all.find_by(user_id: params[:user_id], likeable_id: params[:video_id][:id], likeable_type: params[:video_type])
    if favorite 
        favorite.destroy
    else 
        render json: 'Video is not a favorite'
    end
  end
  private

  def favorite_params
    params.require(:likeable).permit(:id, :user_id, :title, :year, :rating, :description, :video_url, :image_url, :likeable)
  end
end
