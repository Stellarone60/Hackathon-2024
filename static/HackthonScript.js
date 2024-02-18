// Retrieve saved list items from localStorage on page load
document.addEventListener('DOMContentLoaded', function() {
  var savedList = localStorage.getItem('myToDoList');
  if (savedList) {
    document.getElementById('myUL').innerHTML = savedList;
    addCloseButtonListeners(); // Re-attach event listeners to close buttons
  }
});

// Click on a close button to hide the current list item
function addCloseButtonListeners() {
  var closeButtons = document.getElementsByClassName("close");
  for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      saveList(); // Save the list after item is removed
    };
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    saveList(); // Save the list after item is checked/unchecked
  }
}, false);

// Save the list to localStorage
function saveList() {
  var listHTML = document.getElementById('myUL').innerHTML;
  localStorage.setItem('myToDoList', listHTML);
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  addCloseButtonListeners(); // Attach event listener to the new close button
  saveList(); // Save the updated list
}
