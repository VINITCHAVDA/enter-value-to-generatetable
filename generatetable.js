function generate() {
  var number = document.getElementById("number").value;
  var p1 = document.getElementById("p1");
  var i;
  for (i = 1; i <= 10; i++) {
    p1.innerHTML += number + "X" + i + "=" + number * i + "<br>";
  }
}
