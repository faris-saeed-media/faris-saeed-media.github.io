const revealItems = document.querySelectorAll(".reveal");
const statNumbers = document.querySelectorAll(".stat-number");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const modal = document.querySelector(".reel-modal");
const modalClose = document.querySelector(".modal-close");
const openReelButtons = document.querySelectorAll(".open-reel");
const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");
const cursorGlow = document.querySelector(".cursor-glow");
const tiltCards = document.querySelectorAll(".tilt-card");

document.getElementById("year").textContent = new Date().getFullYear();

revealItems.forEach((item) => {
  const delay = item.dataset.delay || 0;
  item.style.setProperty("--delay", `${delay}ms`);
});

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.13 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const animateNumber = (element) => {
  const target = Number(element.dataset.target);
  const suffix = element.dataset.suffix || "";
  const decimals = Number(element.dataset.decimals || 0);
  const duration = 1300;
  const startTime = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = target * eased;

    element.textContent = `${value.toFixed(decimals)}${suffix}`;

    if (progress < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
};

const statsObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      animateNumber(entry.target);
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.65 }
);

statNumbers.forEach((number) => statsObserver.observe(number));

menuToggle?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

openReelButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modal.showModal();
    document.body.classList.add("modal-open");

    if (window.instgrm?.Embeds) {
      window.instgrm.Embeds.process();
    }
  });
});

const closeModal = () => {
  modal.close();
  document.body.classList.remove("modal-open");
};

modalClose?.addEventListener("click", closeModal);

modal?.addEventListener("click", (event) => {
  const modalBounds = modal.getBoundingClientRect();
  const clickedOutside =
    event.clientX < modalBounds.left ||
    event.clientX > modalBounds.right ||
    event.clientY < modalBounds.top ||
    event.clientY > modalBounds.bottom;

  if (clickedOutside) closeModal();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach((card) => {
      const shouldShow = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("hidden", !shouldShow);
    });
  });
});

if (window.matchMedia("(pointer: fine)").matches) {
  window.addEventListener("pointermove", (event) => {
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
    cursorGlow.style.opacity = "1";
  });

  document.body.addEventListener("pointerleave", () => {
    cursorGlow.style.opacity = "0";
  });

  tiltCards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const bounds = card.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;

      card.style.transform =
        `perspective(1000px) rotateX(${y * -5}deg) rotateY(${x * 6}deg) translateY(-3px)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}
