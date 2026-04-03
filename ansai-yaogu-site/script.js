const form = document.getElementById("booking-form");
const tip = document.getElementById("form-tip");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  tip.textContent = "感谢您的预约提交！我们会在 1-2 个工作日内与您联系。";
  form.reset();
});
