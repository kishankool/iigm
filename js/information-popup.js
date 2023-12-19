document.addEventListener("DOMContentLoaded", function () {
  // Check if the user has accepted cookies before
  if (!localStorage.getItem("cookiesAccepted")) {
    // Show the cookie dialog if not accepted
    showCookieDialog();
  }

  // Add click event listener to the "Accept Cookies" button
  document
    .getElementById("acceptCookiesBtn")
    .addEventListener("click", function () {
      // Hide the cookie dialog
      hideCookieDialog();

      // Set a flag in localStorage to remember that the user has accepted cookies
      localStorage.setItem("cookiesAccepted", true);
    });
});

function showCookieDialog() {
  document.getElementById("cookieDialog").style.display = "block";
}

function hideCookieDialog() {
  document.getElementById("cookieDialog").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("overlay").style.display = "flex";
  }, 3000); // Display the popup after 3 seconds
});

document.getElementById("overlay").addEventListener("click", function (event) {
  const popup = document.getElementById("popup");
  // Check if the click target is not the overlay or its descendants
  if (!popup.contains(event.target)) {
    closePopup();
  }
});

function closePopup() {
  document.getElementById("overlay").style.display = "none";
}
