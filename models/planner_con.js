var orm = require("../config/orm.js");

var task = {
     all: function(cb)
     {
       orm.all("stplanner",function(res)
        {
          console.log('Planner_con select',res);
          cb(res);
        });
     },
     create: function(cols,vals,cb)
     {
        orm.create("stplanner",cols,vals,function(res)
         {
           console.log('Planner_con create',res);
           cb(res);
         })
     },
     update:function(objColVals,condition,cb)
     {     orm.update("stplanner", objColVals, condition, function(res)
        {
             console.log('Planner_con update',res);
              cb(res);
            });
     },
     delete: function(condition, cb) {
           orm.delete("stplanner", condition, function(res) {
             console.log('Planner_con delete',res);
             cb(res);
           });
      }

};

module.exports = task;
// To be used in planner_controller.js (controllers)
