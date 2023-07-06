document.querySelectorAll(".story_btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("change");
    btn.nextElementSibling.classList.toggle("change");
  });
});
