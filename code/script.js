// script.js

// Function to update risk status based on vulnerability count
function updateRiskStatus(vulnerabilityCount) {
    let riskLevelElement = document.getElementById("risk-level");
  
    // Set risk level based on vulnerability count
    if (vulnerabilityCount <= 5) {
      riskLevelElement.textContent = "LOW";
      riskLevelElement.className = "risk-level low box";
    } else if (vulnerabilityCount <= 10) {
      riskLevelElement.textContent = "MID";
      riskLevelElement.className = "risk-level mid box";
    } else {
      riskLevelElement.textContent = "HIGH";
      riskLevelElement.className = "risk-level high box";
    }
  }
  
  // Example vulnerability count (you can replace this with actual count)
  let vulnerabilityCount = 7;
  
  // Call the function to update risk status based on vulnerability count
  updateRiskStatus(vulnerabilityCount);
  