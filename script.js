document.querySelectorAll(".faq-item").forEach((item) => {
  const q = item.querySelector(".faq-q");
  q.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");
    document.querySelectorAll(".faq-item.open").forEach((open) => {
      if (open !== item) open.classList.remove("open");
    });
    item.classList.toggle("open", !isOpen);
  });
});
