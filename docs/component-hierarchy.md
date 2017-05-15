## Component Hierarchy

**Splash Container**
  - Splash Navbar
  - Splash
  - Footer

**AuthForm Container**
  - AuthForm

**Home Feed Container**
  - Navbar
  - Photos Index

**User Profile Container**
  - Navbar
  - User Section
  - Photo Index

**Follows Container**
  - Follows Header
  - Follows Index

**Photo Container**
  - Photo
  - Aside Detail

**Photo Upload**
  - Upload Form

**User Edit**
  - Update Form


## Routes

|Path | Component   |
|-------|-------------|
| "/signup" | "AuthFormContainer" |
| "/login" | "AuthFormContainer" |
| "/" | "SplashContainer" |
| "/home" | "HomeFeedContainer" |
| "/users/:userId" | "UserProfileContainer" |
| "/users/:userId/edit" | "UserEdit" |
| "/users/:userId/follows" | "FollowsContainer" |
| "/photos/:photoId" | "PhotoContainer" |
| "/photos" | "PhotoUploadContainer" |
