var typed = new Typed(".text", {
  strings: ["Frontend Developer", "YouTube", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

const menuBar = document.querySelector(".fa-bars");

menuBar.addEventListener("click", () => {
  const menu = document.querySelector(".navbar");
  menu.classList.toggle("show-menu");
});
