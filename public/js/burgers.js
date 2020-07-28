$(document).ready(function () {
  // query handling input field
  $('input.autocomplete').autocomplete({
    data: {
      Apple: null,
      Microsoft: null,
      Google: 'https://placehold.it/250x250',
    },
  });

  $('#devour').on('click', function (event) {
    const id = $(this).data("id");
    // Update the state of the burger.
    $.ajax('/api/burgers/' + id, {
      type: 'PUT',
      data: {
        eaten: true,
      },
    }).then(() => {
      console.log('Burger devoured!');
      // Reload the page to get the updated list
      location.reload();
    });
  });




  $(".add-burger").on("submit", (event) => {
    event.preventDefault();
    const newBurger = {
      name: $("#burger").val().trim(),
    };
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(() => {
        console.log("burger added!");
        location.reload();
      }
    );
  });




});
