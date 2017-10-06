var btn = document.querySelector("button");
btn.addEventListener("click", function(){
  document.querySelector("body").classList.toggle("body-color");
  console.log("event was triggered");
});
