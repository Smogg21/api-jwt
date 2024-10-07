
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // Opciones adicionales si es necesario
        });
        console.log('MongoDB Connected');
    } catch (err) {
        console.error(err.message);
        // Salir de la aplicación si no se puede conectar a la base de datos
        process.exit(1);
    }
};

module.exports = connectDB;
