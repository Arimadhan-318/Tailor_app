import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Customer from './Customer.js';
import Tailor from './Tailor.js';

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  customerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Customer,
      key: 'id'
    }
  },
  dressType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tailorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Tailor,
      key: 'id'
    }
  },
  givenDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  deliveryDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('Pending', 'In Progress', 'Completed', 'Delivered'),
    defaultValue: 'Pending',
    allowNull: false
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  timestamps: true,
  tableName: 'orders'
});

// Define relationships
Order.belongsTo(Customer, { foreignKey: 'customerId' });
Order.belongsTo(Tailor, { foreignKey: 'tailorId' });
Customer.hasMany(Order, { foreignKey: 'customerId' });
Tailor.hasMany(Order, { foreignKey: 'tailorId' });

export default Order;
