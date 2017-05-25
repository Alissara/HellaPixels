# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  bio             :text
#  cover_url       :string
#  profile_url     :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

  validates :username, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token
  after_initialize :set_default

  attr_reader :password

  has_many :photos,
    class_name: :Photo,
    primary_key: :id,
    foreign_key: :user_id

  has_many :in_follows,
    class_name: :Follow,
    primary_key: :id,
    foreign_key: :following_id

  has_many :out_follows,
    class_name: :Follow,
    primary_key: :id,
    foreign_key: :follower_id

  has_many :followers,
    through: :in_follows,
    source: :follower

  has_many :followings,
    through: :out_follows,
    source: :following

  def self.find_by_credentials(un, pw)
    user = User.find_by(username: un)
    return nil unless user
    user.password_is?(pw) ? user : nil
  end

  def password_is?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end

  private

  def generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def set_default
    self.profile_url ||= 'https://68.media.tumblr.com/36f3f6b6b1699e13bb63c042a53b6fff/tumblr_o51oavbMDx1ugpbmuo1_250.png'
  end

end
