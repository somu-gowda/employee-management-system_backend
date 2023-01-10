const express = require("express");

const rootRoute = express.Router();

const employeesController = require("../controllers/employeesController");

/* GET api root */
rootRoute.get("/status", (req, res, next) => {
    res.status(200).send("OK");
});
rootRoute.put("/employees/login", employeesController.loginEmployee);
rootRoute.post("/employees", employeesController.createEmployee);
rootRoute.get("/employees", employeesController.getEmployees);
rootRoute.get("/employees/:employeeId", employeesController.getEmployeeById);
rootRoute.put("/employees/:employeeId", employeesController.updateEmployee);
rootRoute.delete("/employees/:employeeId", employeesController.deleteEmployee);
module.exports = rootRoute;
