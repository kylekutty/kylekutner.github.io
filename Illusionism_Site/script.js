


function navOpen() {
  var element = document.getElementById("burger");
  
  var x = document.getElementById("nav");

  element.classList.toggle("is-active");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

