const form = document.getElementById("booking-form");
const tip = document.getElementById("form-tip");
const menuBtn = document.getElementById("menu-btn");
const menuList = document.getElementById("menu-list");

menuBtn?.addEventListener("click", () => {
  const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";
  menuBtn.setAttribute("aria-expanded", String(!isExpanded));
  menuList?.classList.toggle("open", !isExpanded);
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = form.elements.namedItem("name")?.value?.trim() || "";
  const email = form.elements.namedItem("email")?.value?.trim() || "";

  if (name.length < 2) {
    tip.textContent = "请输入至少 2 个字符的联系人姓名。";
    tip.className = "form-tip error";
    return;
  }

  if (!email.includes("@") || email.startsWith("@") || email.endsWith("@")) {
    tip.textContent = "请输入有效的邮箱地址。";
    tip.className = "form-tip error";
    return;
  }

  tip.textContent = "提交成功！我们将在 1-2 个工作日内与您联系。";
  tip.className = "form-tip success";
  form.reset();
});
