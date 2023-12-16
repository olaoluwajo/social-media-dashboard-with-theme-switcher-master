const body = document.querySelector("body");
const boxes = document.querySelectorAll(".box");
const toggle = document.querySelector(".toggle");
const topText = document.querySelectorAll(".top");

toggle.addEventListener("click", () => {
  body.classList.toggle("light");
  toggle.classList.toggle("active");

  // Iterate through each box and toggle the "active" class
  boxes.forEach((box) => {
    box.classList.toggle("light");
  });

  topText.forEach((top) => {
    top.classList.toggle("light");
  });
});


// const prefersLightMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;


//   // The user prefers dark mode

//   if (prefersLightMode) {
//       body.classList.add("light"); // Add the light mode class to the body
//       toggle.classList.toggle("active"); // add an "active" class to your toggle button
//       localStorage.setItem("mode", "light"); // Optionally, store the mode preference in local storage
     
//   console.log('User prefers dark mode');
// } else {
//   // The user prefers light mode
//   console.log('User prefers light mode');
// }


