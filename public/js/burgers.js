$(function() {
    $(".devour").on("click", function(event) {
      // Update the state of the burger.
      $.ajax(`/api/burgers/${id}`, {
        type: "PUT",
        data: {
            eaten: true
        }
      }).then(() => {
          console.log("Burger devoured!");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    // $(".create-form").on("submit", function(event) {
    //   event.preventDefault();
  
    //   var newBurger = {
    //     name: $("#burger").val().trim(),
    //   };
  
    //   // Send the POST request.
    //   $.ajax("/api/burgers", {
    //     type: "POST",
    //     data: newBurger
    //   }).then(
    //     function() {
    //       console.log("burger added!");
    //       location.reload();
    //     }
    //   );
    // });
  });