// Load environment variables from .env file
require('dotenv').config();

// JWT Secret Key used to sign and verify JWT tokens
const JWT_SECRET_KEY = process.env.JWT_SECRET;

// Port number on which the server will listen
const SERVER_PORT = process.env.PORT || 8080;

// MongoDB database URI for connecting to the database
const DATABASE_URI = process.env.MONGODB_URI;

// Duration for which JWT tokens are valid
const TOKEN_EXPIRATION_DURATION = '1d';

// Exporting configuration values as an object
module.exports = {
    JWT_SECRET_KEY,
    SERVER_PORT,
    DATABASE_URI,
    TOKEN_EXPIRATION_DURATION
};