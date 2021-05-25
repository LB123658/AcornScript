var div = document.getElementById("div");
var x = document.getElementById("txt").value;
function myFunction() {

// create element from script
if (x.split("*")[1] == "button") {
var text = document.createElement("button");
text.innerHTML = x.split("'")[1];
text.id = x.split("#")[1];
div.appendChild(text);
} else if (x.split("*")[1] == "text") {
var text = document.createElement("p");
text.innerHTML = x.split("'")[1];
text.id = x.split("#")[1];
div.appendChild(text);
} else if (x.split("*")[1] == "heading") {
var text = document.createElement("h2");
text.innerHTML = x.split("'")[1];
text.id = x.split("#")[1];
div.appendChild(text);
} else if (x.split("*")[1] == "input") {
var text = document.createElement("input");
text.placeholder = x.split(";")[1];
text.id = x.split("#")[1];
div.appendChild(text);
} else if (x.split("*")[1] == "link") {
var text = document.createElement("a");
text.innerHTML = x.split("'")[1];
text.href = x.split("|")[1];
text.id = x.split("#")[1];
div.appendChild(text);
} else if (x.split("*")[1] == "css") {
var text = document.createElement("link");
text.rel = x.split("/rel/")[1];
text.href = x.split("/href/")[1];
text.id = x.split("#")[1];
document.head.appendChild(text);
} else if (x.split("*")[1] == "photo") {
var text = document.createElement("img");
text.src = x.split("?")[1];
text.style.width = x.split("!")[1];
text.id = x.split("#")[1];
div.appendChild(text);
} else if (x.split("*")[1] == "embed") {
var text = document.createElement("embed");
text.src = x.split("?")[1];
text.style.width = x.split("!")[1];
text.id = x.split("#")[1];
div.appendChild(text);
} else if (x.split("*")[1] == "video") {
var text = document.createElement("video");
text.src = x.split("?")[1];
text.style.width = x.split("!")[1];
text.id = x.split("#")[1];
div.appendChild(text);
} else if (x.split("*")[1] == "alert") {
alert(x.split("'")[1]);
} else if (x.split("*")[1] == "embed") {
var text = document.createElement("embed");
text.src = x.split("?")[1];
text.style.width = x.split("!")[1];
text.id = x.split("#")[1];
div.appendChild(text);
} else if (x.split("*")[1] == "video") {
var text = document.createElement("video");
text.src = x.split("?")[1];
text.style.width = x.split("!")[1];
text.id = x.split("#")[1];
div.appendChild(text);
}
// second line of code
if (x.split("*")[3] == "button") {
var three = document.createElement("button");
three.innerHTML = x.split("'")[3];
three.id = x.split("#")[3];
div.appendChild(three);
} else if (x.split("*")[3] == "text") {
var three = document.createElement("p");
three.innerHTML = x.split("'")[3];
three.id = x.split("#")[3];
div.appendChild(three);
} else if (x.split("*")[3] == "heading") {
var three = document.createElement("h2");
three.innerHTML = x.split("'")[3];
three.id = x.split("#")[3];
div.appendChild(three);
} else if (x.split("*")[3] == "input") {
var three = document.createElement("input");
three.placeholder = x.split(";")[3];
three.id = x.split("#")[3];
div.appendChild(three);
} else if (x.split("*")[3] == "link") {
var three = document.createElement("a");
three.innerHTML = x.split("'")[3];
three.href = x.split("|")[3];
three.id = x.split("#")[3];
div.appendChild(three);
} else if (x.split("*")[3] == "photo") {
var three = document.createElement("img");
three.src = x.split("?")[3];
three.style.width = x.split("!")[3];
three.id = x.split("#")[3];
div.appendChild(three);
} else if (x.split("*")[3] == "embed") {
var three = document.createElement("embed");
three.src = x.split("?")[3];
three.style.width = x.split("!")[3];
three.id = x.split("#")[3];
div.appendChild(three);
} else if (x.split("*")[3] == "video") {
var three = document.createElement("video");
three.src = x.split("?")[3];
three.style.width = x.split("!")[3];
three.id = x.split("#")[3];
div.appendChild(three);
} else if (x.split("*")[3] == "alert") {
alert(x.split("'")[3]);
}
// third line of code
if (x.split("*")[5] == "button") {
var five = document.createElement("button");
five.innerHTML = x.split("'")[5];
five.id = x.split("#")[5];
div.appendChild(five);
} else if (x.split("*")[5] == "text") {
var five = document.createElement("p");
five.innerHTML = x.split("'")[5];
five.id = x.split("#")[5];
div.appendChild(five);
} else if (x.split("*")[5] == "heading") {
var five = document.createElement("h2");
five.innerHTML = x.split("'")[5];
five.id = x.split("#")[5];
div.appendChild(five);
} else if (x.split("*")[5] == "input") {
var five = document.createElement("input");
five.placeholder = x.split(";")[5];
five.id = x.split("#")[5];
div.appendChild(five);
} else if (x.split("*")[5] == "link") {
var five = document.createElement("a");
five.innerHTML = x.split("'")[5];
five.href = x.split("|")[5];
five.id = x.split("#")[5];
div.appendChild(five);
} else if (x.split("*")[5] == "photo") {
var five = document.createElement("img");
five.src = x.split("?")[5];
five.style.width = x.split("!")[5];
five.id = x.split("#")[5];
div.appendChild(five);
} else if (x.split("*")[5] == "embed") {
var five = document.createElement("embed");
five.src = x.split("?")[5];
five.style.width = x.split("!")[5];
five.id = x.split("#")[5];
div.appendChild(five);
} else if (x.split("*")[5] == "video") {
var five = document.createElement("video");
five.src = x.split("?")[5];
five.style.width = x.split("!")[5];
five.id = x.split("#")[5];
div.appendChild(five);
} else if (x.split("*")[5] == "alert") {
alert(x.split("'")[5]);
}
//fouth line of code
if (x.split("*")[7] == "button") {
var seven = document.createElement("button");
seven.innerHTML = x.split("'")[7];
seven.id = x.split("#")[7];
div.appendChild(seven);
} else if (x.split("*")[7] == "text") {
var seven = document.createElement("p");
seven.innerHTML = x.split("'")[7];
seven.id = x.split("#")[7];
div.appendChild(seven);
} else if (x.split("*")[7] == "heading") {
var seven = document.createElement("h2");
seven.innerHTML = x.split("'")[7];
seven.id = x.split("#")[7];
div.appendChild(seven);
} else if (x.split("*")[7] == "input") {
var seven = document.createElement("input");
seven.placeholder = x.split(";")[7];
seven.id = x.split("#")[7];
div.appendChild(seven);
} else if (x.split("*")[7] == "link") {
var seven = document.createElement("a");
seven.innerHTML = x.split("'")[7];
seven.href = x.split("|")[7];
seven.id = x.split("#")[7];
div.appendChild(seven);
} else if (x.split("*")[7] == "photo") {
var seven = document.createElement("img");
seven.src = x.split("?")[7];
seven.style.width = x.split("!")[7];
seven.id = x.split("#")[7];
div.appendChild(seven);
} else if (x.split("*")[7] == "embed") {
var seven = document.createElement("embed");
seven.src = x.split("?")[7];
seven.style.width = x.split("!")[7];
seven.id = x.split("#")[7];
div.appendChild(seven);
} else if (x.split("*")[7] == "video") {
var seven = document.createElement("video");
seven.src = x.split("?")[7];
seven.style.width = x.split("!")[7];
seven.id = x.split("#")[7];
div.appendChild(seven);
} else if (x.split("*")[7] == "alert") {
alert(x.split("'")[7]);
}
// fifth line of code
if (x.split("*")[9] == "button") {
var nine = document.createElement("button");
nine.innerHTML = x.split("'")[9];
nine.id = x.split("#")[9];
div.appendChild(nine);
} else if (x.split("*")[9] == "text") {
var nine = document.createElement("p");
nine.innerHTML = x.split("'")[9];
nine.id = x.split("#")[9];
div.appendChild(nine);
} else if (x.split("*")[9] == "heading") {
var nine = document.createElement("h2");
nine.innerHTML = x.split("'")[9];
nine.id = x.split("#")[9];
div.appendChild(nine);
} else if (x.split("*")[9] == "input") {
var nine = document.createElement("input");
nine.placeholder = x.split(";")[9];
nine.id = x.split("#")[9];
div.appendChild(nine);
} else if (x.split("*")[9] == "link") {
var nine = document.createElement("a");
nine.innerHTML = x.split("'")[9];
nine.href = x.split("|")[9];
nine.id = x.split("#")[9];
div.appendChild(nine);
} else if (x.split("*")[9] == "photo") {
var nine = document.createElement("img");
nine.src = x.split("?")[9];
nine.style.width = x.split("!")[9];
nine.id = x.split("#")[9];
div.appendChild(nine);
} else if (x.split("*")[9] == "embed") {
var nine = document.createElement("embed");
nine.src = x.split("?")[9];
nine.style.width = x.split("!")[9];
nine.id = x.split("#")[9];
div.appendChild(nine);
} else if (x.split("*")[9] == "video") {
var nine = document.createElement("video");
nine.src = x.split("?")[9];
nine.style.width = x.split("!")[9];
nine.id = x.split("#")[9];
div.appendChild(nine);
} else if (x.split("*")[9] == "alert") {
alert(x.split("'")[9]);
}
//drawing function from original ACORN
// variables
  var first = p.innerHTML.split("==")[1];
  var second = p.innerHTML.split("==")[2];
  var thrird = p.innerHTML.split("==")[3];
  var fouth = p.innerHTML.split("==")[4];
  var fifth = p.innerHTML.split("==")[5];
  var sixth = p.innerHTML.split("==")[6];
  var seventh = p.innerHTML.split("==")[7];
  var eighth = p.innerHTML.split("==")[8];
  var ninth = p.innerHTML.split("==")[9];
  var tenth = p.innerHTML.split("==")[10];
  var eleventh = p.innerHTML.split("==")[11];
  var twelfth = p.innerHTML.split("==")[12];
  var thirteenth = p.innerHTML.split("==")[13];
  var fourteenth = p.innerHTML.split("==")[14];
  var fifteenth = p.innerHTML.split("==")[15];
  var sixteenth = p.innerHTML.split("==")[16];

//create drawing
if (x.split(" ")[1] == "draw") {
var one = document.createElement("button");
one.id = "one";
one.style.background = first.split(";")[0];
div.appendChild(one);
var two = document.createElement("button");
two.id = "two";
two.style.background = second.split(";")[1];
div.appendChild(two);
var three = document.createElement("button");
three.id = "three";
three.style.background = third.split(";")[2];
div.appendChild(three);
var four = document.createElement("button");
four.id = "four";
four.style.background = fourth.split(";")[3];
div.appendChild(four);
}
}
