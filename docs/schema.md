# Schema Information

## Users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
bio             | text      |
cover_url       | string    |
profile_url     | string    |
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## Photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
url         | string    | not null
title       | string    | not null
description | text      |
user_id     | integer   | not null, foreign key (references users), indexed


## Follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references users), indexed
followee_id | integer   | not null, foreign key (references users), indexed
