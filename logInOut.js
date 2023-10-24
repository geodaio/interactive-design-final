function storeCookies (name, value){
  var myDate = new Date();
	myDate.setDate = myDate.getDate() + 31;
	document.cookie=name+"="+value+"; expires="+myDate.toUTCString()+"; path=/";
	console.log(document.cookie);
}

onload = function checkSign(){
	console.log("test");
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

document.getElementById("sign-in").onclick = function() {
	storeCookies("loggedIn", "true");
  window.location = "https://geodaio.github.io/interactive-design-final/index-login";
};
document.getElementById("log-out-header").onclick = function() {
  storeCookies("loggedIn", "false");
  window.location = "https://geodaio.github.io/interactive-design-final";
};

