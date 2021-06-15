'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Task.belongsTo(models.User)
      Task.belongsTo(models.Category)
    }
  };
  Task.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'title must be required'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'description must be required'
        }
      }
    },
    due_date: {
      type: DataTypes.DATE,
      validate: {
        isAfter: {
          args: new Date().toISOString().slice(0, 10),
          msg: "check your input date"
        },
        notEmpty: {
          msg: "deadline must be required"
        },
        isDate: {
          msg: "input must be format date"
        }
      }
    },
    UserId: DataTypes.INTEGER,
    CategoryId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: 'category must be required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Task',
    hooks: {
      beforeCreate: (task) => {
        let convertDate = new Date(task.due_date)
        task.due_date = convertDate
        task.CategoryId = 1
      }
    } 
  });
  return Task;
};