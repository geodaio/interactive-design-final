const favicon = document.getElementById("favicon");
const mode = window.matchMedia("(prefers-color-scheme: dark)");
  
console.log(favicon);
console.log(mode);

//Entry
if (window.matchMedia("(prefers-color-scheme: dark)")) {
   favicon.setAttribute("href", "favicon-dark.svg");
 }
 else if (window.matchMedia("(prefers-color-scheme: light)")) {
   favicon.setAttribute("href", "favicon-light.svg");
 }

console.log(mode);
//Event listener for changes
mode.addEventListener("change", (event) => {
  if (event.matches) {
    favicon.setAttribute("href", "favicon-dark.io");
    console.log("darkmode");
  }
  else {
    favicon.setAttribute("href", "favicon-light.io");
    console.log("lightmode");
  }
});
