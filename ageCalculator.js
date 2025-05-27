function calculateAge() {
  // Get the input values when the button is clicked
  const day = parseInt(document.getElementById('day').value);
  const month = parseInt(document.getElementById('month').value);
  let year = parseInt(document.getElementById('year').value);

  // Validate input
  if (!day || !month || !year) {
    alert("Please enter a valid day, month, and year.");
    return;
  }

  if (year < 1900) {
    alert("Year must be 1900 or later.");
    return;
  }

  if (month < 1 && month> 12) {
    alert("Year must be 1900 or later.");
    return;
  }
  
  // Create birth date from the inputs
  const birthDate = new Date(year, month - 1, day); // month is 0-indexed
  const today = new Date();

  // Check if birthdate is in the future
  if (birthDate > today) {
    alert("Birthdate cannot be in the future.");
    return;
  }

  // Calculate the age
  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  // Adjust if days or months are negative
  if (ageDays < 0) {
    ageMonths--;
    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    ageDays += lastMonth.getDate();
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  // Display the results in the HTML
  document.getElementById("years").textContent = ageYears;
  document.getElementById("months").textContent = ageMonths;
  document.getElementById("days").textContent = ageDays;
}
