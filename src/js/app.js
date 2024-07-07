
("use strict");

//======================= MENU and NAVIGATION ==========================
const numberOfPage = "40";
function clickButton(button) {
  if (button.classList.contains("_active")) {
    return button;
  }
  if (button.classList.contains("menu__item") ) {
    let menuItemsActive = document.querySelectorAll(".menu__item._active");
    if (menuItemsActive.length > 0) {
      menuItemsActive.forEach(menuItemActive => {
          menuItemActive.classList.remove("_active");
      });
    }
    button.classList.add("_active");
  }
  if (button.classList.contains("navigation__link")) {
    let navigationLinksActive = document.querySelectorAll(".navigation__link._active");
    if (navigationLinksActive.length > 0) {
      navigationLinksActive.forEach(navigationLinkActive => {
        navigationLinkActive.classList.remove("_active");
      });
    }
    button.classList.add("_active")
  }
  if (button.classList.contains("_button-next")) {
    let navigationLinksActive = document.querySelectorAll(".navigation__link._active");
    if (navigationLinksActive.length > 0) {
      navigationLinksActive.forEach(navigationLinkActive => {
        if (navigationLinkActive.nextElementSibling.classList.contains("navigation__link")) {
          navigationLinkActive.nextElementSibling.classList.add("_active");
          navigationLinkActive.classList.remove("_active");
        } else {
          let buttonsContent = document.querySelectorAll("._el-link");
          increaseButtonContent(buttonsContent);
        }
      });
    }
  }
  if (button.classList.contains("_button-prev")) {
    let navigationLinksActive = document.querySelectorAll(".navigation__link._active");
    if (navigationLinksActive.length > 0) {
      navigationLinksActive.forEach(navigationLinkActive => {
        if (navigationLinkActive.previousElementSibling.classList.contains("navigation__link")) {
          navigationLinkActive.previousElementSibling.classList.add("_active");
          navigationLinkActive.classList.remove("_active");
        } else {
          let buttonsContent = document.querySelectorAll("._el-link");
          reduceButtonContent(buttonsContent);
        }
      });
    }
  }
}

function reduceButtonContent(el) {
  const firstEl = el[0].innerHTML;
  if (firstEl === "1") {
    return;
  } else if (firstEl !== " 1") {
    for (let i = 0; i < 4; i++) {
      const buttonContent = el[i];
      const content = buttonContent.innerHTML;
      let num = Number(content);
      num--;
      buttonContent.innerHTML = num;
    }
  }

};
function increaseButtonContent(el) {
  const lastEl = el[3].innerHTML;
  if (lastEl === numberOfPage) {
    return;
  } else if (lastEl !== numberOfPage) {
    for (let i = 0; i < 4; i++) {
      const buttonContent = el[i];
      const content = buttonContent.innerHTML;
      let num = Number(content);
      num++;
      buttonContent.innerHTML = num;
    }
  }

};


const menuItems = document.querySelectorAll(".menu__item");
menuItems.forEach(menuItem => {
  menuItem.addEventListener("click", () => {
    clickButton(menuItem);
  })
});
const navigationLinks = document.querySelectorAll(".navigation__link");
navigationLinks.forEach(navigationLink => {
  navigationLink.addEventListener("click", () => {
    clickButton(navigationLink);
  })
})
//===================== navigation next/prew ==================
const navButtons = document.querySelectorAll(".navigation__arrow");
navButtons.forEach(navButton => {
  navButton.addEventListener("click", () => {
    clickButton(navButton);
  })
})
//==============================================================
