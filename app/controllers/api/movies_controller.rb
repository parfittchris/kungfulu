class Api::MoviesController < ApplicationController
   
        def index
            @movies = Movie.all

            render "api/movies/index"
        end

        def show
            @movie = Movie.find_by_id(params[:id])
            if @movie.nil?
                render json: "Can't find movie"
            else
                render "api/movies/show"
            end
        end

        def search
            title = params[:title]
            @movies = Movie.where('title iLIKE ?', "%#{title}%")
            if @movies.nil?
                render json: 'Search returned no results'
            else
                render "api/movies/index"
            end
        end


        def movie_params
            params.require(:movie).permit(:title, :year, :rating, :description,)
        end

end