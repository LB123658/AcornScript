function load() {
  document.getElementById("txt").innerHTML = localStorage.getItem("acornscript");
  myFunction();
}
function run() {
// Check browser support
var input = document.getElementById("txt");
if (typeof(Storage) !== "undefined") {
  // Store
  localStorage.setItem("acornscript", input.value);
  // Retrieve
  document.getElementById("txt").innerHTML = localStorage.getItem("acornscript");
} else {
  alert("Your browser does not allow this note to be saved");
}
  location.reload();
}
