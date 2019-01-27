
$(function() {
  $(".devour_burger").on("click", function(event) {
    console.log("clicked")
    var id = $(this).data("id");
    var devouredState = $(this).data("devour");

    var newDevourState = {
      devoured: devouredState
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed to", devouredState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


  $(".reset-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    // Send the POST request.
    $.ajax("/api/reset", {
      type: "PUT"
    }).then(
      function() {
        console.log("Reset all burgers");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
