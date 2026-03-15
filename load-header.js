(() => {

const REPO_NAME = "vault";

const isLocalhost =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1";

const basePath = isLocalhost ? "/" : `/${REPO_NAME}/`;

fetch(basePath + "header.html")
  .then(response => response.text())
  .then(data => {
    const header = document.getElementById("header-placeholder");
    header.innerHTML = data;

    header.querySelectorAll("a[data-href]").forEach(link => {
      link.href = basePath + link.getAttribute("data-href");
    });
  })
  .catch(error => console.error("Error loading header:", error));

})();