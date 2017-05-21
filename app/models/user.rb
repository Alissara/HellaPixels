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
    self.profile_url ||= 'https://robohash.org/my-own-slug.jpg?size=50x50'
  end

end
