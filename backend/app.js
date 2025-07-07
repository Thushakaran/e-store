const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const cookieParser = require('cookie-parser');
const errorMiddleware = require('./middlewares/errorMiddleware');

// Load environment variables
dotenv.config({ path: path.join(__dirname, 'config/config.env') });

// Middlewares
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
const productRoutes = require('./routes/product');
const authRoutes = require('./routes/auth');

app.use('/api', productRoutes);
app.use('/api', authRoutes);

// Serve frontend in production
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../frontend/build')));
//     app.get('*', (req, res) => {
//         res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
//     });
// }

// Error handling middleware
app.use(errorMiddleware);

module.exports = app;