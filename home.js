function changeLang() {
  var newId = document.getElementById(this).value;
  console.log(newId);
  document.getElementById("lang").innerHTML = newId;
}
