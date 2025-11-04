
const menuBar = document.querySelector(".menubare");
const icon = document.querySelector("#bars");


// Mobile menu open/close
icon.onclick = function () {
  menuBar.classList.toggle("open");

  if (menuBar.classList.contains("open")) {
    // menuBar.style.display = "flex";
    icon.classList.add("fa-xmark");
    icon.classList.remove("fa-bars");

  } else {
    // menuBar.style.display = "none";
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-xmark");
  }
};

document.querySelectorAll('.menubare li').forEach(item => {
  item.addEventListener('click', () => {
    menuBar.classList.remove('open');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-xmark');
  });
});

const sections = document.querySelectorAll('#fade');
window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add('show');
    }
  });
});
