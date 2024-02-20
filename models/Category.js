// Import the Sequelize Model and DataTypes objects from the 'sequelize' library
const { Model, DataTypes } = require('sequelize');

// Import the sequelize instance from the '../config/connection.js' file
const sequelize = require('../config/connection');

// Define the Category model using the Sequelize Model class
class Category extends Model {}

// Initialize the Category model with the following properties:
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    // Associate the model with the sequelize instance
    sequelize,
    // Disable timestamps for this model
    timestamps: false,
    // Prevent Sequelize from pluralising the table name
    freezeTableName: true,
    // Use underscores instead of camelCase for field names
    underscored: true,
    // Set the model name to 'category'
    modelName: 'category',
  }
);

// Export the Category model for use in other parts of the application
module.exports = Category;
