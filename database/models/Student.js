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
    defaultValue: "https://th.bing.com/th/id/R.cb331d845f324231c4b15f1c5f37d6f2?rik=sflwM%2f72VFjS0A&riu=http%3a%2f%2fclipartmag.com%2fimages%2fheadshot-silhouette-clipart-26.png&ehk=x8ED4eqysH%2fwrymdu8fxbHJD1YqNAUWxcjWVznriB3s%3d&risl=&pid=ImgRaw&r=0"
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