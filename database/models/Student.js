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
    defaultValue: "https://th.bing.com/th/id/R.abfa04bec496dfb9d3c9ddf555ca94d4?rik=LB%2fT6%2buxfgKuQg&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fKij%2fg5a%2fKijg5a9kT.png&ehk=w79KSNN2Rov1SqDl7XAzzIccwyve1%2biWYR3RC45PWlA%3d&risl=&pid=ImgRaw&r=0" // Replace this with your actual default image url
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