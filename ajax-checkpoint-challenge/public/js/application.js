$(document).ready(function() {
  // Second time around at a better written release 0
  $("#add-horse-form").on("submit", function(event) {
    event.preventDefault();

    var $add_horse_button = $(event.target);
    var url = $add_horse_button.attr("action");
    var method = $add_horse_button.attr("method");

    $.ajax({
      url: url,
      method: method
    })

    .done(function(response) {
      $add_horse_button.hide();
      $('.container').append(response);
    })
  });

// Release 1: Work in Progress
  $("#add-horse-form").on("submit", function(event) {
    event.preventDefault();

    var $form = $(this)
    var url = $form.attr("action");
    var method = $form.attr("method")
    var data = $form.seralize();

    $.ajax({
      url: url,
      method: method,
      data: data
    })
    .done(function(response) {
      // $(Fill in ).append(response)
      $("#new-horse-form").hide();
    })
  })

});

// First way to get release 0 working!
// $(document).ready(function() {
//    $("#add-horse-form").on("submit",function(event) {
//     event.preventDefault()

//     $("#add-horse-form").hide();

//     $.ajax({
//       url: "/horses/new",
//       method: "GET"
//     })

//     .done(function(response) {
//       $('.container').append(response)
//     });
//   });
// });