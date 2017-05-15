# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `GET /api/users/:id`
- `GET /api/users`
- `POST /api/users`
- `PATCH /api/users/:id`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Photos

- `GET /api/photos`
- `GET /api/photos/:id`
- `POST /api/photos`
- `PATCH /api/photos/:id`
- `DELETE /api/photos/:id`

### Follows

- `GET /api/users/:id/follows`
- `POST /api/users/:id/follows`
- `DELETE /api/users/:id/follows/:followId`
