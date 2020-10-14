# Strava API

## Background

Here is a "quick" way to fetch your activities by interacting with Strava API from localhost.

## Fetching Activities

1. Visit `https://www.strava.com/settings/api` and create an application for yourself.

2. Then take your _client ID_ from your newly created app and drop it into the URL below.

`https://www.strava.com/oauth/authorize?client_id=CLIENT_ID&redirect_uri=http://localhost&response_type=code&scope=activity:read_all`

3. It will look like this page failed to load, but check the URL—there will be a `code=CODE`. Copy this value and use it in the next step.

4. Use the authorization _code_ to get both an _access token_ and _refresh token_:

`https://www.strava.com/oauth/token?client_id=CLIENT_ID&client_secret=CLIENT_SECRET&code=CODE&grant_type=authorization_code`

5. View your activities using the _access token_ you just received:

`https://www.strava.com/api/v3/athlete/activities?access_token=ACCESS_TOKEN`

See reference.js for the next steps to regenerate a valid (non-expired) access token.
