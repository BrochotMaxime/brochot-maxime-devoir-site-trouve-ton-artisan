require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');

const categoryRoutes = require('./routes/categoryRoutes');
const artisanRoutes = require('./routes/artisanRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

// Limiteur de requêtes pour éviter les abus
const limiter = rateLimit({
        windowMs: 15 * 60 * 1000,
        max: 100,
        message: {
                message: 'Trop de requêtes envoyées. Veuillez réessayer plus tard.',
        },
});

// Middleware de sécurité et de protection contre les abus
app.use(helmet());
app.use(limiter);
app.use(hpp());

app.use(cors({
        origin: process.env.FRONTEND_URL,
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type'],       
}));

app.use(express.json());

app.get('/', (req, res) => {
        res.json({ message: `API Trouve ton artisan fonctionne.` });
});

app.use('/api/categories', categoryRoutes);
app.use('/api/artisans', artisanRoutes);
app.use('/api/contact', contactRoutes);

app.use((req, res) => {
        res.status(404).json({
                message: `Route introuvable.`,
        });
});

module.exports = app;