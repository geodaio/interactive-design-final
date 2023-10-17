function changeLang(id) {
  event.preventDefault();
  alert(id);
  alert(document.getElementById("lang").value);
  document.getElementById("lang").innerHTML = id;
}
