document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector("main");

  content.animate(
    [
      {
        opacity: 0,
        transform: "translateY(30px)"
      },
      {
        opacity: 1,
        transform: "translateY(0)"
      }
    ],
    {
      duration: 900,
      easing: "ease-out",
      fill: "forwards"
    }
  );
});
