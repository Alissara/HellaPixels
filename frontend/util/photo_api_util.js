export const fetchPhotos = data => (
  $.ajax({
    method: 'GET',
    url: 'api/photos',
    data
  })
);

export const fetchPhoto = id => (
  $.ajax({
    method: 'GET',
    url: `api/photos/${id}`,
  })
);

export const createPhoto = data => (
  $.ajax({
    method: 'POST',
    url: 'api/photos',
    data
  })
);

export const updatePhoto = data => (
  $.ajax({
    method: 'PATCH',
    url: `api/photos/${data.id}`,
    data
  })
);

export const deletePhoto = data => (
  $.ajax({
    method: 'DELETE',
    url: `api/photos/${data.id}`
  })
);
