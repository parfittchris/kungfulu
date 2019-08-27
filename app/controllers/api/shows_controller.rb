class Api::ShowsController < ApplicationController
   
        def index
            @shows = Show.all
            
            render "api/shows/index"
        end

        def show
            @show = Show.find_by_id(params[:id])
            if @show.nil?
                render json: "Can't find TV show"
            else
                render "api/shows/show"
            end
        end

        def search
            title = params[:title]
            @shows = Show.where('title iLIKE ?', "%#{title}%")
            if @shows.nil?
                render json: 'Search returned no results'
            else
                render "api/shows/index"
            end
        end

         def movie_params
            params.require(:show).permit(:title, :year, :rating, :description)
        end
end