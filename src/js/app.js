var lock = new Auth0Lock(
    // These properties are set in auth0-variables.js
  AUTH0_CLIENT_ID,
  AUTH0_DOMAIN,
  {
    auth: {
      responseType: 'token',
      params: {
        scope: 'openid name identities picture',
      },
    },
  }
);

var userProfile;

lock.on('authenticated', function(authResult) {
  // Use the token in authResult to getProfile() and save it to localStorage
  lock.getProfile(authResult.idToken, function(error, profile) {
    if (error) {
      // Handle error
      return;
    }

    localStorage.setItem('idToken', authResult.idToken);
    localStorage.setItem('profile', JSON.stringify(profile));
  });
});

document.getElementById('btn-login').addEventListener('click', function () {
    lock.show();
});


document.getElementById('btn-api').addEventListener('click', function () {
    // Just call your API here. The header will be sent
});
