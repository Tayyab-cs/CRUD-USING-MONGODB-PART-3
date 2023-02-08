const express = require('express');
const router = express.Router();

const userController = require('../controllers/userControllers')

// Adding user to a Database
router.post('/', userController.createUser);

// Get all users from DB
router.get('/', userController.getAllUsers);

// Get by ID Method
router.get('/:id', userController.getOneUser);

// Update a particular user
router.patch('/:id', userController.updateUser);

// Delete a particular user
router.delete('/:id', userController.deleteUser);

module.exports = router;