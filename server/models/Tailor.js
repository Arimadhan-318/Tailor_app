import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Tailor = sequelize.define('Tailor', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    trim: true
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  timestamps: true,
  tableName: 'tailors'
});

export default Tailor;
