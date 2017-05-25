@photos.each do |photo|
  json.set! photo.id do
    json.partial! "api/photos/photo", photo: photo
    json.username photo.user.username
    json.profile_url photo.user.profile_url
  end
end
