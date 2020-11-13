const staffs = require("../models/staff");

const postStaff = (req, res) => {
  console.log(req.body);

  const staff = new staffs(req.body);

  staff.save((err) => {
    err
      ? res.status(424).send({ message: err.message })
      : res.status(201).send({
          status: true,
          message: "Successfully included staff!",
        });
  });
};

const getAll = (req, res) => {
  staffs.find((err, staf) => {
    res.status(200).send(staf);
  });
};

const getAgeStaff = (req, res) => {
  staffs.find({ age }, (err, staff) => {
    err
      ? res.status(424).send({ message: err.message })
      : res.status(200).send(staff);
  });
};

const getActive = (req, res) => {
  staffs.find({ active: true }, (err, staff) => {
    err
      ? res.status(424).send({ message: err.message })
      : res.status(200).send(staff);
  });
};

const putStaff = (req, res) => {
  const id = req.params.id;

  staffs.updateMany({ id }, { $set: req.body }, { upsert: true }, (err) =>
    err
      ? res.status(424).send({ message: err.message })
      : res.status(200).send({ message: "Staff successfully changed" })
  );
};

const deleteStaff = (req, res) => {
  const id = req.params.id;

  staffs.deleteMany({ id }, (err) =>
    err
      ? res.status(424).send({ message: err.message })
      : res.status(200).send({
          status: "Success",
          message: "Staff successfully removed",
        })
  );
};

module.exports = {
  postStaff,
  getAll,
  getAgeStaff,
  getActive,
  putStaff,
  deleteStaff,
};
