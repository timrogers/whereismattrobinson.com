console.log("Matt Robinson is in a meeting. Always.");

$(document).ready(function() {
  $("h1").on("click", function(e) {
    if ($(this).text() == "Always.") {
      $(this).text("In a meeting.");
    } else {
      $(this).text("Always.");
    }
  });
});