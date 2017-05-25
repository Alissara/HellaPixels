class Api::PhotosController < ApplicationController
  before_action :ensure_authorization, only: [:update, :destroy]

  def index
    @photos = Photo.find_by_user_id(params[:user_id])
    render 'api/photos/index'
  end

  def show
    @photo = Photo.find(params[:id])
    render 'api/photos/show'
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.user_id = current_user.id

    if @photo.save
      render 'api/photos/show'
    else
      render json: { createPhoto: @photo.errors.full_messages }, status: 422
    end
  end

  def update
    @photo = Photo.find(params[:id])

    if @photo.update(photo_params)
      render 'api/photos/show'
    else
      render json: { createPhoto: @photo.errors.full_messages }, status: 422
    end
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy
    render 'api/photos/show'
  end

  private

  def photo_params
    params.require(:photo).permit(:url, :title, :description, :user_id)
  end

  def ensure_authorization
    current_user.id == Photo.find(params[:id]).user_id
  end

end
