$(function() {
  console.log("jquery function");
  $("#updbtn").on("click", function(event) {
    console.log("jquery update");

    //console.log('update date',subname,hwdesc,ddate);
    var id = $("#htid").val().trim();
    var newitem = {
       subname : $("#htsubname1").val().trim(),
       hwdesc : $("#hthwdesc1").val().trim(),
       ddate : '2017-11-11' // $("#hthwdd1").val().trim();
    };
    // Send the PUT request. update record
    console.log('before ajax newitem',newitem);
    $.ajax("/api/update/" + id, {
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
    console.log("jquery add");
    event.preventDefault();
    var newitem = {
      subname: $("#htsubname").val().trim(),
      desc: $("#hthwdesc").val().trim(),
      ddate: '2017-11-11'//$("#htduedate").val().trim()
    };
    // Send the POST request.
    console.log('before ajax');
    $.ajax("/api/add", {
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
  $(".delbtn").on("click", function(event) {

    console.log("jquery del");
    var id = $(this).data("id");
    console.log('delete in front end jquery id is',id);

    console.log('before ajax');
    $.ajax("/api/delete/" + id, {
      type: "DELETE",
    }).then(
      function() {
        console.log("sending deleted menu item request", id);

        location.reload();
      }
    );
  });
});
