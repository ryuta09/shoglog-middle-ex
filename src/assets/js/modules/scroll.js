export function scroll() {
  window.addEventListener("scroll", function () {
    if(window.document.body.id === 'top') {
      var header = document.querySelector(".l-header");
      header.classList.toggle("scroll-nav", window.scrollY > 300);
    } else {
      var header_low = document.querySelector("#l-header_low");
      header_low.classList.toggle("scroll-nav_low", window.scrollY > 300);
    }
  });
}