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
if (document.getElementById("fot").innerHTML.split(" ")[1] == "draw") {
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
