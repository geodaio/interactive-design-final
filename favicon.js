const favicon = document.getElementById("favicon");
const mode = window.matchMedia("(prefers-color-scheme: dark)");

 //Entry
if (window.matchMedia("(prefers-color-scheme: dark)")) {
   favicon.setAttribute("href", "favicon-dark.svg");
 }
else {
   favicon.setAttribute("href", "favicon-light.svg");
 }

console.log(mode);
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
