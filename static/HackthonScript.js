document.addEventListener('DOMContentLoaded', function() {
  try {
    var savedList = localStorage.getItem('myToDoList');
  
    if (savedList) {
      document.getElementById('myUL').innerHTML = savedList;
      addCloseButtonListeners();
    }
  } catch (error) {
    console.error('Error retrieving list from localStorage:', error);
  }
});

// Saving the list function
function saveList() {
  try {
    var listHTML = document.getElementById('myUL').innerHTML;
    localStorage.setItem('myToDoList', listHTML);
  } catch (error) {
    console.error('Error saving list to localStorage:', error);
  }
}

function addCloseButtonListeners() {
  var close = document.getElementsByClassName("close");
  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      saveList(); // List saved after item removed
    }
  }
}

//Checkmark
document.addEventListener("DOMContentLoaded", function() {
    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
            saveList(); // Save the list when an item is checked or unchecked
        }
        if(ev.target.classList == 'checked')
        {
          alert("Amazing work!!!");
        }
    }, false);
});

// Creates new item in the list when user presses "add"
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

  addCloseButtonListeners();
}
