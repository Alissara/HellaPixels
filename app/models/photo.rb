class Photo < ApplicationRecord
  validates :url, :title, :user, presence: true

  belongs_to :user,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id

end
