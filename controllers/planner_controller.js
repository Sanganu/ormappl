var express = require("express");
var router = express.Router();
// Import the model (burgerjs) to use its database functions.
var task = require("../models/planner_con.js");
// Create all our routes and set up logic within those routes where required.
// select from table
router.get("/", function(req, res) {
        task.all(function(data) {
                var hbsObject = {
                  stplanner: data
                };
                console.log('the / route planner controller',hbsObject);
              //  res.render('index', {vlist:hbsObject});
                res.render('index', {vlist:data});
        });  //end of all -select
}); // end router get

// Insert into table
router.post("/api/add", function(req, res) {
      task.create([
        "subject_name", "homework_desc","due_date"
      ], [
        req.body.subname, req.body.desc, req.body.ddate
      ], function(result) {
            console.log("Inserting new assignment details in table");
            if (result.affectedRows != 0)
            {
              res.json({ id: result.insertId });
              res.status(200).end();
            }
            else {
              return res.status(404).end();
            }
       }); //end of create
}); // end of post

// upate record in table
router.put("/api/update/:id", function(req, res) {
      var condition = "id = " + req.params.id;
      console.log("condition", condition);
        task.update({
           subject_name: req.body.subname,
           homework_desc: req.body.hwdesc,
           due_date: req.body.ddate
        }, condition, function(result) {
             console.log('updating values');
                if (result.changedRows == 0) {
                  // If no rows were changed, then the ID must not exist, so 404
                  console.log("ID not found, Task does not exist");
                  return res.status(404).end();
                } else {
                  console.log('Valid Id, Update Record');
                  res.status(200).end();
                }
        }); // end of update
}); //end of put

// delete record from table
router.delete("/api/delete/:id", function(req, res) {
      var condition = "id = " + req.params.id;
      task.delete(condition, function(result) {
            if (result.affectedRows == 0) {
                  // If no rows were changed, then the ID must not exist, so 404
                  console.log("ID not found, task does not exist");
                  return res.status(404).end();
                } else {
                  console.log('Valid Id, Deleted record');
                  res.status(200).end();
                }

      }); // end of delete db call
}); //end of delete route

// Export routes for server.js to use.
module.exports = router;
