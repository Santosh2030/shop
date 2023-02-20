const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const closer = document.getElementById("close");

bar.addEventListener("click", () => {
  nav.classList.add("active");
});
closer.addEventListener("click", () => {
  nav.classList.remove("active");
});
