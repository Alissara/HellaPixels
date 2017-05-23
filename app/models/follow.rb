class Follow < ApplicationRecord

  belongs_to :following,
    class_name: :User,
    primary_key: :id,
    foreign_key: :following_id

  belongs_to :follower,
    class_name: :User,
    primary_key: :id,
    foreign_key: :follower_id

  validates :following, :follower, presence: true
  validates :follower, uniqueness: { scope: :following }

end
