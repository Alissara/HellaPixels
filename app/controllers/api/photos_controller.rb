class Api::PhotosController < ApplicationController

  def index
    @photos = Photo.find_by_user_id(user: params[:id])
    render 'api/photos/index'
  end

  def show
    @photo = Photo.find_by(photo: params[:id])
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
    @photo = Photo.find_by(photo: params[:id])

    if @photo.update(photo_params)
      render 'api/photos/show'
    else
      render json: { createPhoto: @photo.errors.full_messages }, status: 422
    end
  end

  def destroy
    @photo = Photo.find_by(photo: params[:id])
    @photo.destroy
    render 'api/photos/show'
  end

  private

  def photo_params
    params.require(:photo).permit(:url, :title, :description)
  end

end
