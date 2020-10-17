const staff = require("../models/staff.json");
const fs = require("fs");

const getAll = (req, res) => {
  console.log(req.url);

  res.status(200).send(staff);
};

// get all staff: http://localhost:8080/staff

const postStaff = (req, res) => {
  console.log(req.body);

  const { id, name, surname, age } = req.body;

  staff.push({
    id,
    name,
    surname,
    age,
  });

  fs.writeFile(
    "./src/models/staff.json",
    JSON.stringify(staff),
    "utf8",
    function (err) {
      if (err) {
        return res.status(424).send({ message: err });
      }
      console.log("File updated successfully!");
    }
  );

  res.status(201).send(staff);
};

// post upload: http://localhost:8080/staff

const deleteStaff = (req, res) => {
  const id = req.params.id;
  const filterStaff = staff.find((staf) => staf.id == id);

  const index = staff.indexOf(filterStaff);
  staff.splice(index, 1);

  fs.writeFile(
    "./src/models/staff.json",
    JSON.stringify(staff),
    "utf8",
    function (err) {
      if (err) {
        return res.status(424).send({ message: err });
      }
      console.log("Updated file!");
    }
  );

  res.status(200).send(staff);
};

// delete staff: http://localhost:8080/staff/3

const getAgeStaff = (req, res) => {
  // returns the whole object
  // const id = req.params.id;

  // res.status(200).send(staff.filter((stf) => stf.id == id));

  // returns only age
  const id = req.params.id;

  const filteredStaff = staff.find((stf) => stf.id == id);

  if (!filteredStaff)
    return res.status(400).send({
      error: `Staff not found`,
    });

  const staffName = filteredStaff.name;
  const staffAge = filteredStaff.age;

  res.status(200).send([staffName, staffAge]);
};

// get staff age: http://localhost:8080/staff/11

const putStaff = (req, res) => {
  try {
    const id = req.params.id;

    const modifiedStaff = staff.find((stf) => stf.id == id);

    const updatedStaff = req.body;

    const index = staff.indexOf(modifiedStaff);

    staff.splice(index, 1, updatedStaff);
    console.log(staff);

    fs.writeFile(
      "./src/models/staff.json",
      JSON.stringify(staff),
      "utf8",
      function (err) {
        if (err) {
          return res.status(424).send({ message: err });
        }
        console.log("Updated successfully!");
      }
    );

    res.status(200).send(staff);
  } catch (err) {
    return res.status(424).send({ message: err });
  }
};

// put staff: http://localhost:8080/staff/1

const patchStaff = (req, res) => {
  const id = req.params.id;
  const updated = req.body;
  console.log(updated);

  try {
    const modifiedStaff = staff.find((stf) => stf.id == id);

    Object.keys(updated).forEach((key) => {
      modifiedStaff[key] = updated[key];
    });

    fs.writeFile(
      "./src/models/staff.json",
      JSON.stringify(staff),
      "utf8",
      function (err) {
        if (err) {
          return res.status(424).send({ message: err });
        }
        console.log("Updated successfully!");
      }
    );

    res.status(200).send(staff);
  } catch (err) {
    return res.status(424).send({ message: err });
  }
};

// patch staff: http://localhost:8080/staff/1

module.exports = {
  getAll,
  postStaff,
  deleteStaff,
  getAgeStaff,
  putStaff,
  patchStaff,
};
