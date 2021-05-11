var div = document.getElementById("div");
var x = document.getElementById("txt");
function myFunction() {
// store script
var p = document.createElement("P");
p.innerHTML = x.value;
p.style.display = "none";
p.id = "fot";
document.body.appendChild(p);

// create element from script
if (document.getElementById("fot").innerHTML.split(":")[1] == "button") {
var text = document.createElement("button");
text.innerHTML = document.getElementById("fot").innerHTML.split("/")[1];
text.id = document.getElementById("fot").innerHTML.split("#")[1];
div.appendChild(text);
} else if (document.getElementById("fot").innerHTML.split(":")[1] == "text") {
var text = document.createElement("p");
text.innerHTML = document.getElementById("fot").innerHTML.split("/")[1];
text.id = document.getElementById("fot").innerHTML.split("#")[1];
div.appendChild(text);
} else if (document.getElementById("fot").innerHTML.split(":")[1] == "heading") {
var text = document.createElement("h2");
text.innerHTML = document.getElementById("fot").innerHTML.split("/")[1];
text.id = document.getElementById("fot").innerHTML.split("#")[1];
div.appendChild(text);
} else if (document.getElementById("fot").innerHTML.split(":")[1] == "input") {
var text = document.createElement("input");
text.placeholder = document.getElementById("fot").innerHTML.split("/placeholder/")[1];
text.id = document.getElementById("fot").innerHTML.split("#")[1];
div.appendChild(text);
} else if (document.getElementById("fot").innerHTML.split(":")[1] == "link") {
var text = document.createElement("a");
text.innerHTML = document.getElementById("fot").innerHTML.split("/")[1];
text.href = document.getElementById("fot").innerHTML.split("/url/")[1];
text.id = document.getElementById("fot").innerHTML.split("#")[1];
div.appendChild(text);
} 
if (document.getElementById("fot").innerHTML.split(":")[3] == "button") {
var three = document.createElement("button");
three.innerHTML = document.getElementById("fot").innerHTML.split("/")[3];
three.id = document.getElementById("fot").innerHTML.split("#")[3];
div.appendChild(three);
} else if (document.getElementById("fot").innerHTML.split(":")[3] == "text") {
var three = document.createElement("p");
three.innerHTML = document.getElementById("fot").innerHTML.split("/")[3];
three.id = document.getElementById("fot").innerHTML.split("#")[3];
div.appendChild(three);
} else if (document.getElementById("fot").innerHTML.split(":")[3] == "heading") {
var three = document.createElement("h2");
three.innerHTML = document.getElementById("fot").innerHTML.split("/")[3];
three.id = document.getElementById("fot").innerHTML.split("#")[3];
div.appendChild(three);
} else if (document.getElementById("fot").innerHTML.split(":")[3] == "input") {
var three = document.createElement("input");
three.placeholder = document.getElementById("fot").innerHTML.split("/placeholder/")[3];
three.id = document.getElementById("fot").innerHTML.split("#")[3];
div.appendChild(three);
} else if (document.getElementById("fot").innerHTML.split(":")[3] == "link") {
var three = document.createElement("a");
three.innerHTML = document.getElementById("fot").innerHTML.split("/")[3];
three.href = document.getElementById("fot").innerHTML.split("/url/")[3];
three.id = document.getElementById("fot").innerHTML.split("#")[3];
div.appendChild(three);
} 
}
