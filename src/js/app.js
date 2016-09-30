var lock = new Auth0Lock(
    // These properties are set in auth0-variables.js
  AUTH0_CLIENT_ID,
  AUTH0_DOMAIN,
  {
    auth: {
      // redirect: false,
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


// var lock = new Auth0Lock(
//     // These properties are set in auth0-variables.js
//     AUTH0_CLIENT_ID,
//     AUTH0_DOMAIN, {
//       auth: {
//         redirectUrl: 'chrome-extension://fnohjpikmgpgkeamlfapadjbkfmfinmd/build/login.html',
//         responseType: 'token',
//         params: {
//           scope: 'openid name identities picture',
//         },
//       }
//   }
// );
//
// // const lock = new Auth0Lock('6ElpyE9EazmBox2b9PAWytCnFJQTxBCa', 'ericsnell.auth0.com',
// // // });
//
// var userProfile;
//
// document.getElementById('btn-login').addEventListener('click', function () {
//     lock.show(function (err, profile, token) {
//         if (err) {
//             // Error callback
//             console.error("Something went wrong: ", err);
//             alert("Something went wrong, check the Console errors");
//         } else {
//             // Success calback
//
//             // Save the JWT token.
//             localStorage.setItem('userToken', token);
//
//             // Save the profile
//             userProfile = profile;
//
//             document.getElementById('login-box').style.display = 'none';
//             document.getElementById('logged-in-box').style.display = 'inline';
//
//             document.getElementById('nick').textContent = profile.nickname;
//         }
//     });
// });
//
//
// document.getElementById('btn-api').addEventListener('click', function () {
//     // Just call your API here. The header will be sent
// });
