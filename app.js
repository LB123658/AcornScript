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
} else if (document.getElementById("fot").innerHTML.split(":")[1] == "css") {
var text = document.createElement("link");
text.rel = document.getElementById("fot").innerHTML.split("/rel/")[1];
text.href = document.getElementById("fot").innerHTML.split("/href/")[1];
text.id = document.getElementById("fot").innerHTML.split("#")[1];
document.head.appendChild(text);
} else if (document.getElementById("fot").innerHTML.split(":")[1] == "photo") {
var text = document.createElement("img");
text.src = document.getElementById("fot").innerHTML.split("/src/")[1];
text.style.width = document.getElementById("fot").innerHTML.split("/width/")[1];
text.id = document.getElementById("fot").innerHTML.split("#")[1];
div.appendChild(text);
} else if (document.getElementById("fot").innerHTML.split(":")[1] == "embed") {
var text = document.createElement("embed");
text.src = document.getElementById("fot").innerHTML.split("/src/")[1];
text.style.width = document.getElementById("fot").innerHTML.split("/width/")[1];
text.id = document.getElementById("fot").innerHTML.split("#")[1];
div.appendChild(text);
} else if (document.getElementById("fot").innerHTML.split(":")[1] == "video") {
var text = document.createElement("video");
text.src = document.getElementById("fot").innerHTML.split("/src/")[1];
text.style.width = document.getElementById("fot").innerHTML.split("/width/")[1];
text.id = document.getElementById("fot").innerHTML.split("#")[1];
div.appendChild(text);
} else if (document.getElementById("fot").innerHTML.split(":")[1] == "alert") {
alert(document.getElementById("fot").innerHTML.split("/")[1]);
} else if (document.getElementById("fot").innerHTML.split(":")[1] == "embed") {
var text = document.createElement("embed");
text.src = document.getElementById("fot").innerHTML.split("/src/")[1];
text.style.width = document.getElementById("fot").innerHTML.split("/width/")[1];
text.id = document.getElementById("fot").innerHTML.split("#")[1];
div.appendChild(text);
} else if (document.getElementById("fot").innerHTML.split(":")[1] == "video") {
var text = document.createElement("video");
text.src = document.getElementById("fot").innerHTML.split("/src/")[1];
text.style.width = document.getElementById("fot").innerHTML.split("/width/")[1];
text.id = document.getElementById("fot").innerHTML.split("#")[1];
div.appendChild(text);
}
// second line of code
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
} else if (document.getElementById("fot").innerHTML.split(":")[3] == "photo") {
var three = document.createElement("img");
three.src = document.getElementById("fot").innerHTML.split("/src/")[3];
three.style.width = document.getElementById("fot").innerHTML.split("/width/")[3];
three.id = document.getElementById("fot").innerHTML.split("#")[3];
div.appendChild(three);
} else if (document.getElementById("fot").innerHTML.split(":")[3] == "embed") {
var three = document.createElement("embed");
three.src = document.getElementById("fot").innerHTML.split("/src/")[3];
three.style.width = document.getElementById("fot").innerHTML.split("/width/")[3];
three.id = document.getElementById("fot").innerHTML.split("#")[3];
div.appendChild(three);
} else if (document.getElementById("fot").innerHTML.split(":")[3] == "video") {
var three = document.createElement("video");
three.src = document.getElementById("fot").innerHTML.split("/src/")[3];
three.style.width = document.getElementById("fot").innerHTML.split("/width/")[3];
three.id = document.getElementById("fot").innerHTML.split("#")[3];
div.appendChild(three);
} else if (document.getElementById("fot").innerHTML.split(":")[3] == "alert") {
alert(document.getElementById("fot").innerHTML.split("/")[3]);
}
// third line of code
if (document.getElementById("fot").innerHTML.split(":")[5] == "button") {
var five = document.createElement("button");
five.innerHTML = document.getElementById("fot").innerHTML.split("/")[5];
five.id = document.getElementById("fot").innerHTML.split("#")[5];
div.appendChild(five);
} else if (document.getElementById("fot").innerHTML.split(":")[5] == "text") {
var five = document.createElement("p");
five.innerHTML = document.getElementById("fot").innerHTML.split("/")[5];
five.id = document.getElementById("fot").innerHTML.split("#")[5];
div.appendChild(five);
} else if (document.getElementById("fot").innerHTML.split(":")[5] == "heading") {
var five = document.createElement("h2");
five.innerHTML = document.getElementById("fot").innerHTML.split("/")[5];
five.id = document.getElementById("fot").innerHTML.split("#")[5];
div.appendChild(five);
} else if (document.getElementById("fot").innerHTML.split(":")[5] == "input") {
var five = document.createElement("input");
five.placeholder = document.getElementById("fot").innerHTML.split("/placeholder/")[5];
five.id = document.getElementById("fot").innerHTML.split("#")[5];
div.appendChild(five);
} else if (document.getElementById("fot").innerHTML.split(":")[5] == "link") {
var five = document.createElement("a");
five.innerHTML = document.getElementById("fot").innerHTML.split("/")[5];
five.href = document.getElementById("fot").innerHTML.split("/url/")[5];
five.id = document.getElementById("fot").innerHTML.split("#")[5];
div.appendChild(five);
} else if (document.getElementById("fot").innerHTML.split(":")[5] == "photo") {
var five = document.createElement("img");
five.src = document.getElementById("fot").innerHTML.split("/src/")[5];
five.style.width = document.getElementById("fot").innerHTML.split("/width/")[5];
five.id = document.getElementById("fot").innerHTML.split("#")[5];
div.appendChild(five);
} else if (document.getElementById("fot").innerHTML.split(":")[5] == "embed") {
var five = document.createElement("embed");
five.src = document.getElementById("fot").innerHTML.split("/src/")[5];
five.style.width = document.getElementById("fot").innerHTML.split("/width/")[5];
five.id = document.getElementById("fot").innerHTML.split("#")[5];
div.appendChild(five);
} else if (document.getElementById("fot").innerHTML.split(":")[5] == "video") {
var five = document.createElement("video");
five.src = document.getElementById("fot").innerHTML.split("/src/")[5];
five.style.width = document.getElementById("fot").innerHTML.split("/width/")[5];
five.id = document.getElementById("fot").innerHTML.split("#")[5];
div.appendChild(five);
} else if (document.getElementById("fot").innerHTML.split(":")[5] == "alert") {
alert(document.getElementById("fot").innerHTML.split("/")[5]);
}
//fouth line of code
if (document.getElementById("fot").innerHTML.split(":")[7] == "button") {
var seven = document.createElement("button");
seven.innerHTML = document.getElementById("fot").innerHTML.split("/")[7];
seven.id = document.getElementById("fot").innerHTML.split("#")[7];
div.appendChild(seven);
} else if (document.getElementById("fot").innerHTML.split(":")[7] == "text") {
var seven = document.createElement("p");
seven.innerHTML = document.getElementById("fot").innerHTML.split("/")[7];
seven.id = document.getElementById("fot").innerHTML.split("#")[7];
div.appendChild(seven);
} else if (document.getElementById("fot").innerHTML.split(":")[7] == "heading") {
var seven = document.createElement("h2");
seven.innerHTML = document.getElementById("fot").innerHTML.split("/")[7];
seven.id = document.getElementById("fot").innerHTML.split("#")[7];
div.appendChild(seven);
} else if (document.getElementById("fot").innerHTML.split(":")[7] == "input") {
var seven = document.createElement("input");
seven.placeholder = document.getElementById("fot").innerHTML.split("/placeholder/")[7];
seven.id = document.getElementById("fot").innerHTML.split("#")[7];
div.appendChild(seven);
} else if (document.getElementById("fot").innerHTML.split(":")[7] == "link") {
var seven = document.createElement("a");
seven.innerHTML = document.getElementById("fot").innerHTML.split("/")[7];
seven.href = document.getElementById("fot").innerHTML.split("/url/")[7];
seven.id = document.getElementById("fot").innerHTML.split("#")[7];
div.appendChild(seven);
} else if (document.getElementById("fot").innerHTML.split(":")[7] == "photo") {
var seven = document.createElement("img");
seven.src = document.getElementById("fot").innerHTML.split("/src/")[7];
seven.style.width = document.getElementById("fot").innerHTML.split("/width/")[7];
seven.id = document.getElementById("fot").innerHTML.split("#")[7];
div.appendChild(seven);
} else if (document.getElementById("fot").innerHTML.split(":")[7] == "embed") {
var seven = document.createElement("embed");
seven.src = document.getElementById("fot").innerHTML.split("/src/")[7];
seven.style.width = document.getElementById("fot").innerHTML.split("/width/")[7];
seven.id = document.getElementById("fot").innerHTML.split("#")[7];
div.appendChild(seven);
} else if (document.getElementById("fot").innerHTML.split(":")[7] == "video") {
var seven = document.createElement("video");
seven.src = document.getElementById("fot").innerHTML.split("/src/")[7];
seven.style.width = document.getElementById("fot").innerHTML.split("/width/")[7];
seven.id = document.getElementById("fot").innerHTML.split("#")[7];
div.appendChild(seven);
} else if (document.getElementById("fot").innerHTML.split(":")[7] == "alert") {
alert(document.getElementById("fot").innerHTML.split("/")[7]);
}
// fifth line of code
if (document.getElementById("fot").innerHTML.split(":")[9] == "button") {
var nine = document.createElement("button");
nine.innerHTML = document.getElementById("fot").innerHTML.split("/")[9];
nine.id = document.getElementById("fot").innerHTML.split("#")[9];
div.appendChild(nine);
} else if (document.getElementById("fot").innerHTML.split(":")[9] == "text") {
var nine = document.createElement("p");
nine.innerHTML = document.getElementById("fot").innerHTML.split("/")[9];
nine.id = document.getElementById("fot").innerHTML.split("#")[9];
div.appendChild(nine);
} else if (document.getElementById("fot").innerHTML.split(":")[9] == "heading") {
var nine = document.createElement("h2");
nine.innerHTML = document.getElementById("fot").innerHTML.split("/")[9];
nine.id = document.getElementById("fot").innerHTML.split("#")[9];
div.appendChild(nine);
} else if (document.getElementById("fot").innerHTML.split(":")[9] == "input") {
var nine = document.createElement("input");
nine.placeholder = document.getElementById("fot").innerHTML.split("/placeholder/")[9];
nine.id = document.getElementById("fot").innerHTML.split("#")[9];
div.appendChild(nine);
} else if (document.getElementById("fot").innerHTML.split(":")[9] == "link") {
var nine = document.createElement("a");
nine.innerHTML = document.getElementById("fot").innerHTML.split("/")[9];
nine.href = document.getElementById("fot").innerHTML.split("/url/")[9];
nine.id = document.getElementById("fot").innerHTML.split("#")[9];
div.appendChild(nine);
} else if (document.getElementById("fot").innerHTML.split(":")[9] == "photo") {
var nine = document.createElement("img");
nine.src = document.getElementById("fot").innerHTML.split("/src/")[9];
nine.style.width = document.getElementById("fot").innerHTML.split("/width/")[9];
nine.id = document.getElementById("fot").innerHTML.split("#")[9];
div.appendChild(nine);
} else if (document.getElementById("fot").innerHTML.split(":")[9] == "embed") {
var nine = document.createElement("embed");
nine.src = document.getElementById("fot").innerHTML.split("/src/")[9];
nine.style.width = document.getElementById("fot").innerHTML.split("/width/")[9];
nine.id = document.getElementById("fot").innerHTML.split("#")[9];
div.appendChild(nine);
} else if (document.getElementById("fot").innerHTML.split(":")[9] == "video") {
var nine = document.createElement("video");
nine.src = document.getElementById("fot").innerHTML.split("/src/")[9];
nine.style.width = document.getElementById("fot").innerHTML.split("/width/")[9];
nine.id = document.getElementById("fot").innerHTML.split("#")[9];
div.appendChild(nine);
} else if (document.getElementById("fot").innerHTML.split(":")[9] == "alert") {
alert(document.getElementById("fot").innerHTML.split("/")[9]);
}
}
