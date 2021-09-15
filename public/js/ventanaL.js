var modalL1 = document.getElementById("myModalL1");
var modalL2 = document.getElementById("myModalL2");
var modalL3 = document.getElementById("myModalL3");
var modalL4 = document.getElementById("myModalL4");
var modalL5 = document.getElementById("myModalL5");
var modalL6 = document.getElementById("myModalL6");

var btnL1 = document.getElementById("myBtnL1");
var btnL2 = document.getElementById("myBtnL2");
var btnL3 = document.getElementById("myBtnL3");
var btnL4 = document.getElementById("myBtnL4");
var btnL5 = document.getElementById("myBtnL5");
var btnL6 = document.getElementById("myBtnL6");


var spanL1 = document.getElementsByClassName("closeL1")[0];
var spanL2 = document.getElementsByClassName("closeL2")[0];
var spanL3 = document.getElementsByClassName("closeL3")[0];
var spanL4 = document.getElementsByClassName("closeL4")[0];
var spanL5 = document.getElementsByClassName("closeL5")[0];
var spanL6 = document.getElementsByClassName("closeL6")[0];



btnL1.onclick = function() {
  modalL1.style.display = "block";
}
spanL1.onclick = function() {
  modalL1.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalL1) {
    modalL1.style.display = "none";
  }
}
  
btnL2.onclick = function() {
  modalL2.style.display = "block";
}
spanL2.onclick = function() {
  modalL2.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalL2) {
    modalL2.style.display = "none";
  }
}


btnL3.onclick = function() {
  modalL3.style.display = "block";
}
spanL3.onclick = function() {
  modalL3.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalL3) {
    modalL3.style.display = "none";
  }
}

btnL4.onclick = function() {
  modalL4.style.display = "block";
}
spanL4.onclick = function() {
  modalL4.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalL4) {
    modalL4.style.display = "none";
  }
}


btnL5.onclick = function() {
  modalL5.style.display = "block";
}
spanL5.onclick = function() {
  modalL5.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalL5) {
    modalL5.style.display = "none";
  }
}


btnL6.onclick = function() {
  modalL6.style.display = "block";
}
spanL6.onclick = function() {
  modalL6.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalL6) {
    modalL6.style.display = "none";
  }
}
