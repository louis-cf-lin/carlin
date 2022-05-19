window.onscroll = () => {
  const vh = 100;
  if (document.body.scrollTop > vh || document.documentElement.scrollTop > vh) {
    document.querySelector("nav").classList.add("show");
  } else {
    document.querySelector("nav").classList.remove("show");
  }
};

document.addEventListener("DOMContentLoaded", function () {
  OverlayScrollbars(document.querySelectorAll("body"), {});
});
