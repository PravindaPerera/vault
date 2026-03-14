const REPO_NAME = "vault";

const isLocalhost =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1";

const basePath = isLocalhost ? "/" : `/${REPO_NAME}/`;

fetch(basePath + "footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer-placeholder").innerHTML = data;

    document.querySelectorAll("#footer-placeholder a[data-href]").forEach(link => {
      link.href = basePath + link.getAttribute("data-href");
    });
  })
  .catch(error => console.error("Error loading footer:", error));