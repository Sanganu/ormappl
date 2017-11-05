var express = require("express");
var router = express.Router();

var task = require("../models/planner_con.js");
router.get("/", function(req, res) {
                res.render('index', {vlist:data});
        });  //end of all -select
}); // end router get all records

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
}); // end of post route to add new records

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
                  console.log("ID not found, Task does not exist");
                  return res.status(404).end();
                } else {
                  console.log('Valid Id, Update Record');
                  res.status(200).end();
                }
        }); // end of update
}); //end of put route to update records

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
