// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    console.log('Inside the JS file burgers.js');
  $("updbtn").on("click", function(event) {
    console.log('Inside Update button');
    var id = $("#inmenuid").val().trim();
    var menuname = $("#inmenuname").val().trim();
    var newitem = {
        item_name: menu
    };
    // Send the PUT request. update record
    console.log('before ajax');
    $.ajax("/api/menu/" + id, {
      type: "PUT",
      data: newitem
    }).then(
      function() {
        console.log("request to update item", newitem);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  //Add button to insert record into table
  $("#addbtn").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    console.log('Inside Add button');
    event.preventDefault();
    var newitem = {
      name: $("#inmenu1").val().trim(),
    };
    // Send the POST request.
    console.log('before ajax');
    $.ajax("/api/menu", {
      type: "POST",
      data: newitem
    }).then(
      function() {
        console.log("sending Inserted menu item");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  //Delete record in table
  $("#delbtn").on("click", function(event) {
    //event.preventDefault();
    console.log('Inside delete button');
    var id = $(this).data("id");
    console.log('id is',id);
    // Send the DELETE request.
    console.log('before ajax');
    $.ajax("/api/menu/" + id, {
      type: "DELETE",
    }).then(
      function() {
        console.log("sending deleted menu item request", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
