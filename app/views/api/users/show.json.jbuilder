# userDetail: {
#   id: 1,
#   username: "bob"
#   bio: "user's bio",
#   cover_url: "/cover/url",
#   profile_url: "/profile/url",
#   followees: [],
#   followers: [],
#   photos: []
# }


json.partial! 'api/users/user', user: @user

json.followings do
  json.array! @user.followings, partial: 'api/users/user', as: :user
end

json.followers do
  json.array! @user.followers, partial: 'api/users/user', as: :user
end
