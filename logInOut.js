function storeCookies (name, value){
  const myDate = new Date();
  document.cookie=name+"="+value+"; expires="+myDate.toUTCString()+"; path=/";
}

document.getElementById("sign-in").onclick = function() {
	storeCookies("loggedIn", "true");
  window.location = "https://geodaio.github.io/interactive-design-final/index-login";
};
document.getElementById("sign-out").onclick = function() {
  storeCookies("loggedIn", "false");
  window.location = "https://geodaio.github.io/interactive-design-final";
};

onload = function checkSign(){
  var allCookies = document.cookie;

  var splitCookies = allCookies.split(";");

  for (var c = 0; c<splitCookies.length; c++){
    var cleanCookie = splitCookies[c].trim();
    var cleanerCookie = cleanCookie.split("=");
    if (cleanerCookie.equalsIgnoreCase("true")) {
        window.location = "https://geodaio.github.io/interactive-design-final/index-login";
    }
  }
};
