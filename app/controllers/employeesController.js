const EmployeeModel = require("../models/employee");

const createEmployee = async (req, res) => {
  await EmployeeModel.create(req.body)
    .then((data) => {
      res.send({ data: data, status: "SUCCESS" });
    })
    .catch((err) => {
      console.log(err);
    });
};

const getEmployees = async (req, res) => {
  try {
    const employees = await EmployeeModel.find();
    res.status(200).send({ data: employees, status: "SUCCESS" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const { employeeId } = req.params;

    //  employee update
    await EmployeeModel.findByIdAndUpdate(employeeId, req.body).then((data) => {
      res.send({ status: "SUCCESS", data });
    });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const getEmployeeById = async (req, res) => {
  try {
    // get employee Id
    const { id } = req.params;

    // get employee
    await EmployeeModel.findById(id).then((data) => {
      res.status(200).send({ data, status: "SUCCESS" });
    });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    // get employee Id
    const { employeeId } = req.params;

    // delete employee
    await EmployeeModel.findByIdAndDelete(employeeId).then((data) => {
      res.status(200).send({ data, message: "SUCCESS" });
    });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const loginEmployee = async (req, res) => {
  const { email, password } = req.body;
  try {
    // get employee
    let employees = [];
    employees = await EmployeeModel.find();
    if (employees) {
      let data;
      for (let i = 0; i < employees.length; i++) {
        if (
          employees[i].email === email &&
          employees[i].password === password
        ) {
          data = employees[i];
        }
      }
      if (data) {
        res.status(200).send({ data, status: "SUCCESS" });
      } else {
        res.status(400).send({ message: err.message });
      }
    }

  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

module.exports = {
  createEmployee,
  getEmployees,
  updateEmployee,
  getEmployeeById,
  deleteEmployee,
  loginEmployee,
};
