
function showImage(src, width, height, alt) {
    const img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // Append the image to a container (e.g., a <div> or <body>)
    document.body.appendChild(img);
}



// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
var span = document.createElement("SPAN");
var txt = document.createTextNode("\u00D7");//this creates the x that will remove elements when pressed on
span.className = "close";
span.appendChild(txt);
myNodelist[i].appendChild(span);
}

//gets rid of current list item when the x is pressed on
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
close[i].onclick = function() {
var div = this.parentElement;
div.style.display = "none";
}
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
var oImg = document.createElement('img');
oImg.setAttribute('src', 'https://i.pinimg.com/736x/b4/7d/50/b47d50319d7e6c0f2ffc21365a10d50f--super-bowl-party-happy-birthday-wishes.jpg');
oImg.setAttribute('alt', 'na');
oImg.setAttribute('height', '1px');
oImg.setAttribute('width', '1px');
document.body.appendChild(oImg);
list.addEventListener('click', function(ev) {
if (ev.target.tagName === 'LI') {
ev.target.classList.toggle('checked');
//Following statement shows a "congrats" message for when a task has been completed. 
if (ev.target.classList == 'checked')
{
alert("Awesome job!! Another one off the list!");
showImage(oImg, 200, 200, "")
}
}
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
var li = document.createElement("li");//creates a list item
var inputValue = document.getElementById("myInput").value;//user input
var t = document.createTextNode(inputValue);//creates a new node based on the user input
li.appendChild(t);//adds the node to the list
if (inputValue === '') {
alert("Please add something!");//shows error message when nothis is inputted
} else {
document.getElementById("myUL").appendChild(li);//myUL is the user list that is called in HTML
}
document.getElementById("myInput").value = "";//myInput is the input box, this sets it back to nothing after the input is submitted

//x is put within the span, and "close" is what can be edited by css
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
}
