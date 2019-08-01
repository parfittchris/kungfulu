class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
            
        if @user.nil?
            flash.now[:errors] = ['Invalid email or password.']
            render :new
        else
            login!(@user)
            render "api/users/show"
        end
    end

    def destroy
        if current_user
            logout!
            render json: {}
        else
            render json: "No one logged in!", status: 404
        end
    end
end