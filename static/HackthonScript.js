// Retrieve saved list items from localStorage on page load
document.addEventListener('DOMContentLoaded', function() {
  try {
    var savedList = localStorage.getItem('myToDoList');
  
    if (savedList) {
      document.getElementById('myUL').innerHTML = savedList;
      addCloseButtonListeners(); // Re-attach event listeners to close buttons
    }
  } catch (error) {
    console.error('Error retrieving list from localStorage:', error);
  }
});

// Save the list to localStorage
function saveList() {
  try {
    var listHTML = document.getElementById('myUL').innerHTML;
    localStorage.setItem('myToDoList', listHTML);
  } catch (error) {
    console.error('Error saving list to localStorage:', error);
  }
}

// Attach close button listeners to dynamically added close buttons
function addCloseButtonListeners() {
  var close = document.getElementsByClassName("close");
  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      saveList(); // Save the list after an item is removed
    }
  }
}

// Add a "checked" symbol when clicking on a list item
document.addEventListener("DOMContentLoaded", function() {
    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
            saveList(); // Save the list when an item is checked or unchecked
        }
    }, false);
});

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
    saveList(); // Save the list after a new item is added
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  addCloseButtonListeners(); // Re-attach event listeners to close buttons
}
