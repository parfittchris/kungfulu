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

end