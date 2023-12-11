function calculateCalories() {
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const activity = document.getElementById('activity').value;
    const goal = document.getElementById('goal').value;

    // Harris-Benedict Equation for BMR
    let bmr;
    if (gender === 'male') {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    // Adjust BMR based on activity level
    let tdee;
    switch (activity) {
      case 'sedentary':
        tdee = bmr * 1.2;
        break;
      case 'lightlyActive':
        tdee = bmr * 1.375;
        break;
      case 'moderatelyActive':
        tdee = bmr * 1.55;
        break;
      case 'veryActive':
        tdee = bmr * 1.725;
        break;
      case 'extraActive':
        tdee = bmr * 1.9;
        break;
      default:
        tdee = bmr;
    }

    // Adjust TDEE based on goal
    switch (goal) {
      case 'lose':
        tdee -= 500; // Calorie deficit for weight loss
        break;
      case 'gain':
        tdee += 500; // Calorie surplus for weight gain
        break;
      default:
        // Maintain weight, no adjustment needed
    }

    const resultElement = document.getElementById('calorieResult');
    resultElement.innerHTML = `<p>Your estimated daily calorie needs: ${Math.round(tdee)} calories</p>`;
  }