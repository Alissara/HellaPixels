class Api::UsersController < ApplicationController
  before_action :ensure_authorization, only: [:update]

  def show
    @user = User.find(params[:id])
    render 'api/users/show'
  end

  def create
    @user = User.new(user_params)

    if @user.save
      Follow.create!(following_id: @user.id, follower_id: 1)
      Follow.create!(following_id: 1, follower_id: @user.id)
      login(@user)
      render 'api/users/show'
    else
      render json: { authForm: @user.errors.full_messages }, status: 422
    end
  end

  def update
    @user = User.find(params[:id])
    @user.update(user_params)
    render 'api/users/show'
  end

  private
  def user_params
    params
      .require(:user)
      .permit(:username, :password, :bio, :cover_url, :profile_url)
  end

  def ensure_authorization
    current_user.id == params[:id]
  end
end
