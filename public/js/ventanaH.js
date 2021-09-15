var modalH1 = document.getElementById("myModalH1");
var modalH2 = document.getElementById("myModalH2");
var modalH3 = document.getElementById("myModalH3");
var modalH4 = document.getElementById("myModalH4");
var modalH5 = document.getElementById("myModalH5");
var modalH6 = document.getElementById("myModalH6");


var btnH1 = document.getElementById("myBtnH1");
var btnH2 = document.getElementById("myBtnH2");
var btnH3 = document.getElementById("myBtnH3");
var btnH4 = document.getElementById("myBtnH4");
var btnH5 = document.getElementById("myBtnH5");
var btnH6 = document.getElementById("myBtnH6");


var spanH1 = document.getElementsByClassName("closeH1")[0];
var spanH2 = document.getElementsByClassName("closeH2")[0];
var spanH3 = document.getElementsByClassName("closeH3")[0];
var spanH4 = document.getElementsByClassName("closeH4")[0];
var spanH5 = document.getElementsByClassName("closeH5")[0];
var spanH6 = document.getElementsByClassName("closeH6")[0];



btnH1.onclick = function() {
  modalH1.style.display = "block";
}
spanH1.onclick = function() {
  modalH1.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalH1) {
    modalH1.style.display = "none";
  }
}
  
btnH2.onclick = function() {
  modalH2.style.display = "block";
}
spanH2.onclick = function() {
  modalH2.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalH2) {
    modalH2.style.display = "none";
  }
}


btnH3.onclick = function() {
  modalH3.style.display = "block";
}
spanH3.onclick = function() {
  modalH3.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalH3) {
    modalH3.style.display = "none";
  }
}


btnH4.onclick = function() {
  modalH4.style.display = "block";
}
spanH4.onclick = function() {
  modalH4.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalH4) {
    modalH4.style.display = "none";
  }
}

btnH5.onclick = function() {
  modalH5.style.display = "block";
}
spanH5.onclick = function() {
  modalH5.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalH5) {
    modalH5.style.display = "none";
  }
}

btnH6.onclick = function() {
  modalH6.style.display = "block";
}
spanH6.onclick = function() {
  modalH6.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalH6) {
    modalH6.style.display = "none";
  }
}
