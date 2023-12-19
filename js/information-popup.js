document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      document.getElementById("overlay").style.display = "flex";
  
      // Close the popup when the user clicks anywhere on the overlay
      // document
      //   .getElementById("overlay")
      //   .addEventListener("click", function (event) {
      //     if (event.target.id === "overlay") {
      //       closePopup();
      //     }
      //   });
  
      // Prevent the popup from closing when the user clicks inside the form
    }, 3000); // Display the popup after 3 seconds
  });
  
  document.addEventListener("click", function (event) {
    const overlay = document.getElementById("overlay");
    if (overlay.style.display === "flex" && !overlay.contains(event.target)) {
      closePopup();
    }
  });
  
  function closePopup() {
    document.getElementById("overlay").style.display = "none";
  }
  