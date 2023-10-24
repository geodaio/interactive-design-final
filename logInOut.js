function storeCookies(name, value){
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
	console.log(cleanerCookie);
    if (cleanerCookie == "true") {
        window.location.assign("https://geodaio.github.io/interactive-design-final/index-login");
	console.log("loggedin2");
    }
  }
};
function signIn() {
	window.location.assign("https://geodaio.github.io/interactive-design-final/index-login");
	document.onload = storeCookies("loggedIn", "true");
	console.log(document.cookie);
}
function signOut() {
	window.location.assign("https://geodaio.github.io/interactive-design-final");
	document.onload = storeCookies("loggedIn", "false");
	console.log(document.cookie);
}

function toLogin() {
	window.location.assign("https://geodaio.github.io/interactive-design-final/login");
	console.log("1");
}

function backToHome() {
	window.location.assign("https://geodaio.github.io/interactive-design-final");
	console.log("2");
}
