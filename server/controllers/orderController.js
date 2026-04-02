import { Order, Customer, Tailor } from '../models/index.js';
import { Op } from 'sequelize';

// Create a new order
export const createOrder = async (req, res) => {
  try {
    const { customerId, dressType, tailorId, givenDate, deliveryDate, notes } = req.body;

    // Validate required fields
    if (!customerId || !dressType || !tailorId || !givenDate || !deliveryDate) {
      return res.status(400).json({
        message: 'Missing required fields: customerId, dressType, tailorId, givenDate, deliveryDate'
      });
    }

    // Check if customer exists
    const customer = await Customer.findByPk(customerId);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    // Check if tailor exists
    const tailor = await Tailor.findByPk(tailorId);
    if (!tailor) {
      return res.status(404).json({ message: 'Tailor not found' });
    }

    const order = await Order.create({
      customerId,
      dressType,
      tailorId,
      givenDate,
      deliveryDate,
      notes,
      status: 'Pending'
    });

    res.status(201).json({
      success: true,
      message: 'Order created successfully',
      data: order
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating order',
      error: error.message
    });
  }
};

// Get all orders with related customer and tailor details
export const getOrders = async (req, res) => {
  try {
    const { status, tailorId } = req.query;
    const where = {};

    if (status) {
      where.status = status;
    }

    if (tailorId) {
      where.tailorId = tailorId;
    }

    const orders = await Order.findAll({
      where,
      include: [
        { model: Customer, attributes: ['id', 'name', 'phone', 'address'] },
        { model: Tailor, attributes: ['id', 'name', 'phone'] }
      ],
      order: [['createdAt', 'DESC']]
    });

    res.status(200).json({
      success: true,
      data: orders
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching orders',
      error: error.message
    });
  }
};

// Get order by ID
export const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Order.findByPk(id, {
      include: [
        { model: Customer, attributes: ['id', 'name', 'phone', 'address'] },
        { model: Tailor, attributes: ['id', 'name', 'phone'] }
      ]
    });

    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }

    res.status(200).json({
      success: true,
      data: order
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching order',
      error: error.message
    });
  }
};

// Update order
export const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, deliveryDate, notes } = req.body;

    const order = await Order.findByPk(id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }

    await order.update({
      status: status || order.status,
      deliveryDate: deliveryDate || order.deliveryDate,
      notes: notes || order.notes
    });

    const updatedOrder = await Order.findByPk(id, {
      include: [
        { model: Customer, attributes: ['id', 'name', 'phone', 'address'] },
        { model: Tailor, attributes: ['id', 'name', 'phone'] }
      ]
    });

    res.status(200).json({
      success: true,
      message: 'Order updated successfully',
      data: updatedOrder
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating order',
      error: error.message
    });
  }
};

// Delete order
export const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByPk(id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }

    await order.destroy();

    res.status(200).json({
      success: true,
      message: 'Order deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting order',
      error: error.message
    });
  }
};

// Get dashboard statistics
export const getDashboardStats = async (req, res) => {
  try {
    const totalOrders = await Order.count();
    const pendingOrders = await Order.count({ where: { status: 'Pending' } });
    const completedOrders = await Order.count({ where: { status: 'Completed' } });
    const deliveredOrders = await Order.count({ where: { status: 'Delivered' } });

    const ordersByTailor = await Order.findAll({
      attributes: ['tailorId'],
      group: ['tailorId'],
      include: [{ model: Tailor, attributes: ['name'] }],
      raw: true,
      subQuery: false
    });

    // Count orders per tailor
    const tailorStats = await Promise.all(
      ordersByTailor.map(async (item) => {
        const count = await Order.count({ where: { tailorId: item.tailorId } });
        return {
          tailorId: item.tailorId,
          Tailor: item.Tailor,
          count
        };
      })
    );

    res.status(200).json({
      success: true,
      data: {
        totalOrders,
        pendingOrders,
        completedOrders,
        deliveredOrders,
        ordersByTailor: tailorStats
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching dashboard statistics',
      error: error.message
    });
  }
};
