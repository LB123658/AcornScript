function load() {
  document.getElementById("txt").innerHTML = localStorage.getItem("acornscript");
}
function run() {
// Check browser support
if (typeof(Storage) !== "undefined") {
  // Store
  localStorage.setItem("acornscript", document.getElementById("txt").value);
  // Retrieve
  document.getElementById("txt").innerHTML = localStorage.getItem("acornscript");
} else {
  alert("Your browser does not allow this code to be run. Turn on local storage.");
}
  location.reload();
}
