# Lunch Run: Accessing the Strava API From Localhost

## Background

A "quick" way to fetch your activities by interacting with Strava API from localhost.

[Swagger UI Playground](https://developers.strava.com/playground/)

## Fetching Activities 🚲 

1. Visit `https://www.strava.com/settings/api` and create an application.

2. Take your **client ID** from your newly created app and drop it into the URL below.

```
https://www.strava.com/oauth/authorize?client_id=CLIENT_ID&redirect_uri=http://localhost&response_type=code&scope=activity:read_all
```

3. It will look like this page failed to load, but check the URL—there will be a `code=CODE`. Copy this _CODE_ value and use it in the next step.

4. Use the authorization **code** to make a POST request to this URL and get both an **access token** and **refresh token**:

```
https://www.strava.com/oauth/token?client_id=CLIENT_ID&client_secret=CLIENT_SECRET&code=CODE&grant_type=authorization_code
```

5. View your activities by making a GET request with the **access token** you just received:

```
https://www.strava.com/api/v3/athlete/activities?access_token=ACCESS_TOKEN
```

See reference.js for the next steps to regenerate a valid (non-expired) access token.

Spin up Lunch Run on localhost and get a taste for adding the information into the front-end.
