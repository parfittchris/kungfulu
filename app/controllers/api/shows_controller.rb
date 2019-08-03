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

end