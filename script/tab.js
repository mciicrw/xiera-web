// JavaScript Document
function openGroup(evt, groupName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("group");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" template-green", "");
  }
  document.getElementById(groupName).style.display = "block";
  evt.currentTarget.className += " template-green";
}	