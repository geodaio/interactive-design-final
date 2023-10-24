function storeCookies (name, value){
  const myDate = new Date();
  document.cookie=name+"="+value+"; expires="+myDate.toUTCString()+"; path=/";
}
document.getElementById("sign-in").onclick = function() {
  storeCookies("loggedIn", "true");
}
document.getElementById("sign-out").onclick = function() {
  storeCookies("loggedIn", "false");
}
