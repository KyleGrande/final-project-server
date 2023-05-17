/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false
  },

  imageUrl: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "https://i.pinimg.com/originals/4b/08/35/4b0835c36b8e81ab56ca9462fad7c1fd.jpg"
  },

  gpa: {
    type: Sequelize.FLOAT,
    allowNull: true,
    validate: {
      min: 0.0,
      max: 4.0
    }
  }
});

// Export the student model
module.exports = Student;