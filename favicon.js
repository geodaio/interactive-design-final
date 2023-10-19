const favicon = document.getElementById("favicon");
const mode = window.matchMedia("(prefers-color-scheme: dark)");
  
console.log(favicon);
console.log(mode);
  
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


