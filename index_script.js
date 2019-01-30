function verifyUser(user, pword) {
  var newUrl = window.location.pathname.replace('index.html','main.html');
  if (user == "admin" && pword == "password") {
    window.location = newUrl;
  } else {
    alert("Username or Password was incorrect.");
  }
}