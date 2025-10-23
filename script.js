document.getElementById("convertBtn").addEventListener("click", function() {
  const input = parseFloat(document.getElementById("inputValue").value);

  if (isNaN(input)) {
    alert("Please enter a valid number!");
    return;
  }

  // Conversion logic
  const kgToLb = (input * 2.20462).toFixed(3);
  const lbToKg = (input / 2.20462).toFixed(3);

  const mToFt = (input * 3.28084).toFixed(3);
  const ftToM = (input / 3.28084).toFixed(3);

  const lToGal = (input * 0.264172).toFixed(3);
  const galToL = (input / 0.264172).toFixed(3);

  // Display results
  document.getElementById("massResult").textContent =
    `${input} kilograms = ${kgToLb} pounds | ${input} pounds = ${lbToKg} kilograms`;

  document.getElementById("lengthResult").textContent =
    `${input} meters = ${mToFt} feet | ${input} feet = ${ftToM} meters`;

  document.getElementById("volumeResult").textContent =
    `${input} liters = ${lToGal} gallons | ${input} gallons = ${galToL} liters`;
});



