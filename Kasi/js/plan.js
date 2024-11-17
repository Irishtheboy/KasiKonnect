// Update the selected plan display
function selectPlan(plan) {
    const currentPlanDisplay = document.getElementById('current-plan');
    currentPlanDisplay.textContent = plan;

    // Alert the user about their selection
    alert(`You have selected the R{plan} Plan!`);
}
