# == Schema Information
#
# Table name: photos
#
#  id          :integer          not null, primary key
#  url         :string           not null
#  title       :string           not null
#  description :text
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Photo < ApplicationRecord
  validates :url, :title, :user, presence: true

  belongs_to :user,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id

  def self.find_by_user_id(id)
    Photo.select(:id, :url, :title, :description, :user_id)
      .where(user_id: id)
  end

  def self.home_feed(id)
    Photo
      .joins("INNER JOIN follows ON photos.user_id = follows.following_id")
      .where("follows.follower_id = :id", id: id)
  end


end
