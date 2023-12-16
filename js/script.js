const body = document.querySelector("body");
const boxes = document.querySelectorAll(".box");
const toggle = document.querySelector(".toggle");

const MODES = {
  DARK: "dark",
  LIGHT: "light",
};


document.addEventListener("DOMContentLoaded", function () {
  // Check the current mode from local storage
  const currentMode = localStorage.getItem("mode");

  let toggleState = false;

  const setDarkMode = () => {
    toggle.classList.remove("active");
    body.classList.remove("light");
    localStorage.setItem("mode", MODES["DARK"]);
  };

  const setLightMode = () => {
    toggle.classList.add("active");
    body.classList.add("light");
    localStorage.setItem("mode", MODES.LIGHT);
  };

  const setModeFromMediaQuery = () => {
    const prefersLightMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches;
    console.log(prefersLightMode);
    if (
      (currentMode && currentMode === MODES.DARK) ||
      (!currentMode && !prefersLightMode)
    ) {
      setDarkMode();
    } else {
      setLightMode();
    }
  };

  setModeFromMediaQuery();

  toggle.addEventListener("click", () => {
    toggleState = !toggleState;

    if (toggleState) {
      setDarkMode();
    } else {
      setLightMode();
    }
  });
});


//////////REFACTORED/////////////////




// const body = document.querySelector("body");
// const boxes = document.querySelectorAll(".box");
// const toggle = document.querySelector(".toggle");

// const MODES = {
//   DARK: "dark",
//   LIGHT: "light",
// };

// document.addEventListener("DOMContentLoaded", function () {
//   // Check the current mode from local storage
//   const currentMode = localStorage.getItem("mode");
//   let toggleState = false;

//   const setMode = (mode, addClass, removeClass) => {
//     toggle.classList[addClass ? "add" : "remove"]("active");
//     body.classList[addClass ? "add" : "remove"](mode);
//     localStorage.setItem("mode", mode); //remember  chosen mode
//   };

//   const setDarkMode = () => {
//     setMode(MODES.DARK, false, true);
//   };

//   const setLightMode = () => {
//     setMode(MODES.LIGHT, true, false);
//   };

//   const setModeFromMediaQuery = () => {
//     const prefersLightMode =
//       window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
//     if ((currentMode && currentMode === MODES.DARK) || (!currentMode && !prefersLightMode)) {
//       setDarkMode();
//     } else {
//       setLightMode();
//     }
//   };

//   setModeFromMediaQuery();

//   toggle.addEventListener("click", () => {
//     toggleState = !toggleState;
//     toggleState ? setDarkMode() : setLightMode();
//   });
// });




