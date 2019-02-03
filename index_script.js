function verifyUser(user, pword) {
  var newUrl = window.location.pathname.replace('recipes/','recipes/main');
  if (user == "admin" && pword == "password") {
    window.location = newUrl;
  } else {
    alert("Username or Password was incorrect.");
  }
}
