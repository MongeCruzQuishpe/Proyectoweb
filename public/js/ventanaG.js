var modalG1 = document.getElementById("myModalG1");
var modalG2 = document.getElementById("myModalG2");
var modalG3 = document.getElementById("myModalG3");
var modalG4 = document.getElementById("myModalG4");
var modalG5 = document.getElementById("myModalG5");
var modalG6 = document.getElementById("myModalG6");

var btnG1 = document.getElementById("myBtnG1");
var btnG2 = document.getElementById("myBtnG2");
var btnG3 = document.getElementById("myBtnG3");
var btnG4 = document.getElementById("myBtnG4");
var btnG5 = document.getElementById("myBtnG5");
var btnG6 = document.getElementById("myBtnG6");


var spanG1 = document.getElementsByClassName("closeG1")[0];
var spanG2 = document.getElementsByClassName("closeG2")[0];
var spanG3 = document.getElementsByClassName("closeG3")[0];
var spanG4 = document.getElementsByClassName("closeG4")[0];
var spanG5 = document.getElementsByClassName("closeG5")[0];
var spanG6 = document.getElementsByClassName("closeG6")[0];



btnG1.onclick = function() {
  modalG1.style.display = "block";
}
spanG1.onclick = function() {
  modalG1.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalG1) {
    modalG1.style.display = "none";
  }
}
  
btnG2.onclick = function() {
  modalG2.style.display = "block";
}
spanG2.onclick = function() {
  modalG2.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalG2) {
    modalG2.style.display = "none";
  }
}


btnG3.onclick = function() {
  modalG3.style.display = "block";
}
spanG3.onclick = function() {
  modalG3.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalG3) {
    modalG3.style.display = "none";
  }
}

btnG4.onclick = function() {
  modalG4.style.display = "block";
}
spanG4.onclick = function() {
  modalG4.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalG4) {
    modalG4.style.display = "none";
  }
}

btnG5.onclick = function() {
  modalG5.style.display = "block";
}
spanG5.onclick = function() {
  modalG5.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalG5) {
    modalG5.style.display = "none";
  }
}

btnG6.onclick = function() {
  modalG6.style.display = "block";
}
spanG6.onclick = function() {
  modalG6.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalG6) {
    modalG6.style.display = "none";
  }
}