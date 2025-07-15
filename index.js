const submitBtn = document.querySelector(".submit-btn");
const restBtn = document.querySelector(".reset-btn");

submitBtn.addEventListener("click", () => {
  const heightInput = document.querySelector(".height").value.trim();
  const weightInput = document.querySelector(".weight").value.trim();

  const existingMsg = document.querySelector(".error-msg");

  if (existingMsg) return;

  if (!heightInput || !weightInput) {
    const header = document.querySelector(".header");
    const result = document.createElement("p");
    result.textContent = "No Input";
    result.style.marginTop = "20px";
    result.classList.add("error-msg");
    header.appendChild(result);
  }

  const finalMsg = document.querySelector(".finalMsg");
  if (finalMsg) return;

  const height = Number(heightInput);
  const weight = Number(weightInput);
  const finalBmi = (weight / (height * height)).toFixed(2);
  const finalResult = document.querySelector(".header");
  const para = document.createElement("p");
  para.textContent = `Your BMI is: ${finalBmi}`;
  para.style.marginTop = "20px";
  para.classList.add("finalMsg");
  finalResult.appendChild(para);
});

restBtn.addEventListener("click", () => {
  location.reload();
});
