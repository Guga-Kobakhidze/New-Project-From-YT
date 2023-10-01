// Schedule tabs //

function scheduleTabs() {
  const tabs = document.querySelectorAll(".js-schedule-tab");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      if (tab.classList.contains("active")) {
        return;
      }
      document
        .querySelector(".js-schedule-tab.active")
        .classList.remove("active");
      tab.classList.add("active");
      const target = tab.getAttribute("data-target");
      document
        .querySelectorAll(".js-schedule-table.active")
        .forEach((table) => {
          table.classList.remove("active");
        });
      document.querySelector(target).classList.add("active");
    });
  });
}

scheduleTabs();

// Header menu //

function headerMenu() {
  const toggler = document.querySelector(".js-header-toggler");
  const menu = document.querySelector(".js-header-menu");
  const items = menu.querySelectorAll("li");

  const menuToggle = () => {
    menu.classList.toggle("open");
    toggler.classList.toggle("active");
  };
  toggler.addEventListener("click", menuToggle);

  items.forEach((item) => {
    item.querySelector("a").addEventListener("click", () => {
      if (window.innerWidth <= 991) {
        menuToggle();
      }
    });
  });
}

headerMenu();
