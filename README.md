# HellaPixels

[HellaPixels Live][heroku]

[heroku]: http://hellapixels.herokuapp.com/

HellaPixels is a full-stack photo sharing web application inspired by 500px. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React-Redux on the frontend.

![screenshot](http://res.cloudinary.com/da6jfurzj/image/upload/v1495825547/splash_llhnun.png)

## Features

### User Profile Pages

Users can sign up for an account and create/edit their User Profile Page by including a User bio, or uploading a cover and profile images. The Authentication Forms are implemented using react-modals. A Demo-Login is available to explore the site's features. A User will always have access to their User Page, to their Home Feed, or to sign out from the navigation bar at the top.

![image of Create/Edit User](http://res.cloudinary.com/da6jfurzj/image/upload/v1495833451/Screen_Shot_2017-05-26_at_2.17.08_PM_hqhh8p.png)

### Upload and Manage Images

Users can upload, edit, and delete photos on their User's Profile Page. Users can only manage their own photos and no one else's. User Authorization is handled in the backend controllers and in the frontend to ensure users can't edit or delete other user's images. Validations in the backend will prevent users from uploading images with null image urls or titles. The image upload widget is implemented using the Cloudinary API, and users have the ability to crop their own photos before posting to their Profile Page. An alert will let the user know if the upload was unsuccessful.

![image of Create/Edit Image](http://res.cloudinary.com/da6jfurzj/image/upload/v1495832607/Screen_Shot_2017-05-26_at_2.02.35_PM_xql36d.png)

### Home Feed and Follows

Users can choose to follow or unfollow each other's Profile pages. Photo posts made by users the current user is following will populate on the Home Feed. Each User's Profile Page will display all the users who are following or is being followed by that user.

![image of Home Feed](http://res.cloudinary.com/da6jfurzj/image/upload/v1495833044/Screen_Shot_2017-05-26_at_2.08.32_PM_2_ikbubk.png)

## Future Improvements

### Infinite Scroll

To optimize page load, an infinite scroll will be implemented, which will allow users to scroll through many posts on the home feed more efficiently.

### Tags & Search

Allow users to discover new photos by implementing image Tags and a search feature to find images based on user-generated Tags. Also create location tags so users can search for images based on location and render them on a map.
