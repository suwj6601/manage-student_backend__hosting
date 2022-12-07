const { db } = require("./db");

const getAllStudentByClassId = async (classID) => {
  try {
    const [rows, fields] = await db
      .promise()
      .query(`select * from Student where classID = (?);`, [classID]);

    return rows;
  } catch (err) {
    throw new Error(err);
  }
};

const createStudent = async (data) => {
  try {
    const { id, name, age, email, classID, sex } = data;

    const [rows, fields] = await db
      .promise()
      .query("INSERT INTO Student values(?,?,?,?,?,?)", [
        id,
        name,
        age,
        email,
        sex,
        classID,
      ]);

    return rows;
  } catch (err) {
    throw new Error(err);
  }
};

const updateStudent = async (data) => {
  try {
    const { id, name, age, email, classID, sex } = data;

    const [rows, fields] = await db
      .promise()
      .query(
        `UPDATE Student set name = ?, age = ?, sex = ?, email = ?, classID = ? where id = ?`,
        [name, age, sex, email, classID, id]
      );

    return rows;
  } catch (err) {
    throw new Error(err);
  }
};

const deleteStudent = async (data) => {
  try {
    const { idDelete } = data;

    const [rows, fields] = await db
      .promise()
      .query(`delete from Student where id = (?);`, [idDelete]);

    return rows;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  getAllStudentByClassId,
  createStudent,
  updateStudent,
  deleteStudent,
};
