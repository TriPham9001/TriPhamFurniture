const targetDiv = document.getElementById("third");
const btn = document.getElementById("toggle");
btn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
};


const targetDiv2 = document.getElementById("show-catergory");
const btn2 = document.getElementById("click-catergory");
btn2.onclick = function () {
  if (targetDiv2.style.display !== "none") {
    targetDiv2.style.display = "none";
  } else {
    targetDiv2.style.display = "block";
  }
};





