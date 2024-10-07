const express = require('express');
const router = express.Router();
const { register } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

// Ruta para registrar usuario
router.post('/register', register);

// Ruta protegida de ejemplo
router.get('/me', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
});

module.exports = router;
