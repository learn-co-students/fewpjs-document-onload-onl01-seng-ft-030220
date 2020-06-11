// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
  let text_paragraph = document.getElementById("text")
  text_paragraph.innerHTML = "This is really cool!"
});

console.log(
   "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);
