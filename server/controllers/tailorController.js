import { Tailor, Order } from '../models/index.js';

// Create a new tailor
export const createTailor = async (req, res) => {
  try {
    const { name, phone } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'Tailor name is required' });
    }

    const tailor = await Tailor.create({
      name,
      phone
    });

    res.status(201).json({
      success: true,
      message: 'Tailor created successfully',
      data: tailor
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating tailor',
      error: error.message
    });
  }
};

// Get all tailors
export const getTailors = async (req, res) => {
  try {
    const tailors = await Tailor.findAll();
    res.status(200).json({
      success: true,
      data: tailors
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching tailors',
      error: error.message
    });
  }
};

// Get tailor by ID
export const getTailorById = async (req, res) => {
  try {
    const { id } = req.params;
    const tailor = await Tailor.findByPk(id);

    if (!tailor) {
      return res.status(404).json({
        success: false,
        message: 'Tailor not found'
      });
    }

    res.status(200).json({
      success: true,
      data: tailor
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching tailor',
      error: error.message
    });
  }
};

// Update tailor
export const updateTailor = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, phone } = req.body;

    const tailor = await Tailor.findByPk(id);

    if (!tailor) {
      return res.status(404).json({
        success: false,
        message: 'Tailor not found'
      });
    }

    await tailor.update({
      name: name || tailor.name,
      phone: phone || tailor.phone
    });

    res.status(200).json({
      success: true,
      message: 'Tailor updated successfully',
      data: tailor
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating tailor',
      error: error.message
    });
  }
};

// Delete tailor
export const deleteTailor = async (req, res) => {
  try {
    const { id } = req.params;
    const tailor = await Tailor.findByPk(id);

    if (!tailor) {
      return res.status(404).json({
        success: false,
        message: 'Tailor not found'
      });
    }

    await tailor.destroy();

    res.status(200).json({
      success: true,
      message: 'Tailor deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting tailor',
      error: error.message
    });
  }
};
