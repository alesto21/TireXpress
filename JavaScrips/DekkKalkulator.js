function calculateCircumference(width, aspectRatio, diameter) {
  var widthMeters = width / 1000;
  var sidewallHeight = widthMeters * (aspectRatio / 100);
  var totalDiameter = sidewallHeight * 2 + (diameter * 2.54) / 100;
  var circumference = totalDiameter * Math.PI;
  return {
    circumference: circumference * 100,
    totalDiameter: totalDiameter * 100,
  };
}

function calculate() {
  var originalWidth = parseInt(document.getElementById("original-width").value);
  var originalAspectRatio = parseInt(
    document.getElementById("original-aspect-ratio").value
  );
  var originalDiameter = parseInt(
    document.getElementById("original-diameter").value
  );
  var newWidth = parseInt(document.getElementById("new-width").value);
  var newAspectRatio = parseInt(
    document.getElementById("new-aspect-ratio").value
  );
  var newDiameter = parseInt(document.getElementById("new-diameter").value);

  var originalValues = calculateCircumference(
    originalWidth,
    originalAspectRatio,
    originalDiameter
  );
  var newValues = calculateCircumference(newWidth, newAspectRatio, newDiameter);

  document.getElementById("calc-original-circumference").innerText =
    originalValues.circumference.toFixed(2) + " cm";
  document.getElementById("calc-original-total-diameter").innerText =
    originalValues.totalDiameter.toFixed(2) + " cm";
  document.getElementById("calc-new-circumference").innerText =
    newValues.circumference.toFixed(2) + " cm";
  document.getElementById("calc-new-total-diameter").innerText =
    newValues.totalDiameter.toFixed(2) + " cm";

  var circumferenceDifference =
    newValues.circumference - originalValues.circumference;
  var diameterDifference =
    newValues.totalDiameter - originalValues.totalDiameter;

  var percentageCircumferenceDifference =
    (circumferenceDifference / originalValues.circumference) * 100;
  var percentageDiameterDifference =
    (diameterDifference / originalValues.totalDiameter) * 100;
  var speedDeviationAt80 =
    (80 * diameterDifference) / originalValues.totalDiameter;

  document.getElementById("calc-circumference-difference").innerText =
    circumferenceDifference.toFixed(2) +
    " cm (" +
    percentageCircumferenceDifference.toFixed(2) +
    "%)";
  document.getElementById("calc-diameter-difference").innerText =
    diameterDifference.toFixed(2) +
    " cm (" +
    percentageDiameterDifference.toFixed(2) +
    "%)";
  document.getElementById("calc-speed-deviation").innerText =
    speedDeviationAt80.toFixed(2) + " km/t ved 80 km/t";
}
