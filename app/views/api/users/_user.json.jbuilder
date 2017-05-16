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


json.extract! user, :id, :username, :bio, :cover_url, :profile_url
