const favicon = document.getElementById("favicon");
const mode = localStorage.getItem("theme");
  
console.log(favicon);
console.log(mode);

//Entry
if (localStorage.getItem("theme") == "dark") {
  favicon.setAttribute("href", "favicon-dark.svg");
}
else {
  favicon.setAttribute("href", "favicon-light.svg");
}

console.log(favicon);
//Event listener for changes
mode.addEventListener("change", (event) => {
  if (event.matches) {
    favicon.setAttribute("href", "favicon-dark.svg");
    console.log("darkmode");
  }
  else {
    favicon.setAttribute("href", "favicon-light.svg");
    console.log("lightmode");
  }
});
