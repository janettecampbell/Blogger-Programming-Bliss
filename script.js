"use strict";

// ============= Declaration of elements =================
const searchIcon = document.querySelector(".search-icon");
const searchContainer = document.querySelector(".search-container");
const postLabels = document.querySelector(".post-labels");

const itagArray = document.querySelectorAll(".itag");

const statusMsgBody = document.querySelector(".status-msg-body b");

const navIcon = document.querySelector(".nav-icon");
const navBtnContent = document.querySelector(".nav-btn-content");
const navBtnContentLiA = document.querySelector(".nav-btn-content li a");
const visible = document.querySelector(".visible");
const hidden = document.querySelector(".hidden");

const menuListSecond = document.querySelector(".menu-list-second");
const topicsExpand = document.querySelector(".topics-expand");

const arrowLeft = document.querySelector(".arrow-left");

// =====================================================
// ============== Show Search Bar ======================
// =====================================================

const showSearchBar = () => {
  searchContainer.classList.toggle("visible");
};

searchIcon.addEventListener("click", showSearchBar);

// =====================================================
// ============== Change CPP to C++ ====================
// =====================================================

const changeCPPPopularPosts = () => {
  if (postLabels.innerHTML === "CPP") {
    postLabels.innerHTML = "C++";
  }
};

addEventListener("load", changeCPPPopularPosts);

const changeCPPRecentPosts = () => {
  console.log("itagArray: " + itagArray);

  for (let i = 0; i < itagArray.length; ++i) {
    const itagListArray = itagArray[i].innerHTML.split(", ");

    console.log("itagListArray: " + itagListArray);

    let newItagArray = [];

    for (let j = 0; j < itagListArray.length; ++j) {
      if (itagListArray[j] === "CPP") {
        newItagArray.push("C++");
      } else {
        newItagArray.push(itagListArray[j]);
      }
    }

    console.log("newItagArray: " + newItagArray);

    itagArray[i].innerHTML = newItagArray.join(", ");
  }
};

addEventListener("load", changeCPPRecentPosts);

const changeCPPLabelSearch = () => {
  if (statusMsgBody.innerHTML === "CPP") {
    statusMsgBody.innerHTML = "C++";
  }
};

addEventListener("load", changeCPPLabelSearch);

// =====================================================
// ============== Show menu on click ===================
// =====================================================

// ================ Switch from visible to not visible menu click ===================
const menuClick = (e) => {
  e.preventDefault();
  if (navBtnContent.classList.contains("hidden")) {
    navBtnContent.classList.remove("hidden");
    navBtnContent.classList.add("visible");
    navIcon.classList.add("open");
  } else {
    navBtnContent.classList.remove("visible");
    navBtnContent.classList.add("hidden");
    navIcon.classList.remove("open");
  }
};

navIcon.addEventListener("click", menuClick);

// ================ Switch from visible to not visible on link click ===============
const notVisible = () => {
  navBtnContent.classList.remove("visible");
  navBtnContent.classList.add("hidden");
};

const linkClick = () => {
  notVisible();
  navIcon.classList.remove("open");
};

// ==================== Switch from visible to not visible on click anywhere =======================
const anywhereClick = (e) => {
  if (!navBtnContentLiA.contains(e.target) && !navIcon.contains(e.target)) {
    notVisible();
    navIcon.classList.remove("open");
  }
};

window.addEventListener("click", anywhereClick);

// =====================================================
// ============== Show mobile submenu on click =========
// =====================================================

// ================ Switch from visible to not visible submenu click ===================
const menuListSecondClick = (e) => {
  e.preventDefault();

  console.log(menuListSecond.classList);
  if (menuListSecond.classList.contains("hidden")) {
    menuListSecond.classList.remove("hidden");
  } else {
    menuListSecond.classList.add("hidden");
  }
};

topicsExpand.addEventListener("click", menuListSecondClick);

const menuListSecondHideClick = (e) => {
  e.preventDefault();

  if (!menuListSecond.classList.contains("hidden")) {
    menuListSecond.classList.add("hidden");
  } else {
    menuListSecond.classList.remove("hidden");
  }
};

arrowLeft.addEventListener("click", menuListSecondHideClick);
