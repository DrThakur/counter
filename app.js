//Set initial count
let count = 0;

//select value and buttons
const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

// console.log(buttons);
buttons.forEach(function (button) {
  //   console.log(button);
  button.addEventListener("click", function (event) {
    const myClass = event.currentTarget.classList;
    if (myClass.contains("decrease")) {
      count--;
    } else if (myClass.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }
    value.textContent = count;
  });
});
