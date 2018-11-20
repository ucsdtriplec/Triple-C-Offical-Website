function displayWechatModal() {

  var modal = document.getElementById("QRModal");
  modal.style.display = "block";

  var test = document.getElementById("main_body");
  test.style.opacity = 0.1;
}

function hideWechatModal() {
  var modal = document.getElementById("QRModal");
  modal.style.display = "none";
  var test = document.getElementById("main_body");
  test.style.opacity = 1;
}
