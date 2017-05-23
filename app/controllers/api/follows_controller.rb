class Api::FollowsController < ApplicationController

  def create
    follow = Follow.new(following_id: params[:user_id])
    follow.follower_id = current_user.id
    follow.save

    @user = User.find(params[:user_id])
    render 'api/users/show'
  end

  def destroy
    follow = Follow.find_by({
      following_id: params[:user_id],
      follower_id: current_user.id
    })

    follow.destroy!

    @user = User.find(params[:user_id])
    render 'api/users/show'
  end

end
