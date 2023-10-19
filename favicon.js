const favicon = document.getElementByID("favicon");
const mode = window.matchMedia("(prefers-color-scheme: dark)");

mode.addEventListener("change", (event) => {
  if (event.matches) {
    favicon.setAttribute("href", "favicon-dark.svg");
  }
  else {
    favicon.setAttribute("href", "favicon-light.svg");
  }
});

