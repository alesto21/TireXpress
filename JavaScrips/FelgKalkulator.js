document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("rim-calculator");
  var resultMessage = document.getElementById("resultMessage");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Retrieve input values
    var oldWidth = parseFloat(document.getElementById("oldWidth").value);
    var oldOffset = parseInt(document.getElementById("oldOffset").value);
    var newWidth = parseFloat(document.getElementById("newWidth").value);
    var newOffset = parseInt(document.getElementById("newOffset").value);

    // Convert inches to mm
    var oldWidthMm = oldWidth * 25.4;
    var newWidthMm = newWidth * 25.4;

    // Calculate changes
    var innerRimChange =
      oldWidthMm / 2 + oldOffset - (newWidthMm / 2 + newOffset);
    var outerRimChange =
      newWidthMm / 2 - newOffset - (oldWidthMm / 2 - oldOffset);
    var offsetChange = newOffset - oldOffset;
    var trackWidthChange = 2 * (newOffset - oldOffset);

    // Update the result elements
    document.getElementById("innerRimChange").innerText =
      innerRimChange.toFixed(2) + " mm";
    document.getElementById("outerRimChange").innerText =
      outerRimChange.toFixed(2) + " mm";
    document.getElementById("offsetChange").innerText = offsetChange + " mm";
    document.getElementById("trackWidthChange").innerText =
      trackWidthChange + " mm";

    // Show the result message
    resultMessage.style.display = "block";
  });
});
