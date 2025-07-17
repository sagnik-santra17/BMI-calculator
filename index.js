//submit btn and reset btn:
const submitBtn = document.querySelector(".submit-btn");
const resetBtn = document.querySelector(".reset-btn");

//radio btns:
const feetBtn = document.querySelector("#feet");
const cmBtn = document.querySelector("#cm");
const meterBtn = document.querySelector("#meter");

//setecting the height input field:
const heightInputField = document.querySelector(".height");

//setecting the weight input field:
const weightInputField = document.querySelector(".weight");

//selecting the inches input field:
const inchesInputField = document.querySelector(".inches");

//selecting the final-msg input field:
const finalText = document.querySelector(".final-msg");

//selecting the error-msg input field:
const errorText = document.querySelector(".error-msg");

//function to clear the values:
const clearValue = function () {
  heightInputField.value = "";
  weightInputField.value = "";
  inchesInputField.value = "";
  errorText.style.display = "none";
  finalText.style.display = "none";
};

//when clicked on meterBtn
meterBtn.addEventListener("click", () => {
  heightInputField.placeholder = "Enter your height in Meters";
  inchesInputField.style.display = "none";
  clearValue();
});

//when clicked on cmBtn:
cmBtn.addEventListener("click", () => {
  heightInputField.placeholder = "Enter your height in CM";
  inchesInputField.style.display = "none";
  clearValue();
});

//when clicked on feetBtn:
feetBtn.addEventListener("click", () => {
  heightInputField.placeholder = "Enter your height in Feet";
  inchesInputField.style.display = "block";
  clearValue();
});

submitBtn.addEventListener("click", () => {
  const heightInput = document.querySelector(".height").value.trim();
  const weightInput = document.querySelector(".weight").value.trim();
  const inchesInput = document.querySelector(".inches").value.trim();

  const existingMsg = document.querySelector(".error-msg");
  const finalMsg = document.querySelector(".final-msg");

  const height = Number(heightInput);
  const weight = Number(weightInput);
  const inches = Number(inchesInput);

  //formula for BMI (meter):
  const bmiMeter = weight / (height * height);

  //formula for BMI (meter):
  const bmiCm = weight / ((height / 100) * (height / 100));

  //formula for BMI (meter):
  const totatInches = height * 12 + inches;
  const heightInMeters = totatInches * 0.0254;
  const bmiFeet = weight / (heightInMeters * heightInMeters);

  //no input condition:
  if (!heightInput || !weightInput) {
    existingMsg.style.display = "block";
    existingMsg;
    return;
  }

  if (isNaN(height) || isNaN(weight)) {
    finalMsg.style.display = "block";
    finalMsg.textContent = `Please click "Reset" and enter valid inputs`;
    return;
  }

  if (meterBtn.checked) {
    finalMsg.style.display = "block";
    finalMsg.textContent = `Your BMI is ${bmiMeter.toFixed(2)}`;
  }

  if (cmBtn.checked) {
    finalMsg.style.display = "block";
    finalMsg.textContent = `Your BMI is ${bmiCm.toFixed(2)}`;
  }

  if (feetBtn.checked) {
    finalMsg.style.display = "block";
    finalMsg.textContent = `Your BMI is ${bmiFeet.toFixed(2)}`;
  }
});

//Reloads the page
resetBtn.addEventListener("click", () => {
  location.reload();
});
