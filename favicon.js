const favicon = document.getElementByID("favicon");
if window.matchMedia("(prefers-color-scheme: dark)") {
  favicon.setAttribute("href", "favicon-dark.svg");
}
else if window.matchMedia("(prefers-color-scheme: light)") {
  favicon.setAttribute("href", "favicon-light.svg");
}
