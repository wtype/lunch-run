const authLink = 'https://www.strava.com/oauth/token';
const main = document.querySelector('main');

function getActivities(data) {
  const accessToken = data.access_token;
  const activitiesLink = `https://www.strava.com/api/v3/athlete/activities?access_token=${accessToken}`;

  fetch(`${activitiesLink}`)
    .then(response => response.json())
    .then(data => {
      data.forEach(activity => {
        const text = document.createElement('p');
        text.innerText = `${activity.name}—${activity.timezone}`;
        main.appendChild(text);
      });
    });
}

function updateAccessToken() {
  const client_id = prompt('Enter your client ID');
  const client_secret = prompt('Enter your client secret');
  const refresh_token = prompt('Enter your refresh token from step 4');

  const payload = JSON.stringify({
    client_id,
    client_secret,
    refresh_token,
    grant_type: 'refresh_token',
  });

  fetch(authLink, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: payload,
  })
    .then(response => response.json())
    .then(data => getActivities(data))
    .catch(error => console.log(`ERROR: `, error));
}

updateAccessToken();
