//.change-sleep = change-status
//newSleep = newStatus
//newsleep = newstatus
//newSleepState = newStatusState
//sleepy = eaten

$(function() {
    $(".change-status").on("click", function(event) {
      var id = $(this).data("id");
      var newStatus = $(this).data("newstatus");
  
      var newStatusState = {
        eaten: newStatus
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newStatusState
      }).then(
        function() {
          console.log("changed to", newStatus);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim(),
        eaten: $("[name=eaten]:checked").val().trim()
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");

          location.reload();
        }
      );
    });
  });
  