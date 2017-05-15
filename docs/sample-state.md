{
  currentUser: {
    id: 1,
    username: "bob"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createPhoto: {errors: ["Title can't be Blank"]}
  },
  photos: {
    1: {
      id: 1,
      url: "/photo/url"
      title: "Photo title",
      description: "Photo description",
      user_id: 1,
    }
  },
  photo: {
    1: {
      id: 1,
      url: "/photo/url"
      title: "Photo title",
      description: "Photo description",
      user_id: 1,
    }
  },
  userDetail: {
    id: 1,
    username: "bob"
    bio: "user's bio",    
    cover_url: "/cover/url",
    profile_url: "/profile/url",
    followees: [],
    followers: [],
    photos: []
  }
}
